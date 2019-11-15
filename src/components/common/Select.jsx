import React from 'react'

const Select = ({options,onChanceRegion}) => {

     return(
        <div className="select" >       
            <select 
            onChange={e => onChanceRegion(e.currentTarget.value)}>
                <option value="" >Filter By Region</option> 
                    {options.map(option =>(
                        <option key={option} value={option}  >
                            {option}
                            </option>
                    ))}
            </select>
        </div>
    )
} 

export default Select;