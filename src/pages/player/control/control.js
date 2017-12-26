/**
 * Created by Z on 2017/12/26.
 */
import React, {Component} from 'react'
import './control.scss'
import {formatTime} from 'util/util'

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {setAudioCurrentTime} from '../../../actions/index'

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
    this.state = {
      currentTime: '00:00',
      totalTime: '00:00',
      persent: '0%',
      playList: [],
      songList: [],
      currentIndex: 0,
      playing: false
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
        const { setAudioCurrentTime } = self.props;
        setAudioCurrentTime(audio.currentTime)
      }, 1000)
    });
    const barControl = document.querySelector('.bar-circle');
    const barWrapper = document.querySelector('.bar-wrapper');
    barFrond = document.querySelector('.bar-frond');
    const {url} = this.props;
    if (url) {
      barWidth = barWrapper.offsetWidth;
      setTimeout(() => {
        this.initTime();
        this.scrollBar(barControl);
      }, 500)
    }
  }

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


  initTime() {
    const totalTime = formatTime(audio.duration);
    this.setState({
      totalTime: totalTime
    })
  }

  render() {
    const {url} = this.props;
    const {totalTime, currentTime, persent} = this.state;
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
            <span className="icon iconfont icon-loop"></span>
            <span className="icon iconfont icon-prev"></span>
            <span className="icon iconfont icon-play01" onClick={this.onHandlePlay}></span>
            <span className="icon iconfont icon-next"></span>
            <span className="icon iconfont icon-play-list"></span>
          </div>
        </div>
        <audio id="audio" src={url} autoPlay></audio>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  setAudioCurrentTime: bindActionCreators(setAudioCurrentTime, dispatch)
});

export default connect(null, mapDispatchToProps)(Control)