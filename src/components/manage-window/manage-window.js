import PlayAllButton from '../play-all-button/play-all-button';
import AddAllButton from '../add-all-button/add-all-button';
import TrackNumberButton from '../track-number-button/track-number-button';
import Filter from '../filter/filter';

import './manage-window.css';

const ManageWindow = () => {
    return (
        <div className="manage-container">
            <div className="left-part">
                <PlayAllButton/>
                <AddAllButton/>
            </div>
            <div className="right-part">
                <TrackNumberButton/>
                <Filter/>
            </div>
        </div>
    )
}

export default ManageWindow;