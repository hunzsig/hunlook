import React, {Component} from 'react';
import hljs from 'highlight.js';
import './Hlvs.less';
import './Book.less';

class Book extends Component {
  constructor(props) {
    super(props);
  }

  highlightCallBack = () => {
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block);
    });
  }

  componentDidMount() {
    this.highlightCallBack();
  }

  componentDidUpdate() {
    this.highlightCallBack();
  }

  render() {
    return (
      <div className="page" dangerouslySetInnerHTML={{__html: this.props.path}}/>
    );
  }
}

export default Book;
