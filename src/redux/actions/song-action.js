import * as api  from "../api/song-api";
import {GET_SONG, UPLOAD_SONG, SONG_UPDATE, PLAY_SONG } from "../../helpers/redux-action-types";

export const getData = () => async (dispatch) => {
    const res  = await api.getData();

    const data = res.data;
            
    if(res.status === "error"){
        return data;
    }

    dispatch({type: GET_SONG, payload: data})
}

export const uploadSong = (song, trackNumber) => async (dispatch) => {

    const parts = song.name.split('–');
    const artistName = parts[0].trim();
    const songName = parts[1].trim().replace(/\.mp3$/, ''); 
    
    dispatch({type: UPLOAD_SONG, payload: {artistName: artistName, songName: songName, trackNumber, file: song}})
}

export const updateSong = (index, status) => async (dispatch) => {
    dispatch({type: SONG_UPDATE, payload: {index, status} });
}

export const playSong = (item, currentAudioPlayer) => (dispatch) =>  {
    let audioPlayer  = null;

    if (currentAudioPlayer && currentAudioPlayer.index === item.trackNumber) {
        audioPlayer = currentAudioPlayer.audioPlayer;
    } else {
        if (currentAudioPlayer) {
            currentAudioPlayer.audioPlayer.pause();
        }
        audioPlayer = new Audio(item.songSource);
    }
    dispatch({type: SONG_UPDATE, payload: {index: item.trackNumber,  status: true} });
    dispatch({type: PLAY_SONG, payload: {audioPlayer, index: item.trackNumber}});
                
    audioPlayer.play();

    audioPlayer.addEventListener('ended', () => {
        audioPlayer.pause();
        dispatch({type: SONG_UPDATE, payload: {index: item.trackNumber,  status: false} });
    });
}

export const pauseSong = (audioPlayer, item) => (dispatch) =>  {
    audioPlayer.audioPlayer.pause();
    dispatch({type: SONG_UPDATE, payload: {index: item.trackNumber,  status: false} });
}