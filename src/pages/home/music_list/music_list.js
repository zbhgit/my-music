import React, {Component} from 'react';
import Item from 'components/song_item/item';
import Title from 'components/title/title';
import {getRecommendPlaylist, getNewSongs} from '../../../api/home'
import {NavLink} from 'react-router-dom'
import './music_list.scss'
class MusicList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playLists: null,
      newSongs: null
    }
  }

  componentDidMount() {
    this._getRecommendPlaylist();
    this._getNewSongs();
    this.setEllipsis("100位欧美90后歌手：他们把青春给了音乐")
  }
  // 获取推荐歌单
  _getRecommendPlaylist() {
    getRecommendPlaylist()
      .then(response => {
        if (response.code === 200) {
          this.setState({
            playLists: response.playlists
          })
        }
      })
  }
  // 获取最新音乐
  _getNewSongs() {
    getNewSongs()
      .then(response => {
        if (response.code === 200) {
          this.setState({
            newSongs: response.result
          })
        }
      })
  }

  // 计算播放次数 单位万
  formatCount(num) {
    let result;
    if (num > 10000) {
      result = `${Math.floor(num / 10000)}万`;
    } else {
      result = num;
    }
    return result;
  }

  // 排列歌曲演唱者
  sortArtists(artists) {
    let art = '';
    let arr = [];
    const len = artists.length;
    for (let i = 0; i < len; i++) {
      arr.push(artists[i].name)
    }
    art = arr.join(' / ');
    return art;
  }
  setEllipsis(str) {
    let newStr = str.slice(0,14).concat('...');
    console.log(newStr);
    return newStr;
  }
  render() {
    const {playLists, newSongs} = this.state;
    const playListLinks = playLists && playLists.map((playList) => {
        return (
          <NavLink key={playList.id} to={`song/${playList.id}`} href="button" className="item">
            <img src={playList.coverImgUrl} alt="歌单封面"/>
            <div className="listen_count">
              <span className="icon iconfont icon-listen"></span>
              <span className="count">{this.formatCount(playList.playCount)}</span>
            </div>
            <p className="description">{this.setEllipsis(playList.name)}</p>
          </NavLink>
        )
      });
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
                        artist={this.sortArtists(song.song.artists)}
                        album={song.song.album.name}
                        sq={song.song.privilege.maxbr === 999000}
                        alias={song.song.alias[0]}
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

export default MusicList