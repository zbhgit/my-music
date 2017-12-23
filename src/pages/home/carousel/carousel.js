/**
 * Created by Z on 2017/12/12.
 */
import React, {Component} from 'react';
import ReactSwipe from 'react-swipe';
import {getBannerData} from '../../../api/home'
import './carousel.scss'
class Carousel extends Component {
  constructor(props) {
    super(props);
    this.setPointActive = this.setPointActive.bind(this);
    this.state = {
      banners: null,
      index: 0
    }
  }

  componentDidMount() {
    getBannerData()
      .then((res) => {
        if (res.code === 200) {
          this.setState({
            banners: res.banners
          })
        }
      })
  }

  setPointActive(index) {
    this.setState({
      index: index
    })
  }

  render() {
    const {banners, index} = this.state;
    const carousel = banners && banners.map((banner) => {
        return (
          <div key={banner.encodeId} className="imgWrapper">
            <img src={banner.pic} alt="banner"/>
            <span style={{backgroundColor: `${banner.titleColor}`}} className="tag">{banner.typeTitle}</span>
          </div>
        )
      });
    const carouselWrapper = banners ? <ReactSwipe className="carousel" swipeOptions={{
      continuous: true,
      callback: this.setPointActive,
      auto: 3000,
    }}>
      {carousel}
    </ReactSwipe> : '';
    const point = banners && banners.map((banner, num) => {
        return (
          <li key={num} className={num === index ? 'active' : ''}>

          </li>
        )
      });
    return (
      <div className="carousel-wrapper">

        {carouselWrapper}

        <ul className="point">
          {point}
        </ul>
      </div>
    )
  }
}

export default Carousel