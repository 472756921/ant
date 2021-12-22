import * as React from 'react';
import { useState } from 'react';
import Head, { headI } from './head';
import Main from './main';
import Foot from './foot';
import Drawer from './drawer';
import { ConfigContext } from '../config-provider';
import SizeContext, { SizeType } from '../config-provider/SizeContext';

interface publicConfigI {
  drawer?: string;
}

export interface TablePageProps {
  size?: SizeType;
  prefixCls?: string;
  head: headI;
  publicConfig: publicConfigI;
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
      {(contextSize: SizeType) => {
        const persize = propSize !== undefined ? propSize : contextSize;
        const size = persize || contextSize;
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
