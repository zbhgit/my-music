/**
 * Created by Z on 2017/12/25.
 */
export const changeSongId = (id) => ({type: "SONG_ID", id});

export const setPlayerShow = (isShow) =>({type: "IS_SHOW",isShow});

export const setAudioCurrentTime = (currentTime) => ({type: "SET_TIME",currentTime});

export const setAudioPlayOrPause =  (playing) => ({type: "SET_PLAYING", playing});