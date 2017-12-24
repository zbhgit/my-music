/**
 * Created by Z on 2017/12/16.
 */
import './detail_list.scss'
import PropTypes from 'prop-types'
import React, {Component} from 'react'
import Item from 'components/song_item/item'

export default class DetailList extends Component {
  render() {
    const {tracks} = this.props;
    return (
      <div className="detail_list">
        <div className="play_all">
          <span className="icon iconfont icon-play01"></span>
          <p className="text">播放全部 <span className="list_count">(共{tracks.length}首)</span></p>
        </div>
        <ul>
          { tracks && tracks.map((track, index) => {
            return (
              <li key={track.id} data-id={track.id} className="item_wrapper">
                <span className="index">{index += 1}</span>
                <Item name={track.name} album={track.al.name} artist={track.ar[0].name} sq={track.maxbr === 999000}/>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

DetailList.propTypes = {
  tracks: PropTypes.array
};