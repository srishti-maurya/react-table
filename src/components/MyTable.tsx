import { MyTableProps } from '../types/type';
import { Status } from './Status';
import flag from '../assets/svg/flag.svg';
import { DownOutlined } from '@ant-design/icons';
import { compare } from '../utils/compare';
import collapse from '../assets/svg/collapse.svg';
import download from '../assets/svg/download.svg';
import { useState } from 'react';

export const MyTable = ({ data, setData }: MyTableProps) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  return (
    <>
      <img
        src={collapse}
        alt="collapse"
        className="px-sm"
        onClick={() => setIsCollapsed(!isCollapsed)}
      />
      <img src={download} alt="download" className="px-sm" />
      <table className="scrollable">
        <thead className="table-head">
          <tr className="space-around">
            <th
              className="flex"
              onClick={() => compare(data, 'txn_date', setData)}
            >
              <span className="px-sm">Txn Date</span> <DownOutlined />
            </th>
            <th
              className="flex"
              onClick={() => compare(data, 'due_date', setData)}
            >
              <span className="px-sm">Payment due Date</span> <DownOutlined />
            </th>
            <th
              className="flex"
              onClick={() => compare(data, 'payer', setData)}
            >
              <span className="px-sm">Payer</span> <DownOutlined />
            </th>
            <th
              className="flex"
              onClick={() => compare(data, 'payee', setData)}
            >
              <span className="px-sm">Payee</span> <DownOutlined />
            </th>
            <th
              className="flex"
              onClick={() => compare(data, 'original', setData)}
            >
              <span className="px-sm">Original Amt LCY</span> <DownOutlined />
            </th>
            <th className="flex" onClick={() => compare(data, 'usd', setData)}>
              <span className="px-sm">USD Eqv.</span> <DownOutlined />
            </th>
            <th
              className="flex"
              onClick={() => compare(data, 'status', setData)}
            >
              <span className="px-sm">Status</span> <DownOutlined />
            </th>
          </tr>
        </thead>
        {isCollapsed ? null : (
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="flex">
                <td>{row.txn_date}</td>
                <td>{row.due_date}</td>
                <td className="flex">
                  <img src={flag} alt="flag" className="px-sm" /> {row.payer}
                </td>
                <td className="flex">
                  <img src={flag} alt="flag" className="px-sm" /> {row.payee}
                </td>
                <td>{`${row.CCY} ${row.original}`}</td>
                <td>{` $ ${row.usd}`}</td>
                <td
                  style={{
                    backgroundColor: '#fffaeff2',
                    padding: '1rem',
                    width: '15vw',
                  }}
                >
                  {row.status === 'validated' ? (
                    <Status isReconciled={false} />
                  ) : row.status === 'reconciled' ? (
                    <Status isReconciled={true} />
                  ) : row.status === 'netting' ? (
                    <Status
                      isReconciled={true}
                      isChart
                      data={row.netting_summary}
                    />
                  ) : null}
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </>
  );
};
