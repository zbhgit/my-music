import React, {Component} from 'react'
export default class PlayerHeader extends Component {
  render() {
    return (
      <div className="player_header">
        <span className="icon iconfont icon-left"></span>
        <div className="song_info">
          <p className="name">可爱女人</p>
          <span className="artist">周杰伦</span>
        </div>
      </div>
    )
  }
}