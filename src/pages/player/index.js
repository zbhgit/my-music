import React, {Component} from 'react'
import Header from './header/player_header'
import Disc from './lyric/disc'
import {connect} from 'react-redux'
import {getSong} from 'api/song.js'
import Loading from 'components/loading/loading'
class Player extends Component {
  constructor(props) {
    super(props);
    this.formatLyric = this.formatLyric.bind(this);
    this.formatLyricTime = this.formatLyricTime.bind(this);
    this.state = {
      detail: {},
      lyric: [],
      url: '',
      isShow: this.props.isShow
    }
  }

  componentWillReceiveProps(nextProps) {

    this._getSong(nextProps.songId)
  }

  _getSong(songId) {
    getSong(songId).then((response) => {
      const detail = {
        songName: response[0].name,
        artist: response[0].ar[0].name
      };

      const url = response[2].data[0].url;

      const lyric = response[1].lrc && response[1].lrc.lyric ? response[1].lrc.lyric : "[00:00] 暂无暂无歌词";
      const lyricArr = this.formatLyric(lyric);

      this.setState({
        detail: detail,
        lyric: Object.assign({},{
          lyricArr:lyricArr,
          picUrl: response[0].al.picUrl
        }),
        url: url,
      })
    })
  }

  formatLyric(lyric) {
    const re = /\[[^[]+/g;
    const arr = lyric.match(re);
    for(let i=0;i<arr.length;i++){
      let lyricWord = arr[i].substring(10);
      arr[i] = [this.formatLyricTime(arr[i].substring(0,10)) , lyricWord.substring(1+lyricWord.indexOf(']')).trim()];
    }
    return arr
  }
  formatLyricTime(num){   //格式日期
    num = num.substring(1,num.length-1);
    let arr = num.split(':');
    return (parseFloat(arr[0]*60) + parseFloat(arr[1])).toFixed(2);
  }

  render() {
    const {isShow} = this.props;
    const {detail, lyric, url} = this.state;
    const left = (isShow && lyric) ? 'translate3d(0,0,0)' : 'translate3d(100%,0,0)';
    const style = {
      position: 'absolute',
      top: 0,
      left: 0,
      backgroundColor: '#231e1b',
      width: '100%',
      height: '100vh',
      transform: left
    };
    if (!detail || !lyric || !url) {
      return (
        <div style={style}>
          <Loading/>
        </div>
      )
    }

    return (
      <div style={style} className="palyer">
        <Header detail={detail}/>
        <Disc lyric={lyric} url={url}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    songId: state.player.id,
    isShow: state.playerShow.isShow
  }
};

export default connect(
  mapStateToProps,
  null
)(Player)