/* eslint-disable react/no-array-index-key */
import * as React from 'react';
import { useState, useEffect } from 'react';
import {
  FileExcelFilled,
  FileWordFilled,
  FilePptFilled,
  FilePdfFilled,
  FileImageFilled,
  FileZipFilled,
  FileUnknownFilled,
  DeleteOutlined,
  FileTextFilled,
} from '@ant-design/icons';
import Button from '../../button';
import Upload from '../../upload';
import Popconfirm from '../../popconfirm';
import Tooltip from '../../tooltip';
import message from '../../message';
import { encodeUrl, fileTypeMap } from '../utils';

interface headersI {
  Authorization: string;
}
interface removeFileFnI {
  id: number;
  callback?(): void;
}
interface FilesI {
  name: string;
  operator?: string;
  path?: string;
  time?: string;
  uid?: string | number;
  url?: string;
  isDeleted?: string | boolean;
  [propName: string]: any;
}
interface UploadInFilePropsI {
  action?: string;
  headers?: headersI;
  prefixCls: string;
  disabled?: boolean;
  removeFileFn?(): removeFileFnI;
  fileListData?: Array<FilesI>;
  getFileDataFN(): string;
  [propName: string]: any;
}

const defHeaders = {
  Authorization:
    'hiseaseyJhbGciOiJIUzUxMiJ9.eyJzYWx0IjoiNGU1OTRmZDMtNDM2ZS00ZGEyLTk2M2YtNDI4OTA0ZDE4Njc3IiwiY3JlYXRlZCI6MTYzOTExNDk2ODIwMCwiaWQiOjE4LCJleHAiOjE2MzkxMTg1Njh9.kJ2ppfgJY5W9nXH-PY-OSZT-hrEgQYLOTORl7pIxRz6Fgq-VTfV9RO64VrLxkhsJWJT_XtKdu1J3V53Xg__vDw',
};
const defaction = 'https://dev-adm-api.local.hiseas.com/admin/api/base/simple/upload';

const fileIconMap = {
  word: <FileWordFilled style={{ color: '#4699fc', fontSize: '26px' }} />,
  excel: <FileExcelFilled style={{ color: '#9a664', fontSize: '26px' }} />,
  ppt: <FilePptFilled style={{ color: '#2b97c6', fontSize: '26px' }} />,
  pdf: <FilePdfFilled style={{ color: '#e94848', fontSize: '26px' }} />,
  image: <FileImageFilled style={{ color: '#ff8f55', fontSize: '26px' }} />,
  compression: <FileZipFilled style={{ color: '#ffc63a', fontSize: '26px' }} />,
  txt: <FileTextFilled style={{ color: '#3565a7', fontSize: '26px' }} />,
  unknown: <FileUnknownFilled style={{ color: '#b1bac3', fontSize: '26px' }} />,
};

function UploadInFile({
  action = defaction,
  headers = defHeaders,
  prefixCls,
  disabled = false,
  removeFileFn,
  getFileDataFN,
  fileListData = [],
}: UploadInFilePropsI) {
  const [fileListNow, setfileListNow] = useState(fileListData);
  const [uploadLoading, setPploadLoading] = useState(false);

  useEffect(() => {
    getFileDataFN({
      getData: () => fileListNow,
    });
  }, [fileListNow]);

  const onChange = ({ file, fileList }) => {
    const { status } = file;
    if (status === 'uploading') {
      setPploadLoading(true);
      setfileListNow(fileList);
    }
    if (status === 'error') {
      setPploadLoading(false);
      const nfileList = fileList.filter(it => it.status !== 'error');
      setfileListNow(nfileList);
      message.error(`${file?.name} 上传失败`);
    }
    if (status === 'done' && file?.response?.code === '200') {
      const { data } = file?.response;
      const newfileListNow = fileListNow.filter(
        it => it.status !== 'error' && it.status !== 'uploading',
      );
      setfileListNow([...newfileListNow, data]);
      setPploadLoading(false);
    }
  };

  function beforeUpload(file) {
    const isLt2M = file.size / 1024 / 1024 < 200;
    if (!isLt2M) {
      message.error('附件大小不能超过200M!');
    }
    return isLt2M;
  }
  return (
    <div>
      <Upload
        name="file"
        multiple
        action={action}
        headers={headers}
        onChange={onChange}
        fileList={fileListNow}
        beforeUpload={beforeUpload}
        showUploadList={false}
        disabled={disabled}
      >
        <Button disabled={uploadLoading} loading={uploadLoading}>
          {!uploadLoading ? '上传' : '上传中'}
        </Button>
      </Upload>
      <div className={`${prefixCls}-attachmentList`}>
        {fileListNow?.map((attachment: FilesI, index: number) => (
          <div key={index} className={`${prefixCls}-attachmentList-attachmentItem`}>
            <div className={`${prefixCls}-attachmentList-flex`}>
              {fileIconMap[fileTypeMap(attachment.name)]}
              <div className={`${prefixCls}-attachmentList-attachmentItem-fileLabel`}>
                <Tooltip title={`${attachment.name}`}>
                  <a
                    className={`${prefixCls}-attachmentList-attachmentItem-fileLabel-fileUrl ${
                      attachment.isDeleted
                        ? `${prefixCls}-attachmentList-attachmentItem-fileLabel-delFileLabel`
                        : ''
                    }`}
                    download
                    href={encodeUrl(attachment.url || '')}
                  >
                    {attachment?.name} / {attachment?.time} -- {attachment?.operator}
                  </a>
                </Tooltip>
                {attachment.isDeleted && (
                  <div className={`${prefixCls}-attachmentList-attachmentItem-fileLabel-delLine`} />
                )}
              </div>
            </div>
            {!attachment.isDeleted && !disabled && removeFileFn && (
              <Popconfirm
                title="确认要删除该附件？"
                onConfirm={() => {
                  const temp = JSON.parse(JSON.stringify(fileListNow));
                  if (attachment?.id) {
                    if (removeFileFn)
                      removeFileFn(attachment?.id, () => {
                        temp[index] = { ...temp[index], isDeleted: true };
                        setfileListNow(temp);
                      });
                  } else {
                    temp.splice(index, 1);
                    setfileListNow(temp);
                  }
                }}
                okText="确认"
                cancelText="取消"
              >
                <DeleteOutlined />
              </Popconfirm>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default UploadInFile;
