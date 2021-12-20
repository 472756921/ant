---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

默认选中第一项。

## en-US

Default activate first tab.

```jsx
import { TablePage } from 'antd';

const { TabPane } = TablePage;

function callback(key) {
  console.log(key);
}

const optionsBtns = [
  {
    name: 'add',
    // actionFN: () => {
    //   console.log(222);
    // },
  },
  'import',
  'export',
];
const onseacher = (res, cb) => {};
const queryFormList = [
  {
    label: '名称',
    type: 'input',
    name: 'name',
    value: '',
    require: true,
    show: true,
  },
  {
    label: '年龄',
    type: 'input',
    name: 'age',
    value: '',
    require: true,
    show: true,
  },
  {
    label: '身高',
    type: 'input',
    name: 'height',
    value: '',
    require: true,
    show: false,
  },
];

const publicConfig = {
  drawer: {
    dom: '',
    formSubmit: (data, type, closeDrawerFn) => {
      closeDrawerFn();
    },
    formList: [
      {
        label: '名称',
        type: 'input',
        name: 'name',
        value: '',
        require: true,
      },
    ],
  },
};
// eslint-disable-next-line object-shorthand
const Demo = () => (
  <TablePage head={{ optionsBtns, queryFormList, onseacher }} publicConfig={publicConfig} />
);

ReactDOM.render(<Demo />, mountNode);
```
