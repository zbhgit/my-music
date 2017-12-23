/**
 * Created by Z on 2017/12/15.
 */
import './header.scss'
import PropTypes from 'prop-types'

import React, {Component} from 'react'
import MicCD from 'components/micCD/micCD'
export default class DetailHeader extends Component {
  constructor(props) {
    super(props);
    this.onHandleClick = this.onHandleClick.bind(this);
  }

  render() {
    const {title} = this.props;
    return (
      <div className="detail_header">
        <span onClick={this.onHandleClick} className="icon iconfont icon-left"></span>
        <span className="detail_title">{title}</span>
        <MicCD color={"white"}/>
      </div>
    )
  }
  // 暂时用Window.history 处理后退事件
  onHandleClick() {
    window.history.back()
  }
}

DetailHeader.propTypes = {
  title: PropTypes.string
};