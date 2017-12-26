/**
 * Created by Z on 2017/12/24.
 */
import axios from 'axios'

import {baseUrl} from './constant'

// 获取歌单详情
export function getSongListDetail(songListId) {
  const url = `${baseUrl}/playlist/detail`;
  const data = {
    id: songListId
  };
  return axios.get(url, {params: data})
    .then((response) => {
      return Promise.resolve(response.data)
    })
}


export  function getSong(id) {
  const p1 = _getSongDetail(id);
  const p2 = _getSongLyric(id);
  const p3 = _getSongUrl(id);
  return Promise.all([p1,p2,p3])
}
// 获取歌曲详情

function _getSongDetail(id) {
  const url = `${baseUrl}/song/detail`;
  const data = {
    ids: id
  };
  return axios.get(url, {params: data})
    .then((response) => {
      return Promise.resolve(response.data.songs[0]);
    })
}
// 获取歌词

function _getSongLyric(id) {
  const url = `${baseUrl}/lyric`;
  const data = {
    id: id
  };
  return axios.get(url, {params: data})
    .then((response) => {
    console.log(response.data);
      return Promise.resolve(response.data);
    })
}

// 获取音乐url

function _getSongUrl(id) {
  const url = `${baseUrl}/music/url`;
  const data = {
    id: id
  };
  return axios.get(url, {params: data})
    .then((response) => {
      return Promise.resolve(response.data);
    })
}