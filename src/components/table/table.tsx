import React from 'react';
import { Table, TableBody } from '@material-ui/core';
import TableHeader from './tableHeader';
import TableRowWrapper from './tableRow';

interface TableWrapperProps {
  rows: string[][],
  columnNames: string[],
}

const TableWrapper = ({
  rows,
  columnNames,
} : TableWrapperProps) => {
  return (
    <Table>
      <TableHeader columnNames={columnNames} />
      <TableBody>
        {rows.map(row => 
          <TableRowWrapper row={row} />  
        )}
      </TableBody>
    </Table>
  );
}

export default TableWrapper;