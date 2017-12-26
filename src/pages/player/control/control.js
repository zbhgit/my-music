/**
 * Created by Z on 2017/12/26.
 */
import React, {Component} from 'react'
import './control.scss'
import {formatTime} from 'util/util'
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
if (!isMobile) {
  touchstart = 'mousedown';
  touchmove = 'mousemove';
  touchend = 'mouseup';
}
export default class Control extends Component {
  constructor(props) {
    super(props);
    this.initTime = this.initTime.bind(this);
    this.scrollBar = this.scrollBar.bind(this);
    this.setCurrentPersent = this.setCurrentPersent.bind(this);
    this.state = {
      currentTime: '00:00',
      totalTime: '00:00',
      persent: '0%',
      playList: [],
      songList: [],
      currentIndex: 0,
    }
  }

  componentWillReceiveProps(nextProps) {
    audio = document.querySelector('#audio');
    const barControl = document.querySelector('.bar-circle');
    const barWrapper = document.querySelector('.bar-wrapper');
    barFrond = document.querySelector('.bar-frond');
    const {url} = nextProps;
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
    console.log(this);
    barControl.addEventListener(touchstart, function (ev) {
      ev.preventDefault();
      const touch = ev.changedTouches ? ev.changedTouches[0] : ev;
      const This = this;
      startPoint = touch.pageX;
      initPosition = This.offsetLeft;
      let move = function(ev) {
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
        scale = `${(point / barWidth) *100}%`;
        barFrond.style.width = `${point}px`;
        self.setCurrentPersent(scale)
      };
      document.addEventListener(touchmove, move);
      document.addEventListener(touchend, () => {
        document.removeEventListener(touchmove,move);
      })
    })
    // barControl.addEventListener('',function(ev){
    //   var touch = ev.originalEvent.changedTouches ? ev.originalEvent.changedTouches[0] : ev;
    //   var This = this;
    //   disX = touch.pageX - $(this).position().left;
    //   clearInterval(timer);
    //   $(document).on(touchmove+'.move',function(ev){
    //     var touch = ev.originalEvent.changedTouches ? ev.originalEvent.changedTouches[0] : ev;
    //     var L = touch.pageX - disX;
    //     if(L<=0){
    //       L = 0;
    //     }
    //     else if(L >= parentW){
    //       L = parentW;
    //     }
    //     $(This).css('left', L );
    //     scale = L/parentW;
    //   });
    //   $(document).on(touchend+'.move',function(){
    //     $(this).off('.move');
    //     oAudio.currentTime = scale * oAudio.duration;
    //     playing();
    //     clearInterval(timer);
    //     timer = setInterval(playing,1000);
    //   });
    //   return false;
    // });
  }
  setCurrentPersent(scale) {
    const currentTime = formatTime(parseFloat(scale) * audio.duration/100);
    this.setState({
      persent:scale,
      currentTime:currentTime
    })
  }
  initTime() {
    const totalTime = formatTime(audio.duration);
    this.setState({
      totalTime: totalTime
    })
  }

  render() {
    const {url} = this.props;
    const {totalTime,currentTime} = this.state;
    return (
      <div>
        <div className="control-wrapper">
          <div className="control-bar">
            <span className="current-time">{ currentTime }</span>
            <div className="bar-wrapper">
              <div className="bar-back"></div>
              <div className="bar-frond"></div>
              <div className="bar-circle"></div>
            </div>
            <span className="total-time">{totalTime}</span>
          </div>
          <div className="control-button">
            <span className="icon iconfont icon-loop"></span>
            <span className="icon iconfont icon-prev"></span>
            <span className="icon iconfont icon-play01"></span>
            <span className="icon iconfont icon-next"></span>
            <span className="icon iconfont icon-play-list"></span>
          </div>
        </div>
        <audio id="audio" src={url} autoPlay></audio>
      </div>

    )
  }
}