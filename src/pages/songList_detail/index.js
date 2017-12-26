/**
 * Created by Z on 2017/12/15.
 */
import React, {Component} from 'react'
import DetailHeader from  'components/detail_header/header'
import Detail from './detail/detail'
import DetailList from './detail_list/detail_list'
import {getSongListDetail} from '../../api/song'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {setSonglist} from '../../actions/index'


class SongDetail extends Component {
  constructor(props) {
    super(props);
    this._getSongListData = this._getSongListData.bind(this);
    this.insertSqData = this.insertSqData.bind(this);
    this.state = {
      creator: {},
      detail: {},
      tracks: []
    }
  };

  componentDidMount() {
    const {match: {params: {songListId}}} = this.props;
    this._getSongListData(songListId)
  }

  // 获取数据
  _getSongListData(songListId) {
    getSongListDetail(songListId)
      .then((response) => {
        if (response.code === 200) {
          const {playlist, privileges} = response;
          const {creator, tracks} = playlist;
          let detail = {
            coverImgUrl: playlist.coverImgUrl,
            playCount: playlist.playCount,
            name: playlist.name,
            commentCount: playlist.commentCount,
            shareCount: playlist.shareCount,
            subscribedCount: playlist.subscribedCount
          };
          this.insertSqData(privileges,tracks);
          this.setState(Object.assign(this.state, {
            creator: creator,
            detail: detail
          }))
        }
      })
      .catch(err => console.log(err))
  }

  // 处理sq数据
  insertSqData(privileges, tracks) {
    const len = tracks.length;
    const {setSonglist} = this.props;
    for (let i = 0; i < len; i++) {
      const {maxbr} = privileges[i];
      Object.assign(tracks[i], {
        maxbr:maxbr
      })
    }
    this.setState(
      Object.assign(this.state,{
        tracks: tracks
      })
    );
    setSonglist(tracks)
  }

  render() {
    const style = {
      backgroundColor: "rgba(0,0,0,.8)"
    };
    const {creator, detail, tracks} = this.state;
    return (
      <div className="song_detail">
        <div style={style}>
          <DetailHeader title={"歌单"}/>
          <Detail detail={detail} creator={creator}/>
        </div>
        <DetailList tracks={tracks}/>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setSonglist: bindActionCreators(setSonglist, dispatch)
});

export default connect(null, mapDispatchToProps)(SongDetail)