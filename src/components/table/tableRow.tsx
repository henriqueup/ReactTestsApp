import React from 'react';
import { TableCell, TableRow } from '@material-ui/core';

interface TableRowWrapperProps {
  row: string[],
}

const TableRowWrapper = ({
  row,
} : TableRowWrapperProps) => {
  return (
    <TableRow>
      {row.map(item => 
        <TableCell>
          {item}
        </TableCell>  
      )}
    </TableRow>
  );
}

export default TableRowWrapper;