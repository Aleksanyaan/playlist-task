import { combineReducers } from "redux";
import { SongReducer } from "./song-reducer";

export default combineReducers({
    songs: SongReducer
})