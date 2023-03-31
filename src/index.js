import './antd.less';
import './index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import {HistoryInitial} from 'h-react-antd-mobile';

import preprocessing from "./preprocessing";
import crypto from './crypto.js';

ReactDOM.render(
  <HistoryInitial
    preprocessing={preprocessing}
    forceLogin={false}
    i18n="zh-CN"
    api={{
      key: 'def',
      host: '/api',
      crypto: crypto,
      append: {}
    }}
  />, document.getElementById('h-container'));
