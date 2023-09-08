import React from 'react';
import { DotLoading } from 'antd-mobile';

const Loader = () => (
  <div className="loader">
    {/* <Spin /> */}
    <DotLoading style={{fontSize:'50px'}} color='primary' />
  </div>
);

export default Loader;
