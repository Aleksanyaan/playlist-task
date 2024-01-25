import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uploadSong } from '../../redux/actions/song-action';
import './music-upload-form.css';

const MusicUploadForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [fileError, setFileError] = useState('');
  const dispatch = useDispatch();

  const allowedFileTypes = ['audio/mpeg', 'audio/wav'];
  const songs = useSelector(state => state.songs.songs);

  // Handling if file is appropriate or not
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && allowedFileTypes.includes(file.type)) {
      setSelectedFile(file);
      setFileError('');
    } else {
      setSelectedFile(null);
      setFileError('Invalid file type. Please upload a .mp3 or .wav file.');
    }
  };

  const handleUpload = () => {
    console.log("Upload button was clicked");
    if (selectedFile) {
      let interval, timeout;
      clearInterval(interval); // Clearing any existing interval
      clearTimeout(timeout); // Clearing any existing timeout
  
      // Creating the spinner logic
      interval = setInterval(() => {
        setUploadProgress((prevProgress) => {
          const newProgress = prevProgress + 15;
          if (newProgress >= 100) {
            clearInterval(interval);
          }
          return newProgress;
        });
      }, 500);
  
      // Upload considering simulate network latency
      timeout = setTimeout(() => {
        dispatch(uploadSong(selectedFile, songs.length + 1))
        .then(() => {
          console.log('Uploaded successful!');
        })
        .catch((error) => {
          console.error('Upload failed:', error);
        })
        .finally(() => {
          clearInterval(interval);
          setUploadProgress(0);
        });
        clearInterval(interval); // Clearing the interval after dispatching the action
        setUploadProgress(0); // Reseting the upload progress
      }, 3500);
  
      console.log('Uploading audio file:', selectedFile);
  
    } else {
      setFileError('Please select a valid file before submitting.');
    }
  };

  // Alert error connected with file upload
  useEffect(() => {
    if (fileError) {
      alert(fileError);
    }
  }, [fileError]);
  

  return (
    <div className='upload-form-container'>
      <p className='fs-5 text-muted'>Upload music here</p>
      <div>
        <label htmlFor="file-upload" className="custom-file-upload">
            Select Music File
        </label>
        <input
          type="file"
          accept=".mp3, .wav"
          id='file-upload'
          onChange={handleFileChange}
        />
      </div>
      
      {selectedFile && (
        <div>
          <p className='text-muted p-2'>Selected File: {selectedFile.name}</p>
          <button
            className='upload-btn'
            onClick={handleUpload}
            disabled={uploadProgress > 0 && uploadProgress < 100}
          >
            Upload
          </button>
          {uploadProgress > 0 && uploadProgress < 100 && (
            <div>
              <progress 
                value={uploadProgress} 
                max="100" />
              <span className='text-muted'>{uploadProgress}% Uploaded</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MusicUploadForm;
