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
import {getSingerSongs} from '../../api/singer'
export default class Singer extends Component {
  constructor(props) {
    super(props);
    this.getSongs = this.getSongs.bind(this);
    this.state = {
      name: '',
      hotSongs: [],
      picUrl: '',
    }
  }
  componentDidMount() {
    const {params:{singerId}} = this.props.match;
    this.getSongs(singerId);
  }
  // 获取歌手单曲数据
  getSongs(singerId) {
    getSingerSongs(singerId)
      .then((response) =>{
      if(response.code === 200) {
        this.setState({
          name: response.artist.name,
          hotSongs: response.hotSongs,
          picUrl: response.artist.picUrl,
        })
      }

      })
  }
  render() {
    const {name,picUrl,hotSongs} = this.state;
    return (
      <div className="singer">
        <DetailHeader title={name}/>
        <SingerImg imgUrl={picUrl}/>
        <SingerSong hotSongs={hotSongs} />
      </div>
    )
  }
}