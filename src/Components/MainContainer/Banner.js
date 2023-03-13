import React from "react";
import Artist from "../../img/Artist.png";
function Banner() {
  return (
    <div className="banner">
      <img src={Artist} alt="" className="bannerImg" />
      <div className="content">
        <p>Artist</p>
        <h2>
          On Top
          <br />
          Of The World
        </h2>

        <div className="artist">
          <div className="right">
            <a href="#">Play</a>
            <a href="#">Follow</a>
          </div>
          <div className="left"></div>
          <p>
            Monthly Listener
            <br />
            <span>32.092</span>
          </p>
        </div>
        <div className="bottomLayer"></div>
      </div>
    </div>
  );
}

export default Banner;
