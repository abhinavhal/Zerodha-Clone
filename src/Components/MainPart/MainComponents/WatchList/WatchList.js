import React, { useState, useEffect } from "react";
import "./WatchList.css";
import { FaSearch } from "react-icons/fa";


const WatchList = () => {
  const initialWatchlistItems = [
    {
      itemindex: 1,
      itemarray: ["CanBk", "HCLTEch", "SBI"],
    },
    {
      itemindex: 2,
      itemarray: ["POs", "HDFC"],
    },
    {
      itemindex: 3,
      itemarray: ["abh", "ssjfsd", "sijsdf"],
    },
    {
      itemindex: 4,
      itemarray: ["POs", "HDFC", "pasdfsd", "sdfsdf", "sdfsd"],
    },
  ];

  const [watchlistitems, setWatchlistItems] = useState(
    JSON.parse(localStorage.getItem("watchlistitems")) || initialWatchlistItems
  );
  const [selectedItemIndex, setSelectedItemIndex] = useState(1);
  const [newItemInput, setNewItemInput] = useState("");

  useEffect(() => {
    // Save watchlistitems to localStorage
    localStorage.setItem("watchlistitems", JSON.stringify(watchlistitems));
  }, [watchlistitems]);

  useEffect(() => {
    // Retrieve selected watchlist index from localStorage
    const savedIndex = localStorage.getItem("selectedItemIndex");
    if (savedIndex) {
      setSelectedItemIndex(parseInt(savedIndex, 10));
    }
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const handleInputChange = (e) => {
    setNewItemInput(e.target.value);
  };

  const handleEnterKeyPress = (e) => {
    if (e.key === "Enter" && newItemInput.trim() !== "") {
      setWatchlistItems((prevItems) =>
        prevItems.map((item) =>
          item.itemindex === selectedItemIndex
            ? { ...item, itemarray: [...item.itemarray, newItemInput] }
            : item
        )
      );

      setNewItemInput("");
    }
  };

  return (
    <div className="watchlist-container">
      <div className="watchlist-search">
        <FaSearch />
        <input
          type="text"
          placeholder="Search"
          value={newItemInput}
          onChange={handleInputChange}
          onKeyPress={handleEnterKeyPress}
        />
      </div>

      <div className="watchlist-contents">
        <ul>
          {watchlistitems
            .find((item) => item.itemindex === selectedItemIndex)
            .itemarray.map((content, contentIndex) => (
              <div className="content-hr" key={contentIndex}>
                <div className="content-realtime" style={{ display: "flex"}}>
                  <li>{content}</li>
                  <li>realtime</li>
                </div>
                <hr />
              </div>
            ))}
        </ul>
      </div>

      <div className="watchlist-lists">
        {watchlistitems.map((item) => (
          <div
            id="list-contents"
            key={item.itemindex}
            onClick={() => setSelectedItemIndex(item.itemindex)}
          >
            <h3>{item.itemindex}</h3>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchList;
