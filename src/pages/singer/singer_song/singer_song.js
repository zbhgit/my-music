import './singer_song.scss'
import React, {Component} from 'react'
import Title from 'components/title/title'
import Item from 'components/song_item/item'
export default class SingerSong extends Component {
  render() {
    const {hotSongs} = this.props;
    return (
      <div className="singer_song">
        <Title title={"热歌"}/>
        <ul>
          {hotSongs && hotSongs.map((song,index) =>{
            return (
              <li key={song.id} data-songid={song.id} className="singer_song-item">
                <span className="index">{index += 1}</span>
                <Item alias={song.alia[0]} name={song.name} album={song.al.name} sq={song.privilege.maxbr === 999000}/>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}