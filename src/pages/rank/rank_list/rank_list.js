/**
 * Created by Z on 2017/12/14.
 */
import './rank_list.scss'
import {getRankRanks} from '../../../api/rank'
import React, {Component} from 'react'
import Title from 'components/title/title'
import RankImg from 'components/rank_img/rank_img'
import {NavLink} from 'react-router-dom'
export default class Ranklist extends Component {
  constructor(props) {
    super(props);
    this.getUpdateTime = this.getUpdateTime.bind(this);
    this.getRandomNum = this.getRandomNum.bind(this);
    this.state = {
      officialRanks: [],
      globalRanks: []
    }
  }

  getUpdateTime(str) {
    const len = str.length;
    const newStr = str.substring(len - 5, len - 1);
    return newStr;
  }

  getRandomNum() {
    return Math.floor(Math.random() * 8)
  }

  componentDidMount() {
    getRankRanks()
      .then((response) => {
        const officialRanks = response.slice(0, 4);
        const globalRanks = response.slice(4);
        this.setState(Object.assign(this.state, {
          officialRanks,
          globalRanks
        }))
      });
  }

  render() {
    const {officialRanks, globalRanks} = this.state;
    const day = ['一', '二', '三', '四', '五', '六', '日'];
    return (
      <div className="rank_list">
        <Title title={"云音乐官方版"} icon={false}/>
        <ul className="official_rank">
          {officialRanks ? officialRanks.map((officialRank) => {
            return (
              <li key={officialRank.id} className="official_item">
                <NavLink to={`song/${officialRank.id}`}>
                  <RankImg time={this.getUpdateTime(officialRank.description)}
                           url={officialRank.coverImgUrl}/>
                </NavLink>
                <NavLink to={`song/${officialRank.id}`}>
                  <ol className="official_item-list">
                    {
                      officialRank.tracks.slice(0, 3).map((track, index) => {
                        return (
                          <li key={index}>{index += 1}. {track.name} - <span>{track.ar[0].name}</span></li>
                        )
                      })
                    }
                  </ol>
                </NavLink>
              </li>

            )
          }) : <li>正在加载......</li>}
        </ul>
        <Title title={"全球榜"} icon={false}/>
        <ul className="global_rank">
          {globalRanks ? globalRanks.map((globalRank) => {
            return (
              <li key={globalRank.id} className="global_rank-item">
                <NavLink to={`song/${globalRank.id}`}>

                <RankImg time={`每周${day[this.getRandomNum()]}更新`} url={globalRank.coverImgUrl}
                         width={"32.8vw"}/>
                <p className="rank_name">{globalRank.name}</p>
                </NavLink>
              </li>

            )
          }) : <li>正在加载......</li> }
        </ul>
      </div>
    )
  }
}