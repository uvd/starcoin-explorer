import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useTheme } from '@mui/material';
import NewTransactionsRow from '@/common/Table/NewTranscations/NewTransactionsRow';

type  Props = {
  transactions: any,
  address:string
}


interface Column {
  id: 'txHash' | 'method' | 'block' | 'age' | 'from' | 'to' | 'value' | 'gas';
  label: string;
  minWidth?: number;
  maxWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'txHash', label: 'txHash', minWidth: 30 ,maxWidth:80},
  { id: 'method', label: 'method', minWidth: 30 },
  { id: 'block', label: 'block', minWidth: 30 },

  { id: 'from', label: 'from', minWidth: 30 },
  { id: 'to', label: 'to', minWidth: 30 },

  { id: 'value', label: 'value', minWidth: 30 },
  { id: 'gas', label: 'gas', minWidth: 30 },
  { id: 'age', label: 'age', minWidth: 30 },

];



export default function NewTransactions(props: Props) {
  const theme = useTheme();
  console.info("res1",props.transactions);

  const pagerArea = {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : undefined,
    color: theme.palette.getContrastText(theme.palette.background.paper),
  };

  return (
    <Paper sx={pagerArea}>
      <TableContainer sx={{ maxHeight: 440 }} classes={pagerArea}>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth,maxWidth: column.maxWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.transactions
              .map((row:any) => {
                return <NewTransactionsRow trn={row} address={props.address}/>;
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
