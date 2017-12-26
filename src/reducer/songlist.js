/**
 * Created by Z on 2017/12/26.
 */
const initialState = {
  playlist: [],
};
//  导出reducer player
export default function player(state = initialState, action) {
  switch (action.type) {
    case "SET_PLAYLIST":
      return Object.assign({}, ...state, {
        songlist: action.songlist,
      });
    default:
      return state
  }
}