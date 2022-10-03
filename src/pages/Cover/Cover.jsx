import './Cover.less';
import React, {Component} from 'react';
import {Grid} from 'antd-mobile';
import {History} from 'h-react-antd-mobile';

class Cover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgmPlaying: true,
    }
  }

  render() {
    return (
      <div className="page-cover">
        <div className="stars">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="face">
          <div className="ring">
            <img src="/public/img/logo.png" alt="logo"/>
          </div>
        </div>
        <Grid className="copyright" columns={3} gap={8}>
          <Grid.Item span={3}>
            <span>邮箱：mzyhaohaoren@qq.com</span>
          </Grid.Item>
          <Grid.Item span={3}>
            <a href="http://www.beian.gov.cn" target="_blank" className="yellow">备案号：粤ICP备16003043号-1</a>
          </Grid.Item>
          <Grid.Item span={3}>
            <span>© Copyright 2015-{(new Date().getFullYear())} All rights reserved.</span>
          </Grid.Item>
        </Grid>
      </div>
    )
  }
}

export default Cover;
