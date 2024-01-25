// import axios from "axios";

// const backURL = process.env.REACT_APP_API_URL;


export const getData = () => {
    const defaultState = {
        songs: [
            { songName: 'Halo', artistName: 'Beyoncé', trackNumber: 1, songSource: window.location.origin + "/assets/BeyonceHalo.mp3",  file: {}, isPlaying: false},
            { songName: 'Blind', artistName: 'Lifehouse', trackNumber: 2, songSource: window.location.origin + "/assets/LifehouseBlind.mp3",  file: {}, isPlaying: false},
            { songName: 'Twin Flame', artistName: 'Machine Gun Kelly', trackNumber: 3, songSource: window.location.origin + "/assets/MachineGunKellyTwinFlame.mp3",  file: {}, isPlaying: false},
            { songName: 'Skyfall', artistName: 'Adele', trackNumber: 4, songSource: window.location.origin + "/assets/AdeleSkyfall.mp3",  file: {}, isPlaying: false},
            { songName: 'Yellow', artistName: 'Coldplay', trackNumber: 5, songSource: window.location.origin + "/assets/ColdplayYellow.mp3",  file: {}, isPlaying: false},
            { songName: 'I See Fire', artistName: 'Ed Sheeran', trackNumber: 6, songSource: window.location.origin + "/assets/EdSheeranISeeFire.mp3",  file: {}, isPlaying: false},
        ]
    };

    
    return {
        status: 'ok',
        data: defaultState,
    };
};