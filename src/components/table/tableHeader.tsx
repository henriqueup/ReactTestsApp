import React from 'react';
import { TableHead, TableRow, TableCell } from '@material-ui/core';

interface TableHeaderProps {
  columnNames: string[]
}

const TableHeader = ({
  columnNames
} : TableHeaderProps) => {
  return (
    <>
      {columnNames && columnNames.length &&
        <TableHead>
          <TableRow>
            {columnNames.map(item => 
              <TableCell>
                {item}
              </TableCell>  
            )}
          </TableRow>
        </TableHead>
      }
    </>
  );
}

export default TableHeader;