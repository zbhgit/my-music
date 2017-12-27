/**
 * Created by Z on 2017/12/26.
 */
import React, {Component} from 'react'
import './control.scss'
import {formatTime, shuffle} from 'util/util'

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {setAudioCurrentTime, setAudioPlayOrPause,changeSongId} from '../../../actions/index'

// 设置鼠标按下 移动 抬起事件
const isMobile = /Mobile/i.test(navigator.userAgent);
let touchstart = 'touchstart';
let touchmove = 'touchmove';
let touchend = 'touchend';

// 存取audio
let audio;
// 控制条的长度
let barWidth;
// 控制条初始位置
let initPosition;
// 控制条起始坐标
let startPoint;
// 拖动距离
let dis;
// 进度百分比
let scale;

// barFrond dom
let barFrond;
// 播放定时器

let timer;
if (!isMobile) {
  touchstart = 'mousedown';
  touchmove = 'mousemove';
  touchend = 'mouseup';
}
class Control extends Component {
  constructor(props) {
    super(props);
    this.initTime = this.initTime.bind(this);
    this.scrollBar = this.scrollBar.bind(this);
    this.setCurrentPersent = this.setCurrentPersent.bind(this);
    this.setAudioCurrentTime = this.setAudioCurrentTime.bind(this);
    this.audioPause = this.audioPause.bind(this);
    this.audioPlay = this.audioPlay.bind(this);
    this.onHandlePlay = this.onHandlePlay.bind(this);
    // this.setTurnList = this.setTurnList.bind(this);
    this.onHandleTurn = this.onHandleTurn.bind(this);
    this.getCurrentPlayIndex = this.getCurrentPlayIndex.bind(this);
    this.audioNextSong = this.audioNextSong.bind(this);
    this.audioPrevSong = this.audioPrevSong.bind(this);
    this.autoPlayNextSong = this.autoPlayNextSong.bind(this);
    this.state = {
      currentTime: '00:00',
      totalTime: '00:00',
      persent: '0%',
      songlist: [],
      playlist: [],
      currentIndex: 0,
      playing: false,
      turn: 'order',
      icon: 'icon-order'
    }
  }

  componentDidMount() {
    const self = this;
    audio = document.querySelector('#audio');
    audio.addEventListener('playing', () => {
      clearInterval(timer);
      timer = setInterval(function () {
        scale = audio.currentTime / audio.duration;
        const currentTime = formatTime(audio.currentTime);
        self.setState({
          currentTime: currentTime,
          persent: `${scale * 100}%`
        });
        const {setAudioCurrentTime} = self.props;
        setAudioCurrentTime(audio.currentTime)
      }, 1000)
    });
    audio.addEventListener('canplaythrough', () => {
      self.audioPlay(audio)
    });
    audio.addEventListener('pause', () => {
      clearInterval(timer);
    });
    audio.addEventListener('ended', () => {
    self.audioNextSong()
    });

    // const barControl = document.querySelector('.bar-circle');
    // const barWrapper = document.querySelector('.bar-wrapper');
    // barFrond = document.querySelector('.bar-frond');
    // const {url, songlist} = this.props;
    // if (url) {
    //   barWidth = barWrapper.offsetWidth;
    //   setTimeout(() => {
    //     this.initTime();
    //     this.scrollBar(barControl);
    //   }, 500)
    // }
    const barControl = document.querySelector('.bar-circle');
    const {songlist} = this.props;
    this.scrollBar(barControl);
    this.getCurrentPlayIndex();
    this.setState({
      playlist: JSON.parse(JSON.stringify(songlist)),
      songlist: songlist
    });
  }
  componentDidUpdate() {
    const barWrapper = document.querySelector('.bar-wrapper');
    barFrond = document.querySelector('.bar-frond');
    const {url} = this.props;
    if (url) {
      barWidth = barWrapper.offsetWidth;
      setTimeout(() => {
        this.initTime();
      }, 500)
    }
  }
  // 控制条控制
  scrollBar(barControl) {
    const self = this;
    barControl.addEventListener(touchstart, function (ev) {
      ev.preventDefault();
      const touch = ev.changedTouches ? ev.changedTouches[0] : ev;
      const This = this;
      startPoint = touch.pageX;
      initPosition = This.offsetLeft;
      let move = function (ev) {
        const touch = ev.changedTouches ? ev.changedTouches[0] : ev;
        const currentPoint = touch.pageX;
        dis = currentPoint - startPoint;
        let point = initPosition + dis;
        if (point <= 0) {
          point = 0;
        }
        else if (point >= barWidth) {
          point = barWidth;
        }
        This.style.left = `${point}px`;
        scale = `${(point / barWidth) * 100}%`;
        barFrond.style.width = `${point}px`;
        self.setCurrentPersent(scale);
        self.setAudioCurrentTime(point / barWidth);

      };
      document.addEventListener(touchmove, move);
      document.addEventListener(touchend, () => {
        document.removeEventListener(touchmove, move);
      })
    })
  }

  setCurrentPersent(scale) {
    const currentTime = formatTime(parseFloat(scale) * audio.duration / 100);
    this.setState({
      persent: scale,
      currentTime: currentTime
    });
  }

  // 设置播放时间
  setAudioCurrentTime(scale) {
    audio.currentTime = scale * audio.duration;
  }

  // 播放

  audioPlay(el) {
    const {setAudioPlayOrPause} = this.props;
    el.play();
    setAudioPlayOrPause(true)
  }

  // 暂停
  audioPause(el) {
    const {setAudioPlayOrPause} = this.props;
    el.pause();
    setAudioPlayOrPause(false)
  }


  // 下一首

  audioNextSong(ev) {
    ev.stopPropagation();
    const {changeSongId} = this.props;
    const {currentIndex, playlist, turn} = this.state;
    const len = playlist.length;
    let nextIndex;
    if (turn === 'random') {
      nextIndex = (currentIndex + Math.floor(Math.random() * len)) % len
    } else {
      nextIndex = (currentIndex + 1) % len;
    }
    this.setState({
      currentIndex: nextIndex
    });
    const nextSongId = playlist[nextIndex].id;
    changeSongId(nextSongId);
    this.audioPlay(audio)

  }

  //  上一首

  audioPrevSong(ev) {
    ev.stopPropagation();
    let {currentIndex, playlist, turn} = this.state;
    const {changeSongId} = this.props;
    const len = playlist.length;
    let prevIndex;
    if (turn === 'random') {
      prevIndex = (currentIndex + Math.floor(Math.random() * len)) % len
    } else {
      if(currentIndex === 0) {
        currentIndex = len
      }
      prevIndex = currentIndex - 1;
    }
    this.setState({
      currentIndex: prevIndex
    });
    const prevSongId = playlist[prevIndex].id;
    changeSongId(prevSongId);
  }

  //  自动下一首
  autoPlayNextSong() {
    const {changeSongId} = this.props;
    const {currentIndex, playlist, turn} = this.state;
    const len = playlist.length;
    let nextIndex;
    if (turn === 'random') {
      nextIndex = (currentIndex + Math.floor(Math.random() * len)) % len
    } else {
      nextIndex = (currentIndex + 1) % len;
    }
    this.setState({
      currentIndex: nextIndex
    });
    const nextSongId = playlist[nextIndex].id;
    changeSongId(nextSongId);
    this.audioPlay(audio)
  }

  getNextIndex() {

  }
  onHandlePlay(ev) {
    ev.stopPropagation();
    const {setAudioPlayOrPause, playing} = this.props;
    if (playing) {
      this.audioPause(audio);
      setAudioPlayOrPause(!playing)
    } else {
      this.audioPlay(audio);
      setAudioPlayOrPause(!playing)
    }
  }

  // 获取当前播放歌曲index
  getCurrentPlayIndex() {
    const {songlist} = this.props;
    const {songId} = this.props;
    for (let i = 0; i < songlist.length; i++) {
      if (parseInt(songlist[i].id, 10) === parseInt(songId, 10)) {
        this.setState({
          currentIndex: i
        });
        return;
      }
    }
  }

  // 更改播放顺序
  onHandleTurn(ev) {
    ev.stopPropagation()
    const {turn, songlist, playlist} = this.state;
    if (turn === 'order') {
      this.setState({
        turn: 'random',
        icon: 'icon-random',
        playlist: shuffle(playlist)
      })
    } else if (turn === 'random') {
      this.setState({
        turn: 'single',
        icon: 'icon-single',
        playlist: JSON.parse(JSON.stringify(songlist))

      })
    } else {
      this.setState({
        turn: 'order',
        icon: 'icon-order',
        playlist: JSON.parse(JSON.stringify(songlist))
      })
    }

  }


  initTime() {
    const totalTime = formatTime(audio.duration);
    this.setState({
      totalTime: totalTime
    })
  }

  render() {
    const {url, playing} = this.props;
    const {totalTime, currentTime, persent, icon} = this.state;
    const playIcon = `icon iconfont ${playing ? 'icon-pause' : 'icon-play01'}`;
    const circleStyle = {
      left: `${barWidth * parseFloat(persent) / 100}px`
    };
    const frondStyle = {
      width: `${barWidth * parseFloat(persent) / 100}px`
    };
    return (
      <div>
        <div className="control-wrapper">
          <div className="control-bar">
            <span className="current-time">{ currentTime }</span>
            <div className="bar-wrapper">
              <div className="bar-back"></div>
              <div className="bar-frond" style={frondStyle}></div>
              <div className="bar-circle" style={circleStyle}></div>
            </div>
            <span className="total-time">{totalTime}</span>
          </div>
          <div className="control-button">
            <span className={`icon iconfont ${icon}`} onClick={this.onHandleTurn}></span>
            <span className="icon iconfont icon-prev" onClick={this.audioPrevSong}></span>
            <span className={playIcon} onClick={this.onHandlePlay}></span>
            <span className="icon iconfont icon-next" onClick={this.audioNextSong}></span>
            <span className="icon iconfont icon-play-list"></span>
          </div>
        </div>
        <audio id="audio" src={url}></audio>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    playing: state.playing.playing,
    songlist: state.songlist.songlist,
    songId: state.player.id

  }
};

const mapDispatchToProps = (dispatch) => ({
  setAudioCurrentTime: bindActionCreators(setAudioCurrentTime, dispatch),
  setAudioPlayOrPause: bindActionCreators(setAudioPlayOrPause, dispatch),
  changeSongId: bindActionCreators(changeSongId, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Control)