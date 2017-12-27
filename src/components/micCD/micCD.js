/**
 * Created by Z on 2017/12/15.
 */
import React, {Component} from 'react'
import './micCD.scss'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {setPlayerShow} from '../../actions/index'
class MicCD extends Component {
  constructor(props) {
    super(props);
    this.onHandleClick = this.onHandleClick.bind(this);
  }
  onHandleClick() {
    const {setPlayerShow,isShow} = this.props;
    setPlayerShow(!isShow)
  }
  render() {
    const {color,playing} = this.props;
    const bgColor = color || "#333333";
    const state = playing? 'running': 'paused';
    const style = {
      background: bgColor,
      animationPlayState:state
    };
    return (
      <span onClick={this.onHandleClick} className="micCd">
            <i className="one" style={style}></i>
            <i className="two" style={style}></i>
            <i  className="three" style={style}></i>
            <i className="four"_ style={style}></i>
      </span>
    )

  }
}

const mapStateToProps = (state) => {
  return {
    isShow: state.playerShow.isSHow,
    playing: state.playing.playing
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPlayerShow: bindActionCreators(setPlayerShow, dispatch)

  }
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MicCD)