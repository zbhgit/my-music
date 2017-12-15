/**
 * Created by Z on 2017/12/15.
 */
import './header.scss'

import React, {Component} from 'react'
import MicCD from 'components/micCD/micCD'
export default class DetailHeader extends Component {
  render(){
    return (
      <div className="detail_header">
        <span className="icon iconfont icon-left"></span>
        <span className="detail_title">歌单</span>
        <MicCD color={"white"}/>
      </div>
    )
  }

}