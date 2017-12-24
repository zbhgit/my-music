/**
 * Created by Z on 2017/12/16.
 */
import './item.scss'

import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Item extends Component {
  render() {
    const {name,artist,album,sq,alias} = this.props;
    const icon = sq ?  "icon-sq" : ""  ;
    const className = `icon iconfont ${icon}`;
    const artists = artist ? `${artist} - ` : '';
    return (
      <div className="component_item">
        <div className="item_desc">
          <div className="name-wrapper">
            <span className="name">{name}&nbsp;&nbsp;</span>
            <span className="alias">{alias && `(${alias})`}</span>
          </div>
          <div className="artist-wrapper">
            <span className={className}> </span>
            <span className="artists">{artists} {album}</span>
          </div>
        </div>
        <span className="icon iconfont icon-play01"></span>
      </div>
    )
  }
}

Item.propTypes = {
  name: PropTypes.string,
  artist:PropTypes.string,
  album: PropTypes.string,
  sq: PropTypes.bool
};