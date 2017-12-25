import React, {Component} from 'react';
import './header.scss'
import MicCD from 'components/micCD/micCD'
import PropTypes from 'prop-types'
class Header extends Component {
  constructor(props) {
    super(props);
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleFocus = this.onHandleFocus.bind(this);
    this.state = {
      keywords: this.props.keywords
    }
  }

  componentDidMount() {

  }

  onHandleChange(event) {
    const value = event.target.value.trim();
    const {setFatherValue} = this.props;
    if (value !== '') {
      this.setState({
        keywords: value
      }, function () {
        if (this.state.keywords) {
          setFatherValue(this.state.keywords)
        }
      });
    }


  }

  onHandleFocus() {
    const {history} = this.props;
    history.push('/search')
  }

  render() {
    return (
      <div className="header">
        <span className="voice"></span>
        <div className="search">
          <span className="icon iconfont icon-search"></span>
          <input value={this.state.keywords}
                 onChange={this.onHandleChange}
                 type="text"
                 placeholder="搜索音乐、专辑、歌手"
                 onFocus={this.onHandleFocus}
          />
        </div>
        <MicCD/>
      </div>
    )
  }
}
Header.propTypes = {
  history: PropTypes.object,
  setFatherValue: PropTypes.func
};

export default Header