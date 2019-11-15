import React from 'react'


const Searchbox = ({value,onChance}) =>{

    return(
        <div className="filter">
            <span className="fas fa-search search-icon"></span>
            <input
            type="text"
            name="query"
            className="input"
            placeholder="Search for a country..."
            value={value}
            onChange={e =>onChance(e.currentTarget.value)}/>
        </div>
    )


}

export default Searchbox