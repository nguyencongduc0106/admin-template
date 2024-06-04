import { CellProps, Column, useTable } from 'react-table';
import Pagination from '@src/components/shared/table/pagination';

import Skeleton from '../skeleton';

interface TableProps {
  columns: Column<any>[];
  data: Array<any>;
  loading?: boolean;
}

export const genColumn = (Header: string, accessor: string, Cell?: (cellProps: CellProps<any, any>) => JSX.Element) => {
  return Cell
    ? {
        Header,
        accessor,
        Cell,
      }
    : { Header, accessor };
};

export default function Table({ columns, data, loading = false }: TableProps) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

  return (
    <>
      <div
        className={`no-scrollbar max-h-full w-full ${loading ? 'overflow-hidden' : 'overflow-y-scroll'} rounded-lg bg-white shadow-[0px_6px_7px_-2px_rgba(0,0,0,0.08)]`}
      >
        <Skeleton isLoaded={!loading}>
          <table {...getTableProps()} className="w-full">
            <thead className="sticky top-0 z-10 bg-white shadow-[0px_2px_2px_-2px_rgba(0,0,0,0.08)]">
              {headerGroups.map((headerGroup, index) => {
                return (
                  <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                    {headerGroup.headers.map((column) => {
                      const { key, ...props } = column.getHeaderProps();
                      return (
                        <td
                          key={key}
                          scope="col"
                          {...props}
                          className="whitespace-nowrap px-4 py-3 text-left text-sm font-medium text-[#8C8C8C]"
                        >
                          {column.render('Header')}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </thead>

            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                const { key, ...props } = row.getRowProps();
                return (
                  <tr key={key} {...props} className={`border-t border-gray-200 md:hover:bg-gray-50`}>
                    {row.cells.map((cell, cellIndex) => {
                      const { key, ...props } = cell.getCellProps();
                      return (
                        <td
                          data-label={columns[cellIndex].Header}
                          key={key}
                          {...props}
                          className={`h-[56px] px-4 py-[10px] text-sm`}
                        >
                          {cell.render('Cell')}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Skeleton>
      </div>

      {/* Pagination */}
      {!loading && (
        <div className="bg-white shadow-[0px_2px_2px_2px_rgba(0,0,0,0.08)]">
          <Pagination />
        </div>
      )}
    </>
  );
}
