import * as React from 'react';
import { useState } from 'react';
import Head from './head';
import Main from './main';
import Foot from './foot';
import Drawer from './drawer';
import { ConfigContext } from '../config-provider';
import SizeContext, { SizeType } from '../config-provider/SizeContext';

export interface TablePageProps {
  size?: SizeType;
}

function TablePage({ size: propSize, ...props }: TablePageProps) {
  const [drawerOP, setdrawerOP] = useState({ visible: false, type: 'add' });

  const {
    prefixCls: customizePrefixCls,
    head: { queryFormList, pageTitle, optionsBtns, onseacher },
    publicConfig: { drawer },
  } = props;

  const { getPrefixCls } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls('table-page', customizePrefixCls);

  return (
    <SizeContext.Consumer>
      {contextSize => {
        const persize = propSize !== undefined ? propSize : contextSize;
        const size = persize || contextSize || 'default';
        return (
          <div className={`${prefixCls}-tablePage`}>
            <Head
              prefixCls={prefixCls}
              contextSize={size}
              pageTitle={pageTitle}
              optionsBtns={optionsBtns}
              queryFormList={queryFormList}
              onseacher={onseacher}
              openPanel={() => {
                setdrawerOP({ visible: true, type: 'add' });
              }}
            />
            <Main contextSize={size} prefixCls={prefixCls} />
            <Foot contextSize={size} prefixCls={prefixCls} />
            {drawer?.dom ? (
              drawer?.dom
            ) : (
              <Drawer
                contextSize={size}
                prefixCls={prefixCls}
                drawerInfo={drawer}
                drawerOP={{ op: drawerOP, setFN: setdrawerOP }}
              />
            )}
          </div>
        );
      }}
    </SizeContext.Consumer>
  );
}

export default TablePage;
