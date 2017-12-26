/**
 * Created by Z on 2017/12/24.
 */


// 计算播放次数 单位万
export function formatCount(num) {
  let result;
  if (num > 10000) {
    result = `${Math.floor(num / 10000)}万`;
  } else {
    result = num;
  }
  return result;
}


// 排列歌曲演唱者
export function sortArtists(artists) {
  let art = '';
  let arr = [];
  const len = artists.length;
  for (let i = 0; i < len; i++) {
    arr.push(artists[i].name)
  }
  art = arr.join(' / ');
  return art;
}
// 添加省略号
export function setEllipsis(str) {
  let newStr = str.slice(0,14).concat('...');
  return newStr;
}

//  将时间转换成 00:23 ,接收毫秒
export function formatTime(num) {
  num = parseInt(num,10);
  const iM = Math.floor(num % 3600 / 60);
  const iS = Math.floor(num % 60);
  return `${_addZero(iM)}:${_addZero(iS)}`;
}
function _addZero(num) {
  if (num < 10) {
    return '0' + num
  } else {
    return '' + num
  }
}
