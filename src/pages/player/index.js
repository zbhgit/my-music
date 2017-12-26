import React, {Component} from 'react'
import Header from './header/player_header'
import Disc from './lyric/disc'
import {connect} from 'react-redux'
import {getSong} from 'api/song.js'
class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: {},
      lyric: {},
      url: '',
      isShow: this.props.isShow
    }
  }

  componentWillReceiveProps(nextProps) {

      this._getSong(nextProps.songId)
  }

  _getSong(songId) {
    console.log(songId)
    getSong(songId).then((response) => {
      const detail = {
        songName: response[0].name,
        artist: response[0].ar[0].name
      };

      const url = response[2].data[0].url;
      const lyric = {
        lyric: response[1].lrc.lyric
      };

      this.setState({
        detail: detail,
        lyric: Object.assign(lyric, {
          picUrl:response[0].al.picUrl
        }),
        url: url,
      })
    })
  }

  render() {
    const {isShow} = this.props;
    const {detail, lyric, url} = this.state;
    const left = (isShow && lyric)? 'translate3d(0,0,0)' :'translate3d(100%,0,0)';
    const style = {
      position: 'absolute',
      top: 0,
      left: 0,
      backgroundColor: '#231e1b',
      width: '100%',
      height: '100vh',
      transform: left
    };

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
    isShow:state.playerShow.isShow
  }
};

export default connect(
  mapStateToProps,
  null
)(Player)