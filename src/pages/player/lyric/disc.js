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
    this.state = {
      lyricArr: this.props.lyric.lyricArr,
      activeIndex: 0,
      scrollIndex: 0
    }
  }
  componentDidMount() {
    lyricItem = document.querySelector('.lyric_item');
    lyricUl = document.querySelector('#lyric');
    liHeight = lyricItem.offsetHeight;
  }
  componentWillReceiveProps(nextProps) {
    const {currentTime} = this.props;
    this.scrollLyric(currentTime)
  }


  // 滚动歌词

  scrollLyric(currentTime) {
    const {lyricArr} = this.state;
    for (let i = 0; i < lyricArr.length; i++) {
      if (i !== lyricArr.length - 1 && currentTime > lyricArr[i][0] && currentTime < lyricArr[i + 1][0]) {
        this.setState({
          activeIndex: i
        });
        if (i > 5) {
          this.setState({
            scrollIndex: i
          });
          // $detailsLyricUl.css('transform','translate3d(0,'+(-iLiH*(i-3))+'px,0)');
          lyricUl.style.transform = `translate3d(0,${(-liHeight*(i-3))}px,0)`
        }
        else {
          // $detailsLyricUl.css('transform','translate3d(0,0,0)');
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
        lyricUl.style.transform = `translate3d(0,${(-liHeight*(i-3))}px,0)`

      }
    }

  }

  render() {
    const {lyric, url} = this.props;
    const {activeIndex,scrollIndex} = this.state;

    // const wrapperStyle = {
    //
    // };

    if (!lyric) {
      return <Loading/>
    }
    return (
      <div className="disc">
        <div>
          <div className="cd-wrapper">
            <img className="half" src={half_circle} alt=""/>
            <img className="needle" src={needle_fix} alt=""/>
            <div className="circle-cd">
              <img src={lyric.picUrl || defaultImg} alt=""/>
              <img src={discImg} alt=""/>
              <img src={disc_light} alt=""/>
            </div>
          </div>
          <div className="lyric-wrapper" id="lyricWrapper">
            <ul id="lyric">
              {
                lyric.lyricArr && lyric.lyricArr.map((item, index) => {
                  return (
                    <li key={index} className={ activeIndex === index ? "current lyric_item" : 'lyric_item'}>{item[1]}</li>
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
  currentTime: state.currentTime.currentTime
});
export default connect(mapStateToProps, null)(Disc)