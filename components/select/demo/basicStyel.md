---
order: 0
title:
  zh-CN: 单选样式
  en-US: style
---

## zh-CN

添加 title 属性，包裹 select

## en-US

Basic Usage.

```jsx
import { Select } from 'antd';

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

ReactDOM.render(
  <>
    <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange} title="单选">
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="disabled" disabled>
        Disabled
      </Option>
      <Option value="Yiminghe">yiminghe</Option>
    </Select>
    <Select defaultValue="lucy" style={{ width: 120 }} title="多选" mode="multiple" maxTagCount={0}>
      <Option value="Jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
    </Select>
  </>,
  mountNode,
);
```
