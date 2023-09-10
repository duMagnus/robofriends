import React from "react";

const SearchBox = ({ searchField, searchChange }) => {
    return (
        <div className="pa2">
            <input className="pa3 ba shadow-5 b--transparent bg-white br3" 
            type="search" 
            placeholder="Search Robots"
            onChange={searchChange}/>
        </div>
    )
}

export default SearchBox;
