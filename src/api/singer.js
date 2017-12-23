/**
 * Created by Z on 2017/12/24.
 */
import axios from 'axios'
const baseUrl = 'http://www.zhangbinhe.com:3000';

//
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