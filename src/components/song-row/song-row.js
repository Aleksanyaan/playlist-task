import './song-row.css';
import {useDispatch, useSelector} from 'react-redux'
import { updateSong , playSong, pauseSong } from '../../redux/actions/song-action';

const SongRow = ({ songName, artistName, trackNumber, songSource, isPlaying}) => {
  const currentAudioPlayer = useSelector((state) => state.songs.audioPlayer);
  const dispatch = useDispatch();


  const playMusic = () => {
    dispatch(playSong({trackNumber, songSource}, currentAudioPlayer ));
  };

  const pauseMusic = () => {
    dispatch(pauseSong(currentAudioPlayer, {trackNumber, songSource}));
  };

  const handleEnded = () => {
    dispatch(updateSong(trackNumber, false));
  };

  return (
    <tr className="d-flex justify-content-between song-row">
      <td className="w-25 p-2">
        <span className='icon-container'>
          <i className='fas fa-grip-vertical'></i>
          <audio id={trackNumber} onEnded={handleEnded} >
            <source src={songSource} type="audio/mp3" />
          </audio>
          {isPlaying ? (
            <button onClick={pauseMusic} className="pause-btn">
              <i className="fa-solid fa-pause"></i>
            </button>
          ) : (
            <button onClick={playMusic} className='play-btn'>
              <i className="fa-solid fa-play"></i>
            </button>
          )}
        </span>
      </td>
      <td className="w-100 p-2"><span>{songName}</span></td>
      <td className="w-100 p-2"><span>{artistName}</span></td>
      <td className="w-25 p-2"><span>{trackNumber}</span></td>
      <td className="w-50 p-2">
        <span className='icons'>
          <i className="fa-solid fa-heart m-2"></i>
          <i className="fa-solid fa-check m-2"></i>
          <i className="fa-solid fa-share m-2"></i>
          <i className="fa-solid fa-caret-down m-2"></i>
        </span>
      </td>
    </tr>
  );
}

export default SongRow;
