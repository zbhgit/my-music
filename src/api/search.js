/**
 * Created by Z on 2017/12/24.
 */
import axios from 'axios'
import {baseUrl} from './constant'

// 获取搜索单曲结果

export function getSearchSongData(keywords) {
  const url = `${baseUrl}/search`;
  const data = {
    keywords: keywords,
    type: 1
  };
  return axios.get(url, {params: data})
    .then((response) => {
      return Promise.resolve(response.data)
    })
}

// 获取搜索歌手结果

export function getSearchSingerData(keywords) {
  const url = `${baseUrl}/search`;
  const data = {
    keywords: keywords,
    type: 100
  };
  return axios.get(url, {params: data})
    .then((response) => {
      return Promise.resolve(response.data)
    })
}