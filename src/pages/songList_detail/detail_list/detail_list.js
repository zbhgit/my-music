/**
 * Created by Z on 2017/12/16.
 */
import './detail_list.scss'

import React, {Component} from 'react'
import Item from 'components/song_item/item'

export default class DetailList extends Component{
  render() {
    return (
      <div className="detail_list">
        <div className="play_all">
          <span className="icon iconfont icon-play01"></span>
          <p className="text">播放全部 <span className="list_count">(共33首)</span></p>
        </div>
        <ul>
          <li className="item_wrapper">
            <span className="index">
              1
            </span>
            <Item name={"Molly Town"} album={"Water for Your Soul"} artist={"Joss Stone"}/>
          </li>
          <li className="item_wrapper">
            <span className="index">
              2
            </span>
            <Item name={"These Streets"} album={"Rebelution"} artist={"Tanya Stephens"} sq={true}/>
          </li>
          <li className="item_wrapper">
            <span className="index">
              3
            </span>
            <Item name={"Molly Town"} album={"Water for Your Soul"} artist={"Joss Stone"}/>
          </li>
          <li className="item_wrapper">
            <span className="index">
              4
            </span>
            <Item name={"These Streets"} album={"Rebelution"} artist={"Tanya Stephens"} sq={true}/>
          </li>
          <li className="item_wrapper">
            <span className="index">
              5
            </span>
            <Item name={"Molly Town"} album={"Water for Your Soul"} artist={"Joss Stone"}/>
          </li>
          <li className="item_wrapper">
            <span className="index">
              6
            </span>
            <Item name={"These Streets"} album={"Rebelution"} artist={"Tanya Stephens"} sq={true}/>
          </li>
          <li className="item_wrapper">
            <span className="index">
              7
            </span>
            <Item name={"Molly Town"} album={"Water for Your Soul"} artist={"Joss Stone"}/>
          </li>
          <li className="item_wrapper">
            <span className="index">
              8
            </span>
            <Item name={"These Streets"} album={"Rebelution"} artist={"Tanya Stephens"} sq={true}/>
          </li>
          <li className="item_wrapper">
            <span className="index">
              9
            </span>
            <Item name={"Molly Town"} album={"Water for Your Soul"} artist={"Joss Stone"}/>
          </li>
          <li className="item_wrapper">
            <span className="index">
              10
            </span>
            <Item name={"These Streets"} album={"Rebelution"} artist={"Tanya Stephens"} sq={true}/>
          </li>
          <li className="item_wrapper">
            <span className="index">
              11
            </span>
            <Item name={"Molly Town"} album={"Water for Your Soul"} artist={"Joss Stone"}/>
          </li>
          <li className="item_wrapper">
            <span className="index">
              12
            </span>
            <Item name={"These Streets"} album={"Rebelution"} artist={"Tanya Stephens"} sq={true}/>
          </li>
        </ul>
      </div>
    )
  }
}