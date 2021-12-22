/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-case-declarations */
import * as React from 'react';
import Form, { FormInstance } from '../form';
import Input from '../input';
import Select from '../select';
import Cascader from '../cascader';
import Checkbox from '../checkbox';
import Radio from '../radio';
import DatePicker from '../date-picker';
import TimePicker from '../time-picker';
import { randomNumber } from './utils';
import { SizeType } from '../config-provider/SizeContext';

const { TextArea } = Input;
const { Option } = Select;
const { RangePicker: DatePickerRangePicker } = DatePicker;
const { RangePicker: TimePickerRangePicker } = TimePicker;

type LayoutType = Parameters<typeof Form>[0]['layout'];
type status = 'DISABLE' | 'ENABLE';
interface FormItemI {
  formList: Array<any>;
  form: FormInstance;
  onFormFinish?: () => any;
  contextSize: SizeType;
  layout?: LayoutType;
}
interface checkListI {
  value: string;
  label: string;
  status: status;
  disabled?: boolean;
  children?: any;
}
interface ListItemI {
  propsForm?: any;
  propsElement?: any;
  label: string;
  name?: string;
  type: string;
  checkList: Array<checkListI>;
  disabled?: boolean | string;
  render: (props: any) => any;
}

function setStatus(data: Array<checkListI>) {
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
        >
          {data?.checkList?.map((it: checkListI, i: number) => (
            <Option value={it.value} key={`${it.value}_${i}`} disabled={it.status === 'DISABLE'}>
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
              {it.label}
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
            disabled: data?.disabled,
          })
        : '';
    default:
      return null;
  }
};

const createFormItem = (data: ListItemI, i: number, layout: string) => {
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

function FormItem({ formList, form, onFormFinish, contextSize, layout = 'inline' }: FormItemI) {
  let formItem: Array<JSX.Element> = [];
  if (Array.isArray(formList)) {
    formItem = formList?.map((it, i) => createFormItem(it, i, layout));
  }
  return (
    <Form
      layout={layout}
      form={form}
      size={contextSize}
      onFinish={() => {
        if (onFormFinish) {
          onFormFinish();
        }
      }}
    >
      {formItem}
    </Form>
  );
}

export default FormItem;
