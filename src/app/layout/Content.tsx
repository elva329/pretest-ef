import type { TableProps } from 'antd';
import { Table } from 'antd';
import type { ColumnsType, FilterValue, SorterResult } from 'antd/es/table/interface';
import React, { useState } from 'react';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const Content: React.FC = () => {
  const [filteredInfo, setFilteredInfo] = useState<Record<string, FilterValue | null>>({});
  const [sortedInfo, setSortedInfo] = useState<SorterResult<DataType>>({});

  const handleChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter as SorterResult<DataType>);
  };

  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      width: 100,
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
      rowScope: 'row',
      filteredValue: filteredInfo.title || null,
      sorter: (a, b) => a.name.length - b.name.length,
      sortOrder: sortedInfo.columnKey === 'name' ? sortedInfo.order : null
    },
    {
      title: 'Age',
      width: 100,
      dataIndex: 'age',
      key: 'age',
      fixed: 'left',
      rowScope: 'row',
      sorter: (a, b) => a.age - b.age,
      sortOrder: sortedInfo.columnKey === 'age' ? sortedInfo.order : null,
      ellipsis: true
    },
    {
      title: 'Column 1',
      dataIndex: 'address',
      key: 'address1',
      width: 150,
      filteredValue: filteredInfo.address || null,
      sorter: (a, b) => a.address.length - b.address.length,
      sortOrder: sortedInfo.columnKey === 'address1' ? sortedInfo.order : null,
      ellipsis: true
    },
    {
      title: 'Column 2',
      dataIndex: 'address',
      key: 'address2',
      width: 150,
      filteredValue: filteredInfo.address || null,
      sorter: (a, b) => a.address.length - b.address.length,
      sortOrder: sortedInfo.columnKey === 'address2' ? sortedInfo.order : null,
      ellipsis: true
    },
    {
      title: 'Column 3',
      dataIndex: 'address',
      key: 'address3',
      width: 150,
      filteredValue: filteredInfo.address || null,
      sorter: (a, b) => a.address.length - b.address.length,
      sortOrder: sortedInfo.columnKey === 'address3' ? sortedInfo.order : null,
      ellipsis: true
    },
    {
      title: 'Column 4',
      dataIndex: 'address',
      key: 'address4',
      width: 150,
      filteredValue: filteredInfo.address || null,
      sorter: (a, b) => a.address.length - b.address.length,
      sortOrder: sortedInfo.columnKey === 'address4' ? sortedInfo.order : null,
      ellipsis: true
    },
    {
      title: 'Column 5',
      dataIndex: 'address',
      key: 'address5',
      width: 150,
      filteredValue: filteredInfo.address || null,
      sorter: (a, b) => a.address.length - b.address.length,
      sortOrder: sortedInfo.columnKey === 'address5' ? sortedInfo.order : null,
      ellipsis: true
    },
    {
      title: 'Column 6',
      dataIndex: 'address',
      key: 'address6',
      width: 150,
      filteredValue: filteredInfo.address || null,
      sorter: (a, b) => a.address.length - b.address.length,
      sortOrder: sortedInfo.columnKey === 'address6' ? sortedInfo.order : null,
      ellipsis: true
    },
    {
      title: 'Column 7',
      dataIndex: 'address',
      key: 'address7',
      width: 150,
      filteredValue: filteredInfo.address || null,
      sorter: (a, b) => a.address.length - b.address.length,
      sortOrder: sortedInfo.columnKey === 'address7' ? sortedInfo.order : null,
      ellipsis: true
    },
    {
      title: 'Column 8',
      dataIndex: 'address',
      key: 'address8',
      width: 150,
      filteredValue: filteredInfo.address || null,
      sorter: (a, b) => a.address.length - b.address.length,
      sortOrder: sortedInfo.columnKey === 'address8' ? sortedInfo.order : null,
      ellipsis: true
    },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      rowScope: 'row',
      render: () => <a>action</a>
    }
  ];

  const data: DataType[] = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: `Edward ${i}`,
      age: i + 1,
      address: `London Park no. ${i}`
    });
  }
  return <Table columns={columns} dataSource={data} scroll={{ x: 2000, y: '100vh' }} onChange={handleChange} />;
};

export default Content;
