/**
 * Created by Z on 2017/12/17.
 */
import React, {Component} from 'react'

import './disc.scss'
import needle_fix from 'assets/images/needle-fix.png'
import half_circle from 'assets/images/half-circle.png'
import discImg from 'assets/images/disc-ip6.png'
import disc_light from 'assets/images/disc_light-ip6.png'
import defaultImg from 'assets/images/disc_default.png'
export default class Disc extends Component {
  render() {
    return (
      <div className="disc">
        <div className="cd-wrapper">
          <img className="half" src={half_circle} alt=""/>
          <img className="needle" src={needle_fix} alt=""/>
          <div className="circle-cd">
            <img src={defaultImg} alt=""/>
            <img src={discImg} alt=""/>
            <img src={disc_light} alt=""/>
          </div>
        </div>
        <div className="lyric-wrapper">
          <ul>
            <li>我是歌词</li>
            <li>我是歌词</li>
            <li>我是歌词</li>
            <li>我是歌词</li>
            <li className="current">我是歌词</li>
            <li >我是歌词</li>
            <li>我是歌词</li>
            <li>我是歌词</li>
            <li>我是歌词</li>
            <li>我是歌词</li>
            <li>我是歌词</li>
            <li>我是歌词</li>
            <li>我是歌词</li>
            <li>我是歌词</li>
            <li>我是歌词</li>
            <li>我是歌词</li>
            <li>我是歌词</li>
            <li>我是歌词</li>
            <li>我是歌词</li>
            <li>我是歌词</li>
            <li>我是歌词</li>
            <li>我是歌词</li>
            <li>我是歌词</li>
            <li>我是歌词</li>
            <li>我是歌词</li>
            <li>我是歌词</li>
          </ul>
        </div>

        <div className="control-wrapper">
          <div className="control-bar">
            <span className="current-time">00:29</span>
            <div className="bar-wrapper">
              <div className="bar-back"></div>
              <div className="bar-frond"></div>
              <div className="bar-circle"></div>
            </div>
            <span className="total-time">03:59</span>
          </div>
          <div className="control-button">
            <span className="icon iconfont icon-loop"></span>
            <span className="icon iconfont icon-prev"></span>
            <span className="icon iconfont icon-play01"></span>
            <span className="icon iconfont icon-next"></span>
            <span className="icon iconfont icon-play-list"></span>
          </div>
        </div>
      </div>
    )
  }
}