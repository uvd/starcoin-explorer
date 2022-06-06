import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { encoding, onchain_events } from '@starcoin/starcoin';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  txHash: string,
  block: number,
  method: string,
  age: string,
  from: string,
  to: string,
  value: string,
  gas: string,
) {
  return { txHash, block, method,age, from, to,value,gas };
}



interface Props {
  transactions: any,
  address: any,
  className?: string,
}

export default function TransferTransactionTable2(props:Props) {

  const {transactions, address, className } = props;
  console.info(transactions, address, className)
  const rows = transactions.map((transaction:any)=>{
    let  payloadInHex = "";
    if (transaction.user_transaction) {
      payloadInHex = transaction.user_transaction.raw_txn.payload;
    } if (transaction.raw_txn) {
      payloadInHex = transaction.raw_txn.payload;
    }


    const txnPayload:any = payloadInHex
      ? encoding.decodeTransactionPayload(payloadInHex)
      : {};



    const events = transaction.events || [];
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
        console.log('decode event key error',e);
      }
    });

    console.info(txnPayload,transferDirection)




    return createData(transaction.transaction_hash,
      transaction.block_number,
      "x",transaction.timestamp,"x","xx","x",
      transaction.gas_used)
  })



  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Tx Hash</StyledTableCell>
            <StyledTableCell align="right">Method</StyledTableCell>
            <StyledTableCell align="right">Block</StyledTableCell>
            <StyledTableCell align="right">Age</StyledTableCell>
            <StyledTableCell align="right">From</StyledTableCell>
            <StyledTableCell align="right">To</StyledTableCell>
            <StyledTableCell align="right">Value</StyledTableCell>
            <StyledTableCell align="right">Gas</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row:any) => (
            <StyledTableRow key={row.txHash}>
              <StyledTableCell component="th" scope="row">
                {row.txHash}
              </StyledTableCell>
              <StyledTableCell align="right">{row.method}</StyledTableCell>
              <StyledTableCell align="right">{row.block}</StyledTableCell>
              <StyledTableCell align="right">{row.age}</StyledTableCell>
              <StyledTableCell align="right">{row.from}</StyledTableCell>
              <StyledTableCell align="right">{row.to}</StyledTableCell>
              <StyledTableCell align="right">{row.value}</StyledTableCell>
              <StyledTableCell align="right">{row.gas}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}