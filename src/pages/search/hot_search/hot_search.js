/**
 * Created by Z on 2017/12/22.
 */
import React, {Component} from 'react'
import './hot_search.scss'
import Title from 'components/title/title'
import SingerItem from 'components/singer_item/singer_item'
import SongItem from 'components/song_item/item'
export default class HotSearch extends Component {
  render() {
    const singer = {
      img1v1Url: "http://p3.music.126.net/Qc5fsvjghmXXrLavDdQWgA==/19018252625793869.jpg",
      name: "周杰伦",
      alias: ["Jay Chou"],
    };
    return (
      <div>
        <div className="hot_search" style={{display: "none"}}>
          <Title title={"热搜"}/>
          <ul className="hot_item-wrapper">
            <li className="hot_item">
              Taylor Swift
            </li>
            <li className="hot_item">
              石头计划
            </li>
            <li className="hot_item">
              红昭愿
            </li>
            <li className="hot_item">
              广东爱情故事
            </li>
            <li className="hot_item">
              说散就散
            </li>
            <li className="hot_item">
              缝纫机乐队
            </li>
            <li className="hot_item">
              假如
            </li>
            <li className="hot_item">
              孙燕姿
            </li>
            <li className="hot_item">
              陈奕迅
            </li>
            <li className="hot_item">
              张杰
            </li>
          </ul>
        </div>
        <div className="search_result">
          <Title title={"最佳匹配"}/>
          <SingerItem singer={singer}/>
          <ul>
            <li>
              <SongItem name={"Molly Town"} album={"Water for Your Soul"} artist={"Joss Stone"}/>
            </li>
            <li>
              <SongItem name={"Molly Town"} album={"Water for Your Soul"} artist={"Joss Stone"}/>
            </li>
            <li>
              <SongItem name={"Molly Town"} album={"Water for Your Soul"} artist={"Joss Stone"}/>
            </li>
            <li>
              <SongItem name={"Molly Town"} album={"Water for Your Soul"} artist={"Joss Stone"}/>
            </li>
            <li>
              <SongItem name={"Molly Town"} album={"Water for Your Soul"} artist={"Joss Stone"}/>
            </li>
            <li>
              <SongItem name={"Molly Town"} album={"Water for Your Soul"} artist={"Joss Stone"}/>
            </li>
            <li>
              <SongItem name={"Molly Town"} album={"Water for Your Soul"} artist={"Joss Stone"}/>
            </li>
            <li>
              <SongItem name={"Molly Town"} album={"Water for Your Soul"} artist={"Joss Stone"}/>
            </li>
            <li>
              <SongItem name={"Molly Town"} album={"Water for Your Soul"} artist={"Joss Stone"}/>
            </li>
            <li>
              <SongItem name={"Molly Town"} album={"Water for Your Soul"} artist={"Joss Stone"}/>
            </li>
            <li>
              <SongItem name={"Molly Town"} album={"Water for Your Soul"} artist={"Joss Stone"}/>
            </li>
            <li>
              <SongItem name={"Molly Town"} album={"Water for Your Soul"} artist={"Joss Stone"}/>
            </li>

          </ul>
        </div>
      </div>

    )
  }
}