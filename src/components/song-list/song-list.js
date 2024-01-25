import { useEffect } from "react";
import SongRow from "../song-row/song-row";
import './song-list.css';
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../redux/actions/song-action";

const SongList = () => {
    const songs = useSelector(state => state.songs.songs);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getData());
    }, []);
    
    const elements = songs.map(item => {
        return (
            <SongRow 
                key={item.trackNumber} 
                {...item}/>
        )
    })


    return (
        <div>
            <table className="song-table d-flex flex-column">
                <tbody>
                    <tr className="title-row">
                        <td className="w-25 p-2"></td>
                        <td className="w-100 p-2">
                            <span>Song Name</span>
                        </td>
                        <td className="w-100 p-2">
                            <span>Artist Name</span>
                        </td>
                        <td className="w-25 p-2">
                            <span>Track</span>
                        </td>
                        <td className="w-50 p-2"></td>
                    </tr>
                    {elements}
                </tbody>
        </table>
        </div>
    )
}

export default SongList;