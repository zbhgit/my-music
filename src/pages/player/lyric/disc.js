/**
 * Created by Z on 2017/12/17.
 */
import React, {Component} from 'react'
import Control from '../control/control'
import Loading from 'components/loading/loading'
import './disc.scss'
import needle_fix from 'assets/images/needle-fix.png'
import half_circle from 'assets/images/half-circle.png'
import discImg from 'assets/images/disc-ip6.png'
import disc_light from 'assets/images/disc_light-ip6.png'
import defaultImg from 'assets/images/disc_default.png'
import {connect} from 'react-redux'

// 缓存 歌词dom
let lyricItem;
let lyricUl;
let liHeight
class Disc extends Component {
  constructor(props) {
    super(props);
    this.scrollLyric = this.scrollLyric.bind(this);
    this.onHandleShowLyric = this.onHandleShowLyric.bind(this);
    this.state = {
      lyricArr: this.props.lyric.lyricArr,
      activeIndex: 0,
      scrollIndex: 0,
      lyricShow: false,
    }
  }

  componentDidMount() {
    lyricItem = document.querySelector('.lyric_item');
    lyricUl = document.querySelector('#lyric');
  }
  componentDidUpdate() {
    if(!liHeight) {
      liHeight = lyricItem.offsetHeight;
    }
  }

  componentWillReceiveProps(nextProps) {
    const {currentTime} = this.props;
    this.scrollLyric(currentTime)
  }

  onHandleShowLyric(e) {
    e.preventDefault();
    e.stopPropagation();
    const {lyricShow} = this.state;
    this.setState({
      lyricShow: !lyricShow,
    })
  }

  // 滚动歌词

  scrollLyric(currentTime) {
    const {lyricArr} = this.state;
    for (let i = 0; i < lyricArr.length; i++) {
      if (i !== lyricArr.length - 1 && currentTime > parseFloat(lyricArr[i][0]) && currentTime < parseFloat(lyricArr[i + 1][0])) {
        this.setState({
          activeIndex: i
        });
        if (i > 5) {
          this.setState({
            scrollIndex: i
          });
          lyricUl.style.transform = `translate3d(0,${(-liHeight * (i - 3))}px,0)`
        }
        else {
          lyricUl.style.transform = `translate3d(0,0,0)`
        }
      }
      else if (i === lyricArr.length - 1 && currentTime > lyricArr[i][0]) {
        this.setState({
          activeIndex: i,
          scrollIndex: i
        });
        // $li.eq(i).attr('class','active').siblings().attr('class','');
        // $detailsLyricUl.css('transform','translate3d(0,'+(-iLiH*(i-3))+'px,0)');
        lyricUl.style.transform = `translate3d(0,${(-liHeight * (i - 3))}px,0)`

      }
    }

  }

  render() {
    const {lyric, url, playing} = this.props;
    const {activeIndex, lyricShow} = this.state;

    const style = {
      animationPlayState: `${playing ? 'running' : 'paused'}`
    };
    if (!lyric) {
      return <Loading/>
    }
    return (
      <div className="disc" onClick={this.onHandleShowLyric}>
        <div className="lyric">
          <div style={{display: `${lyricShow ? 'none ' : ''}`}}
               className="cd-wrapper">
            <img className="half" src={half_circle} alt=""/>
            <img className={`needle ${playing ? 'play' : 'pause' }`} src={needle_fix} alt=""/>
            <div style={style} className={`circle-cd ${playing ? 'rotating': '' }`}>
              <img src={lyric.picUrl || defaultImg} alt=""/>
              <img src={discImg} alt=""/>
              <img src={disc_light} alt=""/>
            </div>
          </div>
          <div style={{display: `${lyricShow ? '' : 'none'}`}}
               className="lyric-wrapper"
               id="lyricWrapper">
            <ul id="lyric">
              {
                lyric.lyricArr && lyric.lyricArr.map((item, index) => {
                  return (
                    <li key={index}
                        className={ activeIndex === index ? "current lyric_item" : 'lyric_item'}>{item[1]}</li>
                  )
                })
              }
            </ul>
          </div>
        </div>
        <div>
          <Control url={url}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  currentTime: state.currentTime.currentTime,
  playing: state.playing.playing
});
export default connect(mapStateToProps, null)(Disc)