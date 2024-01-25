import {
  GET_SONG,
  UPLOAD_SONG,
  SONG_UPDATE,
  PLAY_SONG
} from "../../helpers/redux-action-types";

export const SongReducer = (state = {}, action) => {
  switch (action.type) {
    case UPLOAD_SONG:
      return { ...state, songs: [...state.songs, action.payload] };
    case GET_SONG:
      return { ...state, songs: action.payload.songs };
    case SONG_UPDATE:
      let newSong = state.songs.map((item) => {
        if (item.trackNumber === action.payload.index) {
          return { ...item, isPlaying: action.payload.status ? true : false };
        } else {
          return { ...item, isPlaying: false };
        }
      });
      return { ...state, songs: newSong };
    case PLAY_SONG:
       return {...state, audioPlayer: action.payload};
    default:
      return { ...state, songs: [] };
  }
};
