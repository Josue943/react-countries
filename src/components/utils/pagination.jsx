import React from 'react'
import _ from 'lodash'
 import '../../sass/pagination.scss' 

export default function pagination({itemsCount,pageSize,OnPageChange,currentPage}) {
    
    const pagesCount = Math.ceil(itemsCount/pageSize); //page counter
    if(pagesCount === 1) return null;
    const pages = _.range(1,pagesCount+1)

    return (
       <nav>
           <ul className="pagination">
                {pages.map(page =>(
                    <li key={page} className={page === currentPage ? 'page-active' : 'page'}>
                        <a className="page-link" onClick={()=> OnPageChange(page)}>{page}</a>
                    </li>
                ))}
           </ul>
       </nav>
    )
}
