import './Homepage.less';
import React, {Component} from 'react';
import {SideBar, Tabs, Toast, Button, Modal} from 'antd-mobile';
import {SoundOutline, SoundMuteOutline} from "antd-mobile-icons";
import {TranslationOutlined, LikeOutlined} from "@ant-design/icons";
import {History, LocalStorage, Parse, Api} from 'h-react-antd-mobile';
import Book from './Book';
import Net from './Net';

class Homepage extends Component {
  constructor(props) {
    super(props);
    const search = Parse.urlSearch();
    this.books = {};
    let lang = LocalStorage.get("lang");
    let langExist = false
    for (const l of History.state.lang) {
      if (lang === l.key) {
        langExist = true;
        break;
      }
    }
    if (!langExist) {
      lang = null;
    }
    this.state = {
      p: search.p || 'index',
      n: search.n || undefined,
      l: lang || History.state.lang[0].key,
      bgmPlaying: true,
    }
    this.stat();
  }

  push = () => {
    let u = '/' + Parse.urlEncode({p: this.state.p, n: this.state.n})
    window.history.replaceState(null, null, History.prefix + u);
    const ids = ["page", "net"]
    ids.forEach((value) => {
      const e = document.getElementById(value)
      if (e) {
        e.scrollTop = 0;
      }
    })
    this.stat();
  }

  summary = () => {
    return require(`./../../book/${History.state.book}/${this.state.l}/summary.js`).default;
  }

  bgm = () => {
    return require(`./../../book/${History.state.book}/bgm.js`).default;
  }

  exhibit = () => {
    return require(`./../../book/${History.state.book}/exhibit.js`).default;
  }

  stat = () => {
    const s = require(`./../../book/${History.state.book}/stat.js`).default;
    if (s) {
      s();
    }
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

  net = () => {
    let summary = this.summary()
    let net = undefined
    let children = undefined;
    for (let i in summary) {
      const v = summary[i]
      if (v.key === this.state.p) {
        children = v.children;
        net = v.net;
        break;
      }
    }
    if (children !== undefined) {
      net = children[0].net;
    }
    console.log(net)
    return net
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

  componentDidMount() {
    const vol = document.getElementById("bgm")
    if (vol) {
      vol.volume = 0.8;
    }
  }

  render() {
    let summary = this.summary()
    let bgm = this.bgm()
    let exhibit = this.exhibit()
    let Cover = History.state.cover
    return (
      <div className="page-homepage">
        <div className="sidebar">
          {
            exhibit &&
            <img className="exhibit" alt="exhibit" src={exhibit} loading="lazy"
                 onError={(evt) => {
                   evt.target.style.display = "none";
                 }}
                 onClick={() => {
                   if (History.state.support) {
                     window.open(History.state.support)
                   }
                 }}
            />
          }
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
        {
          this.net() !== undefined ?
            <Net href={this.net()}/> :
            <div className="books">
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
              <Book path={this.book()}/>
            </div>
        }
        <div className="actions">
          {
            History.state.support &&
            <Button
              color='warning'
              onClick={() => {
                window.open(History.state.support)
              }}
            >
              <LikeOutlined/>
            </Button>
          }
          {
            History.state.lang.length > 1 &&
            <Button
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
                      LocalStorage.set("lang", this.state.l);
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
          }
        </div>
        {Cover && <Cover/>}
        {
          bgm &&
          <div className="audio">
            <audio id="bgm" autoPlay={true} loop={true} src={bgm}/>
            {
              this.state.bgmPlaying ?
                <SoundOutline color='var(--adm-color-primary)' onClick={() => {
                  document.getElementById("bgm").pause();
                  this.setState({bgmPlaying: false});
                }}/> :
                <SoundMuteOutline color='var(--adm-color-weak)' onClick={() => {
                  document.getElementById("bgm").play();
                  this.setState({bgmPlaying: true});
                }}/>
            }
          </div>
        }
      </div>
    )
  }
}

export default Homepage;
