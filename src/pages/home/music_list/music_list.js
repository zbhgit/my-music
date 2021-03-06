import React, {Component} from 'react';
import Item from 'components/song_item/item';
import Title from 'components/title/title';
import {getRecommendPlaylist, getNewSongs} from '../../../api/home'
import {formatCount, sortArtists, setEllipsis} from 'util/util'
import {NavLink} from 'react-router-dom'
import Loading from 'components/loading/loading'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {setSonglist} from '../../../actions/index'

import './music_list.scss'
class MusicList extends Component {
  constructor(props) {
    super(props);
    this._setSonglist = this._setSonglist.bind(this);
    this.state = {
      playLists: [],
      newSongs: []
    }
  }

  componentDidMount() {
    this._getRecommendPlaylist();
    this._getNewSongs();
  }

  // 获取推荐歌单
  _getRecommendPlaylist() {
    getRecommendPlaylist()
      .then(response => {
        if (response.code === 200) {
          this.setState(Object.assign(this.state, {
            playLists: response.playlists
          }))
        }
      })
  }

  // 获取最新音乐
  _getNewSongs() {
    getNewSongs()
      .then(response => {
        if (response.code === 200) {
          this.setState(Object.assign(this.state, {
            newSongs: response.result
          }));
          this._setSonglist(response.result);
        }
      })
  }

  _setSonglist(data) {
    const {setSonglist} = this.props;
    setSonglist(data)
  }

  render() {
    const {playLists, newSongs} = this.state;
    const playListLinks = playLists && playLists.map((playList) => {
        return (
          <NavLink key={playList.id} to={`song/${playList.id}`} href="button" className="item">
            <img src={playList.coverImgUrl} alt="歌单封面"/>
            <div className="listen_count">
              <span className="icon iconfont icon-listen"></span>
              <span className="count">{formatCount(playList.playCount)}</span>
            </div>
            <p className="description">{setEllipsis(playList.name)}</p>
          </NavLink>
        )
      });
    if (newSongs.length === 0) {
      return (
        <Loading/>
      )
    }
    return (
      <div className="music_list">
        {/*精品歌单*/}
        <div className="recommend">
          <Title title={'推荐歌单'}/>
          <div className="recommend_item--wrapper">
            {playListLinks}
          </div>
        </div>
        {/*最新音乐*/}
        <div className="new_song">
          <h3 className="song_title">最新音乐</h3>
          <ul >
            {newSongs && newSongs.map((song) => {
              return (
                <li key={song.id}>
                  <Item name={`${song.name}`}
                        artist={sortArtists(song.song.artists)}
                        album={song.song.album.name}
                        sq={song.song.privilege.maxbr === 999000}
                        alias={song.song.alias[0]}
                        id={song.id}
                  />
                </li>
              )
            }) }
          </ul>
        </div>
        <div className="recommend-app">
          <p>打开APP，发现更多好听音乐</p>
          <span>网易所有，如有侵权，请联系删除</span>
        </div>
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => ({
  setSonglist: bindActionCreators(setSonglist, dispatch)
});

export default connect(null, mapDispatchToProps)(MusicList)