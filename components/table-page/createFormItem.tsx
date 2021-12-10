/* eslint-disable no-case-declarations */
import * as React from 'react';
import Form from '../form';
import Input from '../input';
import Select from '../select';
import Cascader from '../cascader';
import Checkbox from '../checkbox';
import Radio from '../radio';
import DatePicker from '../date-picker';
import TimePicker from '../time-picker';
import { randomNumber } from './utils';

const { TextArea } = Input;
const { Option } = Select;
const { RangePicker: DatePickerRangePicker } = DatePicker;
const { RangePicker: TimePickerRangePicker } = TimePicker;

function setStatus(data) {
  return data?.map(it => {
    it.disabled = it.status === 'DISABLE';
    if (it?.children?.length) {
      it.children = setStatus(it?.children);
    }
    return it;
  });
}

const GetFormContent = (data: ListItemI) => {
  switch (data.type) {
    case 'input':
      return (
        <Input
          disabled={data?.disabled}
          style={{ boxShadow: 'none' }}
          autoComplete="off"
          placeholder={!data?.disabled ? '请输入' : undefined}
          {...data?.propsElement}
        />
      );
    case 'select':
      return (
        <Select
          placeholder={!data?.disabled ? '请选择' : undefined}
          disabled={data?.disabled}
          style={{
            width: '100%',
          }}
          {...data?.propsElement}
          className={Style.noborder}
        >
          {data?.checkList?.map((it: checkListI, i: number) => (
            <Option value={it.value} key={i.value} disabled={it.status === 'DISABLE'}>
              {it.label}
            </Option>
          ))}
        </Select>
      );
    case 'cascader':
      const op = setStatus(data?.checkList);
      return (
        <Cascader
          placeholder={!data?.disabled ? '请选择' : undefined}
          disabled={data?.disabled}
          options={op || []}
          {...data?.propsElement}
        />
      );
    case 'checkbox':
      return (
        <Checkbox.Group
          disabled={data?.disabled}
          {...data?.propsElement}
          options={data?.checkList}
        />
      );
    case 'radio':
      return (
        <Radio.Group disabled={data?.disabled} {...data?.propsElement}>
          {data?.checkList?.map((it: checkListI) => (
            <Radio value={it.value} key={it.value}>
              {it.lable}
            </Radio>
          ))}
        </Radio.Group>
      );
    case 'datePicker':
      return (
        <DatePicker disabled={data?.disabled} style={{ width: '100%' }} {...data?.propsElement} />
      );
    case 'datePickerRangePicker':
      return (
        <DatePickerRangePicker
          disabled={data?.disabled}
          style={{ width: '100%' }}
          {...data?.propsElement}
        />
      );
    case 'timePicker':
      return (
        <TimePicker disabled={data?.disabled} style={{ width: '100%' }} {...data?.propsElement} />
      );
    case 'timePickerRangePicker':
      return (
        <TimePickerRangePicker
          disabled={data?.disabled}
          style={{ width: '100%' }}
          {...data?.propsElement}
        />
      );
    case 'textArea':
      return (
        <TextArea
          placeholder={!data?.disabled ? '请输入' : undefined}
          disabled={data?.disabled}
          style={{ width: '100%' }}
          rows={4}
          {...data?.propsElement}
        />
      );
    case 'other':
      return data?.render
        ? data?.render({
            Form,
            Input,
            Select,
            Cascader,
            Option,
            Checkbox,
            Radio,
            DatePicker,
            DatePickerRangePicker,
            TimePicker,
            TimePickerRangePicker,
            TextArea,
            disabled,
          })
        : '';
    default:
      return null;
  }
};

const createFormItem = (data: ListItemI, i: number, layout) => {
  let FormItems = (
    <Form.Item {...data?.propsForm} label={data?.label} name={data?.name} key={i + randomNumber}>
      {GetFormContent(data)}
    </Form.Item>
  );
  if (layout === 'inline') {
    FormItems = <div style={{ marginBottom: '6px' }}>{FormItems}</div>;
  }
  return FormItems;
};

function FormItem({ formList, form, onFormFinish, contextSize, layout = 'inline' }) {
  let formItem = [];
  if (Array.isArray(formList)) {
    formItem = formList?.map((it, i) => createFormItem(it, i, layout));
  }
  return (
    <Form layout={layout} form={form} size={contextSize} onFinish={onFormFinish}>
      {formItem}
    </Form>
  );
}

export default FormItem;
