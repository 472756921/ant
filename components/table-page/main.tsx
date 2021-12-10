/* eslint-disable react/self-closing-comp */
import * as React from 'react';
import Table from '../table';
import Tabs from '../tabs';

const { TabPane } = Tabs;
const defColumns = [
  {
    title: '姓名',
    key: 'code',
    dataIndex: 'code',
    ellipsis: true,
  },
  {
    title: '年龄',
    key: 'title',
    dataIndex: 'title',
    ellipsis: true,
  },
];
function Main({ columns = defColumns }) {
  return (
    <div className="tablePageTable">
      <Tabs defaultActiveKey="1">
        <TabPane tab="全部" key="1"></TabPane>
        <TabPane tab="审核中" key="2"></TabPane>
      </Tabs>
      <Table
        scroll={{ y: document.body.clientHeight - 220 }}
        rowKey={_ => _.id}
        dataSource={[]}
        columns={columns}
        pagination={false}
      />
    </div>
  );
}

export default Main;
