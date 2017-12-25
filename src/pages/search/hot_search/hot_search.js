/**
 * Created by Z on 2017/12/22.
 */
import React, {Component} from 'react'
import './hot_search.scss'
import Title from 'components/title/title'
import SingerItem from 'components/singer_item/singer_item'
import SongItem from 'components/song_item/item'
import {getSearchSingerData, getSearchSongData} from 'api/search'
import {sortArtists,} from 'util/util'

import {hotData} from './hot'


export default class HotSearch extends Component {
  constructor(props) {
    super(props);
    this.onHandleClick = this.onHandleClick.bind(this);
    this.getDatatimer = 0;
    this.state = {
      keywords: this.props.keywords,
      artist: {},
      songs: [],
      hasData: false
    }
  }

  componentWillReceiveProps(nextProps) {
    const {keywords} = this.state;
    if (keywords !== nextProps.keywords) {
      this.setState({
        keywords: nextProps.keywords
      });
      clearTimeout(this.getDataTimer);
      this.getDataTimer = setTimeout(() => {
        if (nextProps.keywords.length > 1) {
          this._getSearchSingerData(nextProps.keywords);
          this._getSearchSongData(nextProps.keywords)
        }
      }, 1000);
    }
  }

  // 获取歌手数据
  _getSearchSingerData(keyword) {
    getSearchSingerData(keyword)
      .then((response) => {
        if (response.code === 200) {
          this.setState(Object.assign(this.state, {
            artist: response.result.artists[0] || {}
          }))
        }
      })
  }

  // 获取歌曲数据
  _getSearchSongData(keyword) {
    getSearchSongData(keyword)
      .then((response) => {
        if (response.code === 200) {
          this.setState(Object.assign(this.state, {
            songs: response.result.songs,
            hasData: true
          }))
        }
      })
  }

  onHandleClick(event) {
    const value = event.target.innerHTML;
    this.props.onHandleHotClick(value)
  }
  render() {
    const {artist, songs, hasData} = this.state;
    const singer = {
      id: artist.id,
      img1v1Url: artist.img1v1Url,
      name: artist.name,
      alias: artist.alias || [''],
    };
    const {hots} = hotData.result;
    if (!hasData) {
      return <div className="hot_search">
        <Title title={"热搜"}/>
        <ul className="hot_item-wrapper">
          {hots.map((hot, index) => {
            return (
              <li key={index} onClick={this.onHandleClick} className="hot_item">
                {hot.first}
              </li>
            )
          })}
        </ul>
      </div>
    } else {
      return (

        <div className="search_result">
          <Title title={"最佳匹配"}/>
          <SingerItem singer={singer}/>
          <ul>
            {songs && songs.map((song) => {
              return (
                <li key={song.id}>
                  <SongItem name={song.name}
                            artist={sortArtists(song.artists)}
                            album={song.album.name}
                            alias={song.alias[0]}
                            id={song.id}
                  />
                </li>
              )
            })}
          </ul>
        </div>
      )
    }

  }
}