import { useSortBy, useTable } from 'react-table';
import styled from 'styled-components';
import React from 'react';
import { Theme } from '../../../utils';

export const Table = ({ columns, data }: any) => {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
    },
    useSortBy,
  );

  // Render the UI for your table
  return (
    <Table.Container {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup, key) => (
          <tr key={key} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column: any, key) => (
              <th key={key} {...column.getHeaderProps(column.getSortByToggleProps())}>
                <>
                  {column.render('Header')}
                  <span>{column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}</span>
                </>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, key) => {
          prepareRow(row);
          return (
            <tr key={key} {...row.getRowProps()}>
              {row.cells.map((cell, key) => {
                return (
                  <td key={key} {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </Table.Container>
  );
};

Table.Container = styled('table')`
  border-spacing: 0;
  border: 1px solid ${Theme.colors.black};
  tr {
    :last-child {
      td {
        border-bottom: 0;
      }
    }
  }

  th,
  td {
    margin: 0;
    padding: 0.5rem;
    border-bottom: 1px solid ${Theme.colors.black};
    border-right: 1px solid ${Theme.colors.black};

    :last-child {
      border-right: 0;
    }
  }
`;
