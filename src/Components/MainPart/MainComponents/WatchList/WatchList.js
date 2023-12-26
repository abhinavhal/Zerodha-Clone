import React from 'react'
import './WatchList.css'
import { FaSearch } from "react-icons/fa";
const WatchList = () => {
  return (
    <div className='watchlist-container'>
        <div className="watchlist-search">
            <FaSearch/>
            <input type="text" placeholder='Search'/>
        </div>



    </div>
  )
}

export default WatchList