import * as React from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { useTheme } from '@mui/material';
import { formatBalance, shortAddress } from '@/utils/helper';
import { bcs, encoding, onchain_events } from '@starcoin/starcoin';
import { isObject } from 'lodash';
import { arrayify } from '@ethersproject/bytes';
import CommonTime from '@/common/Time';



type  Props = {
  trn: any
  address:string
}

export default function NewTransactionsRow(props:Props){
  const theme = useTheme();
  const rowStyle = { color: theme.palette.getContrastText(theme.palette.background.paper) }

  const {trn,address} = props;
  let payloadInHex= "";
  let isP2P = false;
  let p2pObj = {
    address:"",
    from:"",
    to:"",
    amount:"",
    name:"",
    funcName:""
  };

  if (trn.user_transaction) {
    payloadInHex = trn.user_transaction.raw_txn.payload;
  } if (trn.raw_txn) {
    payloadInHex = trn.raw_txn.payload;
  }



  const txnPayload:any = payloadInHex
    ? encoding.decodeTransactionPayload(payloadInHex)
    : {};
  const type = Object.keys(txnPayload)[0];
  console.info("type",type)

  // @ts-ignore
  if (isObject(txnPayload) && txnPayload.ScriptFunction && txnPayload.ScriptFunction.func && txnPayload.ScriptFunction.func.address === '0x00000000000000000000000000000001'  && txnPayload.ScriptFunction.func.module === 'TransferScripts') {
    // @ts-ignore
    const functionName = txnPayload.ScriptFunction.func.functionName;
    // @ts-ignore
    if (txnPayload.ScriptFunction.func.functionName === 'peer_to_peer_v2' || txnPayload.ScriptFunction.func.functionName === 'peer_to_peer'){
      isP2P = true;
      let amountString
      // @ts-ignore
      if (txnPayload.ScriptFunction.func.functionName === 'peer_to_peer_v2') {
        // @ts-ignore
        amountString = txnPayload.ScriptFunction.args[1]
      }else {
        // @ts-ignore
        amountString = txnPayload.ScriptFunction.args[2]
      }
      const  amount = new bcs.BcsDeserializer(arrayify(amountString))
      p2pObj = {
        funcName:functionName,
        address:address as string,
        from:trn.user_transaction.raw_txn.sender,
        // @ts-ignore
        to:txnPayload.ScriptFunction.args[0],
        amount:amount.deserializeU128().toString(),
        // @ts-ignore
        name:txnPayload.ScriptFunction.ty_args[0].Struct.name,
      };
    }
  }


  const events = trn.events || [];
  let transferDirection = '';
  events.forEach((txnEvent: any) => {
    try {
      const eventKeyInHex = txnEvent.event_key;
      const de = onchain_events.decodeEventKey(eventKeyInHex);
      if (txnEvent.type_tag.includes('DepositEvent') && (de.address === address)) {
        transferDirection = 'IN';
      }
      if (txnEvent.type_tag.includes('WithdrawEvent') && (de.address === address)) {
        transferDirection = 'OUT';
      }
    } catch (e) {
      console.log('decode event key error:',e);
    }
  });



  console.info("isP2P",isP2P)

  const row:any = {}
  row.txHash = trn.transaction_hash;
  row.txHashShort = trn.transaction_hash.substring(0,10);
  row.method = p2pObj.funcName;
  row.block = trn.block_number;
  row.age = trn.timestamp;
  row.from = p2pObj.from.toLowerCase() === address.toLowerCase() ? "this" : p2pObj.from.toLowerCase();
  row.to =  p2pObj.to.toLowerCase() === address.toLowerCase() ? "this" : p2pObj.to.toLowerCase();
  row.value = p2pObj.amount;
  row.gas = trn.gas_used;
  row.transferDirection = transferDirection



  return  <TableRow hover role='checkbox' tabIndex={-1} key={row.txHash}>

    <TableCell style={rowStyle}>
      {shortAddress(row.txHash)}
    </TableCell>

    <TableCell style={rowStyle}>
      {row.method}
    </TableCell>

    <TableCell style={rowStyle}>
      {row.block}
    </TableCell>


    <TableCell style={rowStyle}>
      {shortAddress(row.from)}
    </TableCell>

    <TableCell style={rowStyle}>
      {shortAddress(row.to)}
    </TableCell>

    <TableCell style={rowStyle}>
      {formatBalance(p2pObj.amount)} {p2pObj.name}
    </TableCell>

    <TableCell style={rowStyle}>
      {row.gas}
    </TableCell>

    <TableCell style={rowStyle}>
      <CommonTime
        time={row.age}
      />
    </TableCell>


  </TableRow>
}