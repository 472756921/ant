/* eslint-disable react/self-closing-comp */
import * as React from 'react';
import Popconfirm from '../popconfirm';
import Pagination from '../pagination';
import Button from '../button';

function Main({
  prefixCls,
  statusBtnDisabled = false,
  onConfirmPopconfirm,
  onCancelPopconfirm,
  page = { pageNo: 1, pageSize: 10, total: 0 },
  onPageChange,
  selectedRows = [],
}) {
  prefixCls += '-tablePage';
  return (
    <div className={`${prefixCls}-tablePageFooter`}>
      <div>
        <span className={`${prefixCls}-checkedNum`}>选中{selectedRows.length}项 </span>
        <Popconfirm
          title="数据将被停用/启用，是否确定继续操作？"
          onConfirm={onConfirmPopconfirm}
          onCancel={onCancelPopconfirm}
          okText="启用"
          cancelText="停用"
          disabled={statusBtnDisabled}
        >
          <Button disabled={statusBtnDisabled}>停用/启用</Button>
        </Popconfirm>
      </div>
      <Pagination
        showSizeChanger
        showQuickJumper
        current={Number(page.pageNo)}
        pageSize={Number(page.pageSize)}
        total={Number(page.total)}
        onChange={onPageChange}
        showTotal={total => `共 ${total} 项`}
      />
    </div>
  );
}

export default Main;
