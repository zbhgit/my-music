/**
 * Created by Z on 2017/12/25.
 */
import { combineReducers } from 'redux'
import player from './palyer'
import playerShow from './player_show'
import currentTime from './current_time'
import playing from './playing'
import songlist from './songlist'

// 合并多个reducer
const rootReducer = combineReducers({
  player,
  playerShow,
  currentTime,
  playing,
  songlist
});

export default rootReducer