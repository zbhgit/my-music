/**
 * Created by Z on 2017/12/17.
 */
import React, {Component} from 'react'
import './singer_img.scss'
export default class Singer extends Component {
  render() {
    const {imgUrl} = this.props;
    const style = {
      backgroundImage: `url(${imgUrl})`
    };
    return (
        <div style={style} className="artistsImg">

        </div>
    )
  }
}