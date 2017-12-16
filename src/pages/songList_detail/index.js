/**
 * Created by Z on 2017/12/15.
 */
import React, {Component} from 'react'
import DetailHeader from  'components/detail_header/header'
import Detail from './detail/detail'
import DetailList from './detail_list/detail_list'
export default class SongDetail extends Component {
  render() {
    const style = {
      backgroundColor: "#9e8f85"
  };
    return (
      <div  className="song_detail">
        <div style={style}>
          <DetailHeader title={"歌单"}/>
          <Detail/>
        </div>
        <DetailList/>
      </div>
    )
  }
}