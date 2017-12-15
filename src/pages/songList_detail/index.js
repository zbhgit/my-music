/**
 * Created by Z on 2017/12/15.
 */
import React, {Component} from 'react'
import DetailHeader from  './detail_header/header'
import Detail from './detail/detail'
export default class SongDetail extends Component {
  render() {
    const style = {
      backgroundColor: "#9e8f85"
  };
    return (
      <div style={style} className="song_detail">
        <DetailHeader/>
        <Detail/>
      </div>
    )
  }
}