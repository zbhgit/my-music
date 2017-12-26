import React, {Component} from 'react'
import './player_header.scss'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {setPlayerShow} from '../../../actions/index'
 class PlayerHeader extends Component {
  constructor(props) {
    super(props);
    this.onHandleClick = this.onHandleClick.bind(this);
  }
   onHandleClick() {
    const {setPlayerShow} = this.props;
    const isShow = false;
     setPlayerShow(isShow)
   }
  render() {
    const {detail} = this.props;
    return (
      <div className="player_header">
        <span onClick={this.onHandleClick} className="icon iconfont icon-left"></span>
        <div className="song_info">
          <p className="name">{detail.songName}</p>
          <span className="artist">{detail.artist}</span>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setPlayerShow: bindActionCreators(setPlayerShow, dispatch)

  }
};
export default connect(
  null,
  mapDispatchToProps
)(PlayerHeader)