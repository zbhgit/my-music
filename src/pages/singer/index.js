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


import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {setSonglist} from '../../actions/index'


class Singer extends Component {
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
    const {params: {singerId}} = this.props.match;
    this.getSongs(singerId);
  }

  // 获取歌手单曲数据
  getSongs(singerId) {
    getSingerSongs(singerId)
      .then((response) => {
        if (response.code === 200) {
          this.setState({
            name: response.artist.name,
            hotSongs: response.hotSongs,
            picUrl: response.artist.picUrl,
          });
          const {setSonglist}=this.props;
          setSonglist(response.hotSongs);
        }

      })
  }

  render() {
    const {name, picUrl, hotSongs} = this.state;
    return (
      <div className="singer">
        <DetailHeader title={name}/>
        <SingerImg imgUrl={picUrl}/>
        <SingerSong hotSongs={hotSongs}/>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setSonglist: bindActionCreators(setSonglist, dispatch)
});

export default connect(null, mapDispatchToProps)(Singer)