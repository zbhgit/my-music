/**
 * Created by Z on 2017/12/16.
 */
import './item.scss'

import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Item extends Component {
  render() {
    const {name,artist,album,sq} = this.props;
    const icon = sq ?  "icon-sq" : ""  ;
    const className = `icon iconfont ${icon}`;
    const artists = artist ? `${artist} - ` : '';
    return (
      <div className="component_item">
        <h3 className="component_name">{name}</h3>
        <div className="component_artist">
          <span className={className}> </span>
          <span >{artists} {album}</span>
        </div>
        <span className="icon iconfont icon-play01">
        </span>
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