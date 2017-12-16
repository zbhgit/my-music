/**
 * Created by Z on 2017/12/15.
 */
import './header.scss'
import PropTypes from 'prop-types'

import React, {Component} from 'react'
import MicCD from 'components/micCD/micCD'
export default class DetailHeader extends Component {
  render(){
    const {title} = this.props;
    return (
      <div className="detail_header">
        <span className="icon iconfont icon-left"></span>
        <span className="detail_title">{title}</span>
        <MicCD color={"white"}/>
      </div>
    )
  }

}

DetailHeader.propTypes = {
  title: PropTypes.string
};