/* eslint-disable react/self-closing-comp */
import * as React from 'react';
import Button from '../button';
import Drawer from '../drawer';
import Form from '../form';
import CreateFormItem from './createFormItem';

const optype = {
  add: '新增',
  edit: '编辑',
  check: '审核',
  show: '查看',
};

function DrawerUser({
  contextSize,
  drawerInfo: { formSubmit, formList },
  drawerOP: {
    op: { visible, type },
    setFN,
  },
}) {
  const [form] = Form.useForm();
  return (
    <Drawer
      maskClosable={false}
      width={400}
      title={optype[type]}
      placement="right"
      onClose={() => {
        setFN({ visible: false, type: 'add' });
        form.resetFields();
      }}
      visible={visible}
      footer={
        formSubmit && (
          <Button
            onClick={() => {
              form.validateFields().then(res => {
                formSubmit(res, type, () => setFN({ visible: false, type: 'add' }));
              });
            }}
          >
            确定
          </Button>
        )
      }
    >
      <CreateFormItem
        formList={formList}
        contextSize={contextSize}
        form={form}
        layout="horizontal"
      />
    </Drawer>
  );
}

export default DrawerUser;
