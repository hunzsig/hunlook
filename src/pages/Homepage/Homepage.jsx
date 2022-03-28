import './Homepage.less';
import React, {Component} from 'react';
import {SideBar, Tabs, Toast} from 'antd-mobile';
import {SmileOutline} from 'antd-mobile-icons';
import {History, Parse} from 'h-react-antd-mobile';

class Homepage extends Component {
  constructor(props) {
    super(props);
    const search = Parse.urlSearch()
    this.state = {
      p: search.p || '',
      n: search.n || undefined,
    }
    console.log(this.state.p);
  }

  componentDidMount() {
  }

  push = () => {
    let u = '/' + Parse.urlEncode({p: this.state.p, n: this.state.n})
    window.history.replaceState(null, null, History.prefix + u);
  }

  renderSideBar = () => {
    return (
      History.state.summary.map((val) => {
        if (val.hidden === true) {
          return null;
        }
        if (val.disabled === true) {
          return (
            <SideBar.Item
              disabled={true}
              key={val.key}
              title={<span>{val.icon !== undefined ? val.icon : ''}&ensp;{val.label}</span>}
            />
          );
        }
        if (typeof val.key === 'string') {
          return (
            <SideBar.Item
              key={val.key}
              title={<span>{val.icon !== undefined ? val.icon : ''}&ensp;{val.label}</span>}
            />
          )
        }
        return null;
      })
    );
  };

  renderTabs = () => {
    let children = undefined;
    for (let i in History.state.summary) {
      const v = History.state.summary[i]
      console.log(v);
      if (v.key === this.state.p) {
        children = v.children;
        break;
      }
    }
    console.log(children);
    if (children === undefined) {
      return null;
    }
    return (
      children.map((val) => {
        if (val.hidden === true) {
          return null;
        }
        if (val.disabled === true) {
          return (
            <Tabs.Tab
              disabled={true}
              title={val.label}
              key={val.key}
            />
          );
        }
        if (typeof val.key === 'string') {
          return (
            <Tabs.Tab
              title={val.label}
              key={val.key}
            />
          )
        }
        return null;
      })
    );
  }

  render() {
    return (
      <div className="page-homepage">
        <div className="sidebar">
          <SideBar
            activeKey={this.state.p}
            onChange={(key) => {
              this.state.p = key
              this.setState({p: this.state.p,})
              let children = undefined;
              for (let i in History.state.summary) {
                const v = History.state.summary[i]
                if (v.key === this.state.p) {
                  children = v.children;
                  break;
                }
              }
              if (children !== undefined) {
                this.state.n = children[0].key
                this.setState({n: this.state.n,})
              }
              this.push()
            }}
          >
            {this.renderSideBar()}
          </SideBar>
        </div>
        <div className="tabs">
          <Tabs
            activeKey={this.state.n}
            onChange={(key) => {
              this.state.n = key;
              this.setState({
                n: key,
              })
              this.push()
            }}
          >
            {this.renderTabs()}
          </Tabs>
        </div>
      </div>
    );
  }
}

export default Homepage;
