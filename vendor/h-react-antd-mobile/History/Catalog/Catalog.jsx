import './Catalog.less';
import React, {Component} from 'react';
import {SideBar} from 'antd-mobile';
import {History} from 'h-react-antd-mobile';

class Catalog extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
  }

  renderSub = (catalog) => {
    catalog = catalog || History.state.catalog;
    return (
      catalog.map((val, idx) => {
        if (val.hidden === true) {
          return null;
        }
        if (val.disabled === true) {
          return (
            <SideBar.Item
              disabled={true}
              key={val.to}
              title={<span>{val.icon !== undefined ? val.icon : ''}&ensp;{val.label}</span>}
            />
          );
        }
        if (typeof val.to === 'string') {
          return (
            <SideBar.Item
              key={val.to}
              title={<span>{val.icon !== undefined ? val.icon : ''}&ensp;{val.label}</span>}
            />
          )
        }
        return null;
      })
    );
  };

  render() {

    if (Array.isArray(History.state.catalog) === false || History.state.catalog.length <= 0) {
      return null;
    }
    return (
      <div className="catalog">
        <SideBar
          activeKey={History.state.currentUrl}
          onChange={(key) => {
            History.push(key);
          }}
        >
          {this.renderSub()}
        </SideBar>
      </div>
    );
  }
}

export default Catalog;
