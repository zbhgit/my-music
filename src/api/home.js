/**
 * Created by Z on 2017/12/23.
 */
import axios from 'axios'
import {baseUrl} from './constant'
// 获取banner轮播数据

export function getBannerData() {
  return axios.get(`${baseUrl}/banner`)
    .then((response) => {
    return Promise.resolve(response.data)
    })
}

// 获取推荐歌单
export function getRecommendPlaylist() {
  const url = `${baseUrl}/top/playlist/highquality?limit=6`;
  return axios.get(url)
    .then(response=>{
      return Promise.resolve(response.data)
    })
}


// 获取最新推荐音乐

export function getNewSongs() {
  const url = `${baseUrl}/personalized/newsong`;
  return axios.get(url)
    .then(response=>{
      return Promise.resolve(response.data)
    })
}