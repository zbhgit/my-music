import './singer_song.scss'
import React, {Component} from 'react'
import Title from 'components/title/title'
import Item from 'components/song_item/item'
export default class SingerSong extends Component {
  render() {
    return (
      <div className="singer_song">
        <Title title={"热歌"}/>
        <ul>
          <li className="singer_song-item">
            <span className="index">1</span>
            <Item name={"告白气球"} album={"周杰伦旁边的故事"} sq={true}/>
          </li>
          <li className="singer_song-item">
            <span className="index">2</span>
            <Item name={"晴天"} album={"叶惠美"} sq={true}/>
          </li>
          <li className="singer_song-item">
            <span className="index">3</span>
            <Item name={"告白气球"} album={"周杰伦旁边的故事"} sq={true}/>
          </li>
          <li className="singer_song-item">
            <span className="index">4</span>
            <Item name={"晴天"} album={"叶惠美"} sq={true}/>
          </li>
          <li className="singer_song-item">
            <span className="index">5</span>
            <Item name={"告白气球"} album={"周杰伦旁边的故事"} sq={true}/>
          </li>
          <li className="singer_song-item">
            <span className="index">6</span>
            <Item name={"晴天"} album={"叶惠美"} sq={true}/>
          </li>
          <li className="singer_song-item">
            <span className="index">7</span>
            <Item name={"告白气球"} album={"周杰伦旁边的故事"} sq={true}/>
          </li>
          <li className="singer_song-item">
            <span className="index">8</span>
            <Item name={"晴天"} album={"叶惠美"} sq={true}/>
          </li>
          <li className="singer_song-item">
            <span className="index">9</span>
            <Item name={"告白气球"} album={"周杰伦旁边的故事"} sq={true}/>
          </li>
          <li className="singer_song-item">
            <span className="index">10</span>
            <Item name={"晴天"} album={"叶惠美"} sq={true}/>
          </li>
        </ul>
      </div>
    )
  }
}