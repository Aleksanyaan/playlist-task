import './track-number-button.css';


const TrackNumberButton = () => {
    return (
        <button className="track-number-button">
            <span className="track-number-span">
                <span>
                    <i className="fa-solid fa-arrow-up"></i>
                    <i className="fa-solid fa-arrow-down"></i>
                </span>
                Track Nu...
            </span>
            <span>
                <i className="fa-sharp fa-solid fa-caret-down"></i>
            </span>
        </button>
    )
}

export default TrackNumberButton;