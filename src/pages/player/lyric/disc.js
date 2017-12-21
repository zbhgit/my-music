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
        <img className="half" src={half_circle} alt=""/>
        <img className="needle" src={needle_fix} alt=""/>
        <div className="circle-cd">
          <img src={defaultImg} alt=""/>
          <img src={discImg} alt=""/>
          <img src={disc_light} alt=""/>
        </div>
      </div>
    )
  }
}