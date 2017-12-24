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