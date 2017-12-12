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
          <div className="imgWrapper">
            <img src="http://p1.music.126.net/tm1BTYNBhJ5FxYAF_idE1g==/19205169602856143.jpg" alt=""/>
            <span className="tag">首发</span>
          </div>
          <div className="imgWrapper">
            <img src="http://p1.music.126.net/vvZLXI5EqFLsKLlvfqz0uA==/19088621370291879.jpg" alt=""/>
            <span className="tag">首发</span>
          </div>

          <div className="imgWrapper">
            <img src="http://p1.music.126.net/RG1oaC3Tilp1JNagbxOzIw==/19120507207519843.jpg" alt=""/>
            <span className="tag">首发</span>
          </div>

        </ReactSwipe>
        <ul className="point">
          <li className="active"></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    )
  }
}

export default Carousel