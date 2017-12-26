/**
 * Created by Z on 2017/12/16.
 */
import './item.scss'
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {changeSongId,setPlayerShow} from '../../actions/index'
class Item extends Component {
  constructor(props) {
    super(props);
    this.onHandleClick = this.onHandleClick.bind(this);
  }
  onHandleClick(event) {
    event.stopPropagation();
    const id = event.target.getAttribute('data-id');
    const isShow = true;
    const { changeSongId, setPlayerShow} = this.props;
    changeSongId(id);
    setPlayerShow(isShow)
  }
  render() {
    const {name, artist, album, sq, alias, id} = this.props;
    const icon = sq ? "icon-sq" : "";
    const className = `icon iconfont ${icon}`;
    const artists = artist ? `${artist} - ` : '';
    return (
      <div data-id={id} onClick={this.onHandleClick} className="component_item">
        <div data-id={id} className="item_desc">
          <div data-id={id} className="name-wrapper">
            <span data-id={id} className="name">{name}&nbsp;&nbsp;</span>
            <span data-id={id} className="alias">{alias && `(${alias})`}</span>
          </div>
          <div data-id={id} className="artist-wrapper">
            <span data-id={id} className={className}> </span>
            <span data-id={id} className="artists">{artists} {album}</span>
          </div>
        </div>
        <span data-id={id} className="icon iconfont icon-play01"></span>
      </div>
    )
  }
}

Item.propTypes = {
  name: PropTypes.string,
  artist: PropTypes.string,
  album: PropTypes.string,
  sq: PropTypes.bool,
  id: PropTypes.number
};


const mapDispatchToProps = (dispatch) => {
  return {
    changeSongId: bindActionCreators(changeSongId, dispatch),
    setPlayerShow: bindActionCreators(setPlayerShow, dispatch)
  }
};
export default connect(
  null,
  mapDispatchToProps
)(Item)