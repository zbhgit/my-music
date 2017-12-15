/**
 * Created by Z on 2017/12/15.
 */
import React, {Component} from 'react'
import './micCD.scss'

export default class MicCD extends Component {
  render() {
    const {color} = this.props;
    const style = {
      background: color || "#333333"
    };
    return (
      <span className="micCD">
            <i style={style}></i>
            <i style={style}></i>
            <i style={style}></i>
            <i style={style}></i>
      </span>
    )

  }
}