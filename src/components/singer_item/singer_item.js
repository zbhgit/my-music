/**
 * Created by Z on 2017/12/22.
 */
import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import './singer_item.scss'
import PropTypes from 'prop-types'

export default class SingerItem extends Component {
  render() {
    const {singer,icon} = this.props;
    const style = {
      display: icon? '' : "none",
    };
   return (
     <NavLink to={'/singer/:singerId'} className="singer_item">
       <img className="singer_img" src={singer.img1v1Url} alt="歌手相片"/>
       <p className="singer_name">歌手: <span>{singer.name}</span> {singer.alias[0] ? `(${singer.alias[0]})` : ''}</p>
       <span style={style} className="icon iconfont icon-right"></span>
     </NavLink>
   )
  }
}

SingerItem.propTypes = {
  singer: PropTypes.object,
  icon: PropTypes.bool
};