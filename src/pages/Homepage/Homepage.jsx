import './Homepage.less';
import React, {Component} from 'react';
import {SideBar, Tabs, Toast, Button, Modal} from 'antd-mobile';
import {SoundOutline, SoundMuteOutline} from "antd-mobile-icons";
import {TranslationOutlined} from "@ant-design/icons";
import {History, Parse} from 'h-react-antd-mobile';
import Book from './Book';
import axios from "axios";

class Homepage extends Component {
  constructor(props) {
    super(props);
    const search = Parse.urlSearch();
    this.books = {};
    this.state = {
      p: search.p || 'index',
      l: search.l || History.state.lang[0].key,
      n: search.n || undefined,
      autoPlay: false,
    }
  }

  push = () => {
    let u = '/' + Parse.urlEncode({p: this.state.p, n: this.state.n, l: this.state.l})
    window.history.replaceState(null, null, History.prefix + u);
    document.getElementById("page").scrollTop = 0;
  }

  summary = () => {
    return require(`./../../book/${History.state.book}/${this.state.l}/_js/summary.js`).default;
  }

  bgm = () => {
    return require(`./../../book/${History.state.book}/${this.state.l}/_js/bgm.js`).default;
  }

  stat = () => {
    return require(`./../../book/${History.state.book}/${this.state.l}/_js/stat.js`).default;
  }

  book = () => {
    let k = this.state.p || 'index';
    k += this.state.n ? `/${this.state.n}` : ''
    try {
      this.books[k] = require(`./../../book/${History.state.book}/${this.state.l}/${k}.md`);
    } catch (error) {
      Toast.show({
        icon: 'fail',
        content: 'Page Lost!',
        position: 'top',
      })
    }
    return this.books[k]
  }

  renderSideBar = () => {
    let summary = this.summary()
    return (
      summary.map((val) => {
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
    let summary = this.summary()
    for (let i in summary) {
      const v = summary[i]
      if (v.key === this.state.p) {
        children = v.children;
        break;
      }
    }
    if (children === undefined) {
      return null;
    }
    console.log(children);
    return (
      children.map((val) => {
        if (val.hidden === true) {
          return null;
        }
        if (val.disabled === true) {
          return (
            <Tabs.Tab
              disabled={true}
              key={val.key}
              title={<span>{val.icon !== undefined ? val.icon : ''}&ensp;{val.label}</span>}
            />
          );
        }
        if (typeof val.key === 'string') {
          return (
            <Tabs.Tab
              key={val.key}
              title={<span>{val.icon !== undefined ? val.icon : ''}&ensp;{val.label}</span>}
            />
          )
        }
        return null;
      })
    );
  }

  render() {
    let summary = this.summary()
    let bgm = this.bgm()
    let stat = this.stat()
    return (
      <div className="page-homepage">
        <div className="sidebar">
          <SideBar
            activeKey={this.state.p}
            onChange={(key) => {
              this.state.p = key;
              this.state.n = undefined;
              this.setState({p: this.state.p});
              let children = undefined;
              for (let i in summary) {
                const v = summary[i]
                if (v.key === this.state.p) {
                  children = v.children;
                  break;
                }
              }
              if (children !== undefined) {
                this.state.n = children[0].key;
              }
              this.setState({n: this.state.n});
              this.push();
            }}
          >
            {this.renderSideBar()}
          </SideBar>
        </div>
        <div className="books">
          <Button
            className="series"
            color='primary'
            onClick={() => {
              const actions = [];
              History.state.lang.forEach((l) => {
                actions.push({
                  key: l.key,
                  text: l.label,
                  disabled: l.key === this.state.l,
                  primary: true,
                  onClick: () => {
                    this.state.l = l.key;
                    this.setState({l: this.state.l});
                    this.push();
                  }
                })
              })
              Modal.show({
                closeOnAction: true,
                closeOnMaskClick: true,
                actions: actions,
              })
            }}
          >
            <TranslationOutlined/>
          </Button>
          <div className="tabs">
            <Tabs
              stretch={false}
              activeLineMode="auto"
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
          <Book path={this.book()}>{this.stat()}</Book>
          {stat && <iframe style={{display: "none", opacity: 0}} src={stat}/>}
        </div>
        {
          bgm &&
          <div className="audio">
            <audio id="bgm" autoPlay={this.state.autoPlay} loop={true} src={bgm}/>
            {
              this.state.autoPlay ?
                <SoundOutline color='var(--adm-color-primary)' onClick={() => {
                  document.getElementById("bgm").pause();
                  this.setState({autoPlay: false});
                }}/> :
                <SoundMuteOutline color='var(--adm-color-weak)' onClick={() => {
                  document.getElementById("bgm").play();
                  this.setState({autoPlay: true});
                }}/>
            }
          </div>
        }
      </div>
    )
      ;
  }
}

export default Homepage;
