import './Homepage.less';
import React, {Component} from 'react';
import {Grid, Result} from 'antd-mobile';
import {SmileOutline} from 'antd-mobile-icons';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="page-homepage">
        <Grid.Item span={3}>
          <Result
            status='success'
            title='操作成功'
            description='内容详情可折行，建议不超过两行建议不超过两行建议不超过两行'
          />
        </Grid.Item>
        <Grid.Item span={3}>
          <Result
            status='error'
            title='无法完成操作'
            description='内容详情可折行，建议不超过两行建议不超过两行建议不超过两行'
          />
        </Grid.Item>
        <Grid.Item span={3}>
          <Result
            status='info'
            title='信息提示'
            description='内容详情可折行，建议不超过两行建议不超过两行建议不超过两行'
          />
        </Grid.Item>
        <Grid.Item span={3}>
          <Result
            status='waiting'
            title='等待处理'
            description='内容详情可折行，建议不超过两行建议不超过两行建议不超过两行'
          />
        </Grid.Item>
        <Grid.Item span={3}>

          <Result
            status='warning'
            title='警告提示'
            description='内容详情可折行，建议不超过两行建议不超过两行建议不超过两行'
          />
        </Grid.Item>
        <Grid.Item span={3}>
          <Result
            icon={<SmileOutline/>}
            status='success'
            title='Well done'
            description='内容详情可折行，建议不超过两行建议不超过两行建议不超过两行'
          />
        </Grid.Item>
      </div>
    );
  }
}

export default Homepage;
