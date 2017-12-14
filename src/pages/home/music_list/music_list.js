import React, {Component} from 'react';
import './music_list.scss'
class MusicList extends Component {
  render() {
    return (
      <div className="music_list">
        {/*精品歌单*/}
        <div className="recommend">
          <div className="recommend_title">
            <h3 className="text">推荐歌单</h3>
            <span className="icon iconfont icon-right"></span>
          </div>
          <div className="recommend_item--wrapper">
            <a href="button" className="item">
              <img src="http://p1.music.126.net/uXbDB1aWsp36_I_lQs-DeA==/1411772930113118.jpg" alt="歌单封面"/>
              <div className="listen_count">
                <span className="icon iconfont icon-listen"></span>
                <span className="count">1234</span>
              </div>
              <p className="description">华语速爆新歌</p>
            </a>
            <a href="button" className="item">
              <img src="http://p1.music.126.net/ZC9Kj6a7NkNSs-CZ4JdS1g==/109951162964281524.jpg" alt="歌单封面"/>
              <div className="listen_count">
                <span className="icon iconfont icon-listen"></span>
                <span className="count">46.49万</span>
              </div>
              <p className="description">• Soul/Reggae｜灵歌遇上了雷鬼?</p>
            </a>
            <a href="button" className="item">
              <img src="http://p1.music.126.net/K_q4k-f7b0dXkytaDN0MTQ==/528865150111579.jpg" alt="歌单封面"/>
              <div className="listen_count">
                <span className="icon iconfont icon-listen"></span>
                <span className="count">1234</span>
              </div>
              <p className="description">低吟浅唱丨我温暖的忧郁</p>
            </a>
            <a href="button" className="item">
              <img src="http://p1.music.126.net/rhbxWUndbuKfZme4IiYplw==/3428277255764485.jpg" alt="歌单封面"/>
              <div className="listen_count">
                <span className="icon iconfont icon-listen"></span>
                <span className="count">1234</span>
              </div>
              <p className="description">北欧后摇氛围,如梦似幻的落寞之旅</p>
            </a>
            <a href="button" className="item">
              <img src="http://p1.music.126.net/spPPE5PzbULCzw1LfMgKlg==/3401888989102801.jpg" alt="歌单封面"/>
              <div className="listen_count">
                <span className="icon iconfont icon-listen"></span>
                <span className="count">1234</span>
              </div>
              <p className="description">和风｜物哀，如得其情</p>
            </a>
            <a href="button" className="item">
              <img src="http://p1.music.126.net/69UvJeww927sMtnjfwlO0Q==/1371091002111924.jpg" alt="歌单封面"/>
              <div className="listen_count">
                <span className="icon iconfont icon-listen"></span>
                <span className="count">1234</span>
              </div>
              <p className="description">【民谣盛宴】100首必听欧美民谣</p>
            </a>
          </div>
        </div>
        <div className="new_song">
          <h3 className="song_title">最新音乐</h3>
          <ul >
            <li className="song_item">
              <h3 className="song_name">时代的标记</h3>
              <div className="song_artist">
                <span className="icon iconfont icon-sq"> </span>
                <span >汪峰 - 果岭里29号</span>
              </div>
              <span className="icon iconfont icon-play01"></span>
            </li>
            <li className="song_item">
              <h3 className="song_name">Boys (Howie Lee Remix)</h3>
              <div className="song_artist">
                <span className="icon iconfont icon-sq"> </span>
                <span >Charli XCX / Jeanie / Howie Lee - Boys 中文版 ft. Jeanie (Howie Lee Remix)</span>
              </div>
              <span className="icon iconfont icon-play01"></span>
            </li>
            <li className="song_item">
              <h3 className="song_name">发烧 (FEVER IN THE DESERT)</h3>
              <div className="song_artist">
                <span className="icon iconfont icon-sq"> </span>
                <span >Kafe.Hu - KAFREEMAN Part Three</span>
              </div>
              <span className="icon iconfont icon-play01"></span>
            </li>
            <li className="song_item">
              <h3 className="song_name">超哥嗦</h3>
              <div className="song_artist">
                <span className="icon iconfont icon-sq"> </span>
                <span >谢帝 - 超哥嗦</span>
              </div>
              <span className="icon iconfont icon-play01"></span>
            </li>
            <li className="song_item">
              <h3 className="song_name">时代的标记</h3>
              <div className="song_artist">
                <span className="icon iconfont icon-sq"> </span>
                <span >汪峰 - 果岭里29号</span>
              </div>
              <span className="icon iconfont icon-play01"></span>
            </li>
            <li className="song_item">
              <h3 className="song_name">Boys (Howie Lee Remix)</h3>
              <div className="song_artist">
                <span className="icon iconfont icon-sq"> </span>
                <span >Charli XCX / Jeanie / Howie Lee - Boys 中文版 ft. Jeanie (Howie Lee Remix)</span>
              </div>
              <span className="icon iconfont icon-play01"></span>
            </li>
            <li className="song_item">
              <h3 className="song_name">发烧 (FEVER IN THE DESERT)</h3>
              <div className="song_artist">
                <span className="icon iconfont icon-sq"> </span>
                <span >Kafe.Hu - KAFREEMAN Part Three</span>
              </div>
              <span className="icon iconfont icon-play01"></span>
            </li>
            <li className="song_item">
              <h3 className="song_name">时代的标记</h3>
              <div className="song_artist">
                <span className="icon iconfont icon-sq"> </span>
                <span >汪峰 - 果岭里29号</span>
              </div>
              <span className="icon iconfont icon-play01"></span>
            </li>

            <li className="song_item">
              <h3 className="song_name">发烧 (FEVER IN THE DESERT)</h3>
              <div className="song_artist">
                <span className="icon iconfont icon-sq"> </span>
                <span >Kafe.Hu - KAFREEMAN Part Three</span>
              </div>
              <span className="icon iconfont icon-play01"></span>
            </li>
            <li className="song_item">
              <h3 className="song_name">超哥嗦</h3>
              <div className="song_artist">
                <span className="icon iconfont icon-sq"> </span>
                <span >谢帝 - 超哥嗦</span>
              </div>
              <span className="icon iconfont icon-play01"></span>
            </li>

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