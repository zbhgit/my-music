/**
 * Created by Z on 2017/12/12.
 */
import React, {Component} from 'react';
import ReactSwipe from 'react-swipe';
import './carousel.scss'
class Carousel extends Component {
  render() {
    return (
      <div className="carousel-wrapper">
        <ReactSwipe className="carousel" swipeOptions={{continuous: true}}>
          <img src="http://p1.music.126.net/tm1BTYNBhJ5FxYAF_idE1g==/19205169602856143.jpg" alt=""/>
          <img src="http://p1.music.126.net/tm1BTYNBhJ5FxYAF_idE1g==/19205169602856143.jpg" alt=""/>

          <img src="http://p1.music.126.net/tm1BTYNBhJ5FxYAF_idE1g==/19205169602856143.jpg" alt=""/>
        </ReactSwipe>
        <ul className="point">
          <li className="active"></li>
          <li></li>
          <li></li>
        </ul>
        <div className="tag">
          首发
        </div>
      </div>
    )
  }
}

export default Carousel