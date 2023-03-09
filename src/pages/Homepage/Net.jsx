import React, {Component} from 'react';
import './Net.less';

class Net extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <iframe id="net" src={this.props.href}/>
    );
  }
}

export default Net;
