import React, {Component} from 'react';
import './Login.less';

class Login extends Component {

  render() {
    return (
      <div className="h-react-login">
        <div className="bg"/>
        <div className="login-box">
          <div className="login-form">
            <h4 className="tit">登录</h4>
            <LoginForm/>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
