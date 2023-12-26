import React, { useState } from "react";
import "./WatchList.css";
import { FaSearch } from "react-icons/fa";

const WatchList = () => {
  const watchlistitems = [
    {
      itemindex: 1,
      itemarray: ['CanBk', 'HCLTEch', 'SBI']
    },
    {
      itemindex: 2,
      itemarray: ['POs', 'HDFC']
    },
    {
        itemindex: 3,
        itemarray: ['abh', 'ssjfsd', 'sijsdf']
      },
      {
        itemindex: 4,
        itemarray: ['POs', 'HDFC', 'pasdfsd', 'sdfsdf', 'sdfsd']
      }
  ];

  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  return (
    <div className="watchlist-container">
      <div className="watchlist-search">
        <FaSearch />
        <input type="text" placeholder="Search" />
      </div>

      <div className="watchlist-contents">
        {selectedItemIndex !== null && (
          <ul>
            {watchlistitems.find((item) => item.itemindex === selectedItemIndex).itemarray.map((content, contentIndex) => (
              <div className="content-hr">
              <li key={contentIndex}>{content}</li>
              <hr />
              </div>
            ))}
          </ul>
        )}
      </div>

      <div className="watchlist-lists">
        {watchlistitems.map((item) => (
          <div id = 'list-contents' key={item.itemindex} onClick={() => setSelectedItemIndex(item.itemindex)}>
            <h3>{item.itemindex}</h3>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchList;
