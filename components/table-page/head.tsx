import * as React from 'react';
import { useState } from 'react';
import Form from '../form';
import Button from '../button';
import Space from '../space';
import CreateFormItem from './createFormItem';
import Modal from '../modal';
import UploadInFile from './components/upload';
import { randomNumber } from './utils';

// interface HeadI{

// }

const optionsBtnsInSystem = ['add', 'import', 'export'];
const optionsBtnsInSystemText = { add: '新增', import: '导入', export: '导出' };
const defaultoptionsBtns = contextSize => <Button size={contextSize}>按钮</Button>;

function Head({
  contextSize,
  pageTitle = '标题',
  optionsBtns = defaultoptionsBtns,
  queryFormList = [],
  onseacher,
  prefixCls,
  openPanel,
}) {
  const [form] = Form.useForm();
  const [form2] = Form.useForm();
  const [importFlag, setimportFlag] = useState(false);
  const [moreQueryFlag, setmoreQueryFlag] = useState(false);
  const [uploadFile, setuploadFile] = useState('');

  prefixCls += '-tablePage';
  const optionsBtnsInSystemFn = {
    add: () => {
      openPanel();
    },
    import: () => {
      setimportFlag(true);
    },
    export: () => {
      console.log('123 :>> ', 123);
    },
  };

  const createOptionsBtns = size => {
    if (Array.isArray(optionsBtns)) {
      return optionsBtns?.map(it => {
        let opname = it;
        let actionFN = null;

        if (typeof it === 'object') {
          opname = it?.name;
          actionFN = it?.actionFN;
        }
        if (optionsBtnsInSystem.includes(opname))
          return (
            <Button
              key={opname + randomNumber}
              size={size}
              onClick={actionFN || optionsBtnsInSystemFn[opname]}
            >
              {optionsBtnsInSystemText[opname]}
            </Button>
          );
        return null;
      });
    }
    if (typeof optionsBtns === 'function') {
      return optionsBtns();
    }
    return optionsBtns;
  };

  return (
    <div className={`${prefixCls}-headContent`}>
      <div className={`${prefixCls}-headContent-head`}>
        <div className={`${prefixCls}-headContent-head-tablePageHeadTitle`}>{pageTitle}</div>
        <div className={`${prefixCls}-headContent-head-tablePageHeadBtns`}>
          <Space>{createOptionsBtns(contextSize)}</Space>
        </div>
      </div>
      <div className={`${prefixCls}-headContent-tablePageQuery`}>
        <div className={`${prefixCls}-headContent-tablePageQuery-queryC`}>
          <CreateFormItem
            formList={queryFormList?.filter(it => it.show)}
            contextSize={contextSize}
            form={form}
            key="head"
          />
        </div>
        {queryFormList?.filter(it => it.show).length !== queryFormList.length && (
          <div className={`${prefixCls}-headContent-tablePageQuery-querM`}>
            <Button type="primary" onClick={onseacher}>
              查询
            </Button>{' '}
            <Button>重置</Button> <Button type="link">更多条件</Button>
          </div>
        )}
      </div>
      <Modal
        width={600}
        maskClosable={false}
        visible={importFlag}
        title="导入"
        onOk={() => {
          const s = uploadFile.getData();
          console.log('s :>> ', s);
          setimportFlag(false);
        }}
        onCancel={() => {
          setimportFlag(false);
        }}
      >
        <div>
          <UploadInFile prefixCls={prefixCls} getFileDataFN={data => setuploadFile(data)} />
        </div>
      </Modal>
      <Modal
        width={1000}
        maskClosable={false}
        visible={moreQueryFlag}
        title="更多搜索"
        onOk={() => {
          form2.validateFields().then(res => {
            onseacher(res, () => {
              form2.resetFields();
              setmoreQueryFlag(false);
            });
          });
        }}
        onCancel={() => {
          form2.resetFields();
          setmoreQueryFlag(false);
        }}
      >
        <CreateFormItem
          formList={queryFormList}
          contextSize={contextSize}
          form={form2}
          onFormFinish={onseacher}
          key="Modal"
        />
      </Modal>
    </div>
  );
}

export default Head;
