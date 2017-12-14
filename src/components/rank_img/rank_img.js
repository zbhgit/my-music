/**
 * Created by Z on 2017/12/14.
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'

import './rank_img.scss'

export default class RankImg extends Component {
  render() {
    const {time, url,width} = this.props;

    const style = {
      width: width|| "124px",
      height: width|| "124px",
    };
    return (
      <div className="rank_img" style={style}>
        <img src={url} alt="排行榜图片"/>
        <span className="time">{time}</span>
      </div>
    )
  }
}

RankImg.propTypes ={
  time: PropTypes.string,
  url: PropTypes.string,
  width: PropTypes.string,
};