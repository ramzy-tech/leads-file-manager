import { useMemo } from "react";
import { ColDefinitionType, RecordType } from "../../types/types";
import { useGlobalFilter, useTable } from "react-table";
import GlobalFilter from "./GlobalFilter";

type Props = {
  records: RecordType[];
  columns: ColDefinitionType[];
};

const Table = ({ records, columns }: Props) => {
  const memoizedColumns = useMemo(() => columns, []);
  const memoizedData = useMemo(() => records, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    { columns: memoizedColumns, data: memoizedData },
    useGlobalFilter,
  );

  const { globalFilter } = state;

  return (
    <div className="flex max-h-[600px] flex-col gap-4 rounded-lg bg-white p-1 outline-none">
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <div className="overflow-x-scroll">
        <table {...getTableProps({ className: "relative" })}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps({
                      className:
                        "sticky top-0 text-nowrap border border-sky-200 bg-yellow-400 px-4 py-3 text-start text-white",
                    })}
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr
                  className="border-b bg-white even:bg-blue-100 hover:bg-sky-300"
                  {...row.getRowProps()}
                >
                  {row.cells.map((cell) => {
                    return (
                      <td
                        className="max-w-[40ch] overflow-hidden text-ellipsis text-nowrap border border-sky-200 px-4 py-4"
                        {...cell.getCellProps()}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
