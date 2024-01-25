import './play-all-button.css';
import { useSelector, useDispatch } from 'react-redux';
import { updateSong } from '../../redux/actions/song-action';
import { useState } from 'react';
import { PLAY_SONG, SONG_UPDATE } from '../../helpers/redux-action-types';

const PlayAllButton = () => {
    const dispatch = useDispatch();
    const playlist = useSelector(state => state.songs.songs);
    const currentAudioPlayer = useSelector((state) => state.songs.audioPlayer);

    const playAll = async () => {
        dispatch({type: PLAY_SONG, payload: null});

        console.log("Play All button was clicked");
    
        for (let i = 0; i < playlist.length; i++) {
            await new Promise(resolve => {
                let audioPlayer  = null;
                
                // Checking if current playing song is the song we clicked
                if(currentAudioPlayer && currentAudioPlayer.index === playlist[i].trackNumber){
                    audioPlayer = currentAudioPlayer.audioPlayer;
                } else {
                    if (currentAudioPlayer) {
                        currentAudioPlayer.audioPlayer.pause();
                    }
                    audioPlayer = new Audio(playlist[i].songSource);
                }
                dispatch({type: SONG_UPDATE, payload: {index: playlist[i].trackNumber,  status: true} });
                dispatch({type: PLAY_SONG, payload: {audioPlayer, index: playlist[i].trackNumber}});
                
                audioPlayer.play();
                dispatch(updateSong(i + 1, true));

                audioPlayer.addEventListener('ended', () => {
                    dispatch({type: SONG_UPDATE, payload: {index: playlist[i].trackNumber,  status: false} });
                    resolve();
                    audioPlayer.pause(); 
                    dispatch(updateSong(i + 1, false));
                });
            });
        }
    };
    

    return (
        <button className="play-all-button" onClick={playAll}>
            <span className="play-all-span">
                <i className="fa-solid fa-play"></i>
                Play All
            </span>
            <span className="dropdown-span">
                <i className="fa-sharp fa-solid fa-caret-down"></i>
            </span>
        </button>
    );
};

export default PlayAllButton;

