import './filter.css';

const Filter = () =>{
    return(
        <div className='filter-wrap'>
            <i className="fa-solid fa-magnifying-glass position-absolute top-0 p-2 text-muted fs-5"></i>
            <input type="text" className="search-input" placeholder="Filter" />
        </div>
    )
}

export default Filter;