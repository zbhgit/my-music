/**
 * Created by Z on 2017/12/14.
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'

import './title.scss'

export default class Title extends Component {
  render() {
    const{title,icon} = this.props;
    const style = {
      display:icon ? '' : 'none'
    };
    return (
      <div className="title">
        <h3>{title}<span className="icon iconfont icon-right" style={style}></span></h3>
      </div>
    )
  }
}

Title.propTypes ={
  title: PropTypes.string,
  icon: PropTypes.bool
};