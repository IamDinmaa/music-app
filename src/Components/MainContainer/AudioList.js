import React, { useEffect, useState } from "react";

function AudioList(queryResult, isMainPlaying, setIsMainPlaying) {
  // let songs = [
  //   {
  //     title: "song",
  //   },
  // ];

  // const [song, setSong] = useState(songs);
  // const [currentSong, setCurrentSong] = useState([]);

  // const { isPlaying, togglePlay } = useContext(AudioContext);
  // console.log(isPlaying);
  // const audioElem = useRef();
  // useEffect(() => {
  //   if (isPlaying) {
  //     console.log("from audio play" + isPlaying);
  //     audioElem.current.play();
  //     console.log(isMainPlaying);
  //   } else {
  //     audioElem.current.pause();
  //   }
  // });
  return (
    <div className="audioList">
      <div className="songsContainer">
        <div className="songs">
          <div className="song">
            <div className="section">
              <p className="count">01</p>
              <p className="songName"> Song title</p>
              <p>Omah lay</p>
              <p>Time allocation</p>
              <p>Album</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AudioList;
