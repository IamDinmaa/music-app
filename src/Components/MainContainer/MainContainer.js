import React, { useEffect, useState } from "react";
import "./Styles/MainContainer.css";
import AudioList from "./AudioList";
import Banner from "./Banner";
import { BiSearchAlt } from "react-icons/bi";
import { TbMathGreater } from "react-icons/tb";
function MainContainer() {
  // const [searchInput, setSearchInput] = useState("");
  // const [trackData, setTrackData] = useState (null)
  // useEffect (()=> {
  //   const fetchMusic = async () => {
  //     try {
  //       const response = await fetch (
  //         `https://api.spotify.com/v1/search?q=artist : ${
  //           search ? search : "fireboy"
  //         } &type=track&Limit=5
  //         `
  //         `{
  //           headers: {
  //             Authorization: `Bearer ${apiToken}`
  //           }`
  //         }
  //       )
  //       const data = await response.json();

  //       setTrackData (data);
  //       console.log(trackData);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   console.log("rendered");
  //   console.log("data" + trackData);
  //   fetchMusic ()
  //   setSearch(search)
  // }, [search])
  // useEffect (()=> {
  //   window.alert (
  //     "This app integrates spotify API"
  //   )
  // })
  return (
    <div className="mainContainer">
      <div className="searchBox">
        <input
          type="text"
          placeholder="Search for artist, songs and ..."
          onKeyPress={(event) => {
            if (event.key == "Enter") {
              console.log("pressed enter");
            }
          }}
          // onChange={(event) => setSearchInput(event.target.value)}
        />
        <i className="searchIcon">
          <BiSearchAlt />
        </i>
      </div>
      <div className="trending">
        <p>
          What's hot🔥
          <br />
          <span className="trending-inline">Trending</span>
        </p>
        <p>
          More{" "}
          <i>
            <TbMathGreater />
          </i>{" "}
        </p>
      </div>
      <Banner />
      <div className="menuList">
        <div className="playlist">
          <h1> My Playlist </h1>
          <p>Show all</p>
        </div>

        <div className="song">
          <div className="section">
            <ul className="list">
              <li>#</li>
              <li>
                <a href="#">TITLE</a>
              </li>
              <li>
                {" "}
                <a href="#">ARTIST</a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">TIME</a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">ALBUM</a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <AudioList />
    </div>
  );
}

export default MainContainer;
