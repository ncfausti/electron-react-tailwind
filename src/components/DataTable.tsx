import React from 'react';
import { useTable } from 'react-table';
import ITableInfo from '../interfaces/ITableInfo';

export default function DataTable(props) {
  const data = React.useMemo(
    () => [
      {
        col1: 'Jane Doe',
        col2: 'California',
        col3: '4QFJ 12345 67890',
        col4: 'Participant 1',
      },
      {
        col1: 'Jane Doe',
        col2: 'California',
        col3: '4QFJ 12345 67890',
        col4: 'Participant 1',
      },
      {
        col1: 'Jane Doe',
        col2: 'California',
        col3: '4QFJ 12345 67890',
        col4: 'Participant 1',
      },
      {
        col1: 'Jane Doe',
        col2: 'California',
        col3: '4QFJ 12345 67890',
        col4: 'Participant 1',
      },
      {
        col1: 'Jane Doe',
        col2: 'California',
        col3: '4QFJ 12345 67890',
        col4: 'Participant 1',
      },
      {
        col1: 'Jane Doe',
        col2: 'California',
        col3: '4QFJ 12345 67890',
        col4: 'Participant 1',
      },
      {
        col1: 'Jane Doe',
        col2: 'California',
        col3: '4QFJ 12345 67890',
        col4: 'Participant 1',
      },
      {
        col1: 'Jane Doe',
        col2: 'California',
        col3: '4QFJ 12345 67890',
        col4: 'Participant 1',
      },
      {
        col1: 'Jane Doe',
        col2: 'California',
        col3: '4QFJ 12345 67890',
        col4: 'Participant 1',
      },
      {
        col1: 'Jane Doe',
        col2: 'California',
        col3: '4QFJ 12345 67890',
        col4: 'Participant 1',
      },
      {
        col1: 'Jane Doe',
        col2: 'California',
        col3: '4QFJ 12345 67890',
        col4: 'Participant 1',
      },
      {
        col1: 'Jane Doe',
        col2: 'California',
        col3: '4QFJ 12345 67890',
        col4: 'Participant 1',
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'col1', // accessor is the "key" in the data
      },
      {
        Header: 'Location',
        accessor: 'col2',
      },
      {
        Header: 'MGRS',
        accessor: 'col3', // accessor is the "key" in the data
      },
      {
        Header: 'Participants',
        accessor: 'col4',
      },
    ],
    []
  );
  const tableInstance = useTable({ columns, data });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    // apply the table props
    // <div className="flex flex-col">
    //   <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    //     <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
    //       <div className="shadow overflow-hidden border-b border-gray-200">
    <div className="h-5/6 overflow-scroll rounded-b-4xl">
      <table
        className="min-w-full divide-y divide-gray-200"
        {...getTableProps()}
      >
        <thead className="bg-gray-50 text-left">
          {
            // Loop over the header rows
            headerGroups.map((headerGroup) => (
              // Apply the header row props
              <tr {...headerGroup.getHeaderGroupProps()}>
                {
                  // Loop over the headers in each row
                  headerGroup.headers.map((column) => (
                    // Apply the header cell props
                    <th
                      className="font-normal text-xs p-4"
                      {...column.getHeaderProps()}
                    >
                      {column.render('Header')}
                    </th>
                  ))
                }
              </tr>
            ))
          }
        </thead>
        {/* Apply the table body props */}
        <tbody
          className={`${props.bgColor} divide-y divide-gray-200`}
          {...getTableBodyProps()}
        >
          {
            // Loop over the table rows
            rows.map((row) => {
              // Prepare the row for display
              prepareRow(row);
              return (
                // Apply the row props
                <tr {...row.getRowProps()}>
                  {
                    // Loop over the rows cells
                    row.cells.map((cell) => {
                      // Apply the cell props
                      return (
                        <td
                          className="p-4 whitespace-nowrap text-white text-sm"
                          {...cell.getCellProps()}
                        >
                          {
                            // Render the cell contents
                            cell.render('Cell')
                          }
                        </td>
                      );
                    })
                  }
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
