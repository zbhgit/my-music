/**
 * Created by Z on 2017/12/26.
 */
const initialState = {
  playing: false,
};
//  导出reducer player
export default function player(state = initialState, action) {
  switch (action.type) {
    case "SET_PLAYING":
      return Object.assign({}, ...state, {
        playing: action.playing,
      });
    default:
      return state
  }
}