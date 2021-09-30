import React from 'react';
import { TableHead, TableRow } from '@material-ui/core';

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
            
          </TableRow>
        </TableHead>
      }
    </>
  );
}

export default TableHeader;