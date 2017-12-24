/**
 * Created by Z on 2017/12/15.
 */
import React, {Component} from 'react'
import Count from 'components/count/count'
import {formatCount} from 'util/util'
import './detail.scss'
import PropTypes from 'prop-types'

export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const {creator,detail} = this.props;
    return (
      <div className="detail">
        <div className="detail_description">
          <div className="imgWrapper">
            <img src={detail.coverImgUrl} alt=""/>
            <div className="listen_count">
              <span className="icon iconfont icon-listen"></span>
              <span> {formatCount(detail.playCount)}</span>
            </div>
          </div>
          <div className="description">
            <p className="text">{detail.name}</p>
            <div className="creator">
              <img className="avatar" src={creator.avatarUrl} alt="" />
              <span className="nikname">{creator.nickname}</span>
            </div>

          </div>
        </div>
        <div className="detail_count">
          <Count iconType={"icon-add"} count={formatCount(detail.subscribedCount)}/>
          <Count iconType={"icon-message"} count={detail.commentCount}/>
          <Count iconType={"icon-fenxiang"} count={detail.shareCount}/>
          <Count iconType={"icon-download"} count={"下载"}/>
        </div>
      </div>
    )

  }
}

Detail.propTypes = {
  creator: PropTypes.object,
  detail: PropTypes.object
};