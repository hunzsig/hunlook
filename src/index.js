import './antd.less';
import './index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import {HistoryInitial} from 'h-react-antd-mobile';

import preprocessing from "./preprocessing";

document.title = preprocessing.book.toUpperCase() + " 技术文档 · 魂书"

ReactDOM.render(
  <HistoryInitial
    preprocessing={preprocessing}
    forceLogin={false}
    i18n="zh-CN"
    api={{
      key: 'def',
      host: '/api',
      crypto: null /*{ mode: 'des-cbc', secret: 'iod13kxx' }*/,
      append: {}
    }}
  />, document.getElementById('h-container'));
