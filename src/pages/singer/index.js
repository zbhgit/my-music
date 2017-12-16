/**
 * Created by Z on 2017/12/17.
 */
/**
 * Created by Z on 2017/12/17.
 */
import React, {Component} from 'react'
import DetailHeader from 'components/detail_header/header'
import SingerImg from './singer_img/singer_img'
import SingerSong from './singer_song/singer_song'
export default class Singer extends Component {
  render() {
    return (
      <div className="singer">
        <DetailHeader title={"歌手"}/>
        <SingerImg/>
        <SingerSong/>
      </div>
    )
  }
}