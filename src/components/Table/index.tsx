import React, { BaseSyntheticEvent, useState } from 'react';
import { useFilters, useTable } from 'react-table';
import Input from '../Input/index';
import { TableProps } from './interface';

import { TableStyled } from './styled';

import { FaSearch } from 'react-icons/fa';

const Table = ({data, columns} : TableProps) => {

  const { 
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    //@ts-ignore
    setFilter
  } = useTable({columns, data }, useFilters)

  const [filterInput, setFilterInput] = useState("");

  const handleFilterChange = (e: BaseSyntheticEvent) => {
    const value = e.target.value;
    setFilter("name", value);
    setFilterInput(value);
  };

  return (
    <>
      <Input
        value={filterInput}
        size="small"
        onChange={handleFilterChange}
        title="Search Name"
        icon={<FaSearch/>}
        iconPosition="right" 
      />
      <TableStyled {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </TableStyled>
    </>
  );
};

export default Table;