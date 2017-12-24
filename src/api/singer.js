/**
 * Created by Z on 2017/12/24.
 */
import axios from 'axios'
import {baseUrl} from './constant'

// 获取热门歌手
export function getSingerListData(offset,limit) {
  const url = `${baseUrl}/top/artists`;
  const data = {
    offset,
    limit
  };
  return axios.get(url, {params: data})
    .then((response) => {
    return Promise.resolve(response.data)
    })

}

// 获取歌手单曲

export function getSingerSongs(singerId) {
  const url = `${baseUrl}/artists`;
  const data = {
    id: singerId
  };
  return axios.get(url, {params: data})
    .then((response)=>{
      return Promise.resolve(response.data)
    })
}

