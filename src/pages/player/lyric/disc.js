/**
 * Created by Z on 2017/12/17.
 */
import React, {Component} from 'react'
import Control from '../control/control'
import './disc.scss'
import needle_fix from 'assets/images/needle-fix.png'
import half_circle from 'assets/images/half-circle.png'
import discImg from 'assets/images/disc-ip6.png'
import disc_light from 'assets/images/disc_light-ip6.png'
import defaultImg from 'assets/images/disc_default.png'
export default class Disc extends Component {
  constructor(props) {
    super(props);
    this.formatLyric = this.formatLyric.bind(this);
    this.formatLyricTime = this.formatLyricTime.bind(this);
    this.state = {
      lyricArr: []
    }
  }
  componentWillReceiveProps(nextProps) {
    const {lyric} = nextProps;
    if(lyric.lyric) {
      const lyricArr = this.formatLyric(lyric.lyric);
      this.setState({
        lyricArr:lyricArr
      })
    }

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
    const {lyric, url} = this.props;
    const {lyricArr} =this.state;
    return (
      <div className="disc">
        <div className="cd-wrapper">
          <img className="half" src={half_circle} alt=""/>
          <img className="needle" src={needle_fix} alt=""/>
          <div className="circle-cd">
            <img src={lyric.picUrl || defaultImg} alt=""/>
            <img src={discImg} alt=""/>
            <img src={disc_light} alt=""/>
          </div>
        </div>
        <div className="lyric-wrapper">
          <ul>
            {
              lyricArr && lyricArr.map((lyric,index) => {
                return (
                  <li key={index} className={"current"}>{lyric[1]}</li>
                )
              })
            }
          </ul>
        </div>
        <Control url={url}/>
      </div>
    )
  }
}