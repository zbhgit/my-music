/**
 * Created by Z on 2017/12/15.
 */
import React, {Component} from 'react'
import Count from 'components/count/count'
import './detail.scss'

export default class Detail extends Component {
  render() {
    return (
      <div className="detail">
        <div className="detail_description">
          <div className="imgWrapper">
            <img src="http://p1.music.126.net/uXbDB1aWsp36_I_lQs-DeA==/1411772930113118.jpg" alt="描述照片"/>
            <div className="listen_count">
              <span className="icon iconfont icon-listen"></span>
              <span> 444万</span>
            </div>
          </div>
          <div className="description">
            <p className="text">这些充满『强烈画面感』的音乐</p>
            <div className="creator">
              <img className="avatar" src="http://p1.music.126.net/XUOL_7vvPICLsF-t0hS1zQ==/109951163044041721.jpg" alt="avatar"/>
              <span className="nikname">半泽树</span>
            </div>

          </div>
        </div>
        <div className="detail_count">
          <Count iconType={"icon-add"} count={4444}/>
          <Count iconType={"icon-message"} count={4444}/>
          <Count iconType={"icon-fenxiang"} count={4444}/>
          <Count iconType={"icon-download"} count={4444}/>
        </div>
      </div>
    )

  }
}