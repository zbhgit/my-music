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
    let show = !isShow;
    setPlayerShow(show)
  }
  render() {
    const {color} = this.props;
    const style = {
      background: color || "#333333"
    };
    return (
      <span onClick={this.onHandleClick} className="micCD">
            <i style={style}></i>
            <i style={style}></i>
            <i style={style}></i>
            <i style={style}></i>
      </span>
    )

  }
}

const mapStateToProps = (state) => {
  return {
    isShow: state.playerShow.isSHow
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