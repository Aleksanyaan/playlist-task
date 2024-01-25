import SongList from "./components/song-list/song-list";
import ManageWindow from "./components/manage-window/manage-window";
import MusicUploadForm from "./components/music-upload-form/music-upload-form";

import "./App.css";

function App() {
  return (
    <div className="App">
      <ManageWindow />
      <SongList />
      <MusicUploadForm />
    </div>
  );
}

export default App;
