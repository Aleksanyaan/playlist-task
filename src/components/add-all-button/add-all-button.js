import { useDispatch, useSelector } from "react-redux";
import "./add-all-button.css";
import { updateSong } from "../../redux/actions/song-action";
import { PLAY_SONG, SONG_UPDATE } from "../../helpers/redux-action-types";

const AddAllButton = () => {
  const playlist = useSelector((state) => state.songs.songs);
  const dispatch = useDispatch();
  const currentAudioPlayer = useSelector((state) => state.songs.audioPlayer);

  const addAll = async () => {

    console.log("Add All button was clicked");

    // Check if there is playing song for starting index
    let startIndex = currentAudioPlayer?.index ? currentAudioPlayer.index - 1 : 0;

    for (let i = startIndex; i < playlist.length; i++) {
        await new Promise(resolve => {
            let audioPlayer  = null;
            
            if(currentAudioPlayer && currentAudioPlayer.index === playlist[i].trackNumber){
                audioPlayer = currentAudioPlayer.audioPlayer;
            }else{
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
                audioPlayer.pause();  // Pause the audio explicitly after it ends
                dispatch(updateSong(i + 1, false));
            });
        });
    }
  };

  return (
    <button className="add-all-button" onClick={addAll}>
      <span className="add-all-span">
        <i className="fa-solid fa-plus"></i>
        Add All
      </span>
      <span className="dropdown-span">
        <i className="fa-sharp fa-solid fa-caret-down"></i>
      </span>
    </button>
  );
};

export default AddAllButton;
