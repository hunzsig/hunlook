import React, {Component} from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/vs.css';
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
      <div dangerouslySetInnerHTML={{__html: this.props.path}}/>
    );
  }
}

export default Book;
