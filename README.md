### An overview of the component structure.

For components there is separate folder 'components' in the 'src' folder, where are located folders for all components.
In each folder there are 2 files` .js and .css for styling.
All components are functional components.
The components are: 
 * song-list - A component to display the list of songs, 
 * song-row -A subcomponent to render individual song details within song-list, 
 * add-all-button - A button to add all songs to a queue (simulated), 
 * play-all-button - A button to initiate playing all songs (simulated), 
 * music-upload-form - A new component below the song list for users to upload music files,
  **Upoaded song name should contain – for resolving upload, for example Coldplay - Yellow.mp3**
 also
 * track-number-button - A component to display Track Number button,
 * filter - A components to display filter input,
 * manage-window - A component to gather together the first row in screenshot, which are add-all-button, play-all-button, track-number-button and filter components.
** track-number-button and filter components are additionally added, and there is not logic for work.

In 'App.js' component I have only three components: manage-window, song-list and music-upload-form.

### The state management approach

For global state management I have used Redux library.
For this there is 'redux' folder in 'src' folder, where I have three folders.
* actions - where the actions are located. I have 'song-action.js' file, where is written three actions for gettong data(getData()), uploading song(uploadSong()), and updating song(updateSong()).
* api - where the song-api.js file is located. In this file I have logic for integrating backend API also my 'defaultState' object, where is an array of defalut playlist.
* reducers - there are two files: 'index.js' for combining reducers and 'song-reducer.js' where I wrote my reducer logic. 

Also there is 'helpers' folder in 'src' folder where are exported redux action types from 'redux-action-types.js'.

## Instructions on how to run the application locally

For running application locally you shuold.
1. Clone the repasitory from GitHub:
    Open your terminal and run the following command to clone the repository:
    git clone 
2. Navigate to the Project Directory:
    Change into the project directory using the following command:
    cd
3. Install Dependencies:
    Run the following command to install the project dependencies:
    npm install
4. Start the Development Server:
    Once the installation is complete, start the development server with the following command:
    npm start
5. View the Application:
    Open web browser and navigate to http://localhost:3000 to view the running React application.
