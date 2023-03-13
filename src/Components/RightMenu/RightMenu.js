import React from "react";
import "./Styles/RightMenu.css";
import billiespotify from "../../img/billiespotify.png";
import drakespotify from "../../img/drakespotify.png";
import kanyespotify from "../../img/kanyespotify.png";
import taylorspotify from "../../img/taylorspotify.png";
import beautyspotify from "../../img/beautyspotify.png";

function RightMenu() {
  return (
    <div className="rightMenu">
      <h3>Shortcuts</h3>
      <div>
        <div className="section1">
          <p className="artist-song"> 🧼 Chill Hits</p>
          <p className="artist-song">⭐ Hop</p>
        </div>
        <div className="section1">
          <p className="artist-song"> 🎻Accoustic</p>
          <p className="artist-song"> 🎧Indie Pop</p>
        </div>
        <div className="section1">
          <p className="artist-song"> 🎹Piano Blues</p>
          <p className="artist-song">🛶Jazz</p>
        </div>
      </div>

      <h6 className="fav-artist">Fav Artist</h6>
      <div className="artist-section">
        <div className="artist-image-name">
          <img src={taylorspotify} alt="" className="artist-image" />

          <p className="artist-name">
            Taylor Swift
            <br />
            <span className="artist-library">196 songs in Library</span>
          </p>

          <p>..</p>
        </div>
        <div className="artist-image-name">
          <div className="artist-image-name">
            <img src={kanyespotify} alt="" className="artist-image" />
            <p className="artist-name">
              Kanye West
              <br />
              <span className="artist-library">124 songs in Library</span>
            </p>
            <p>..</p>
          </div>
        </div>
        <div className="artist-image-name">
          <div>
            <img src={drakespotify} alt="" className="artist-image" />
          </div>
          <p className="artist-name">
            Drake
            <br />
            <span className="artist-library">50 songs in Library</span>
          </p>
          <p>..</p>
        </div>
        <div className="artist-image-name">
          <div>
            <img src={billiespotify} alt="" className="artist-image" />
          </div>
          <p className="artist-name">
            Billie Eillish
            <br />
            <span className="artist-library">15 songs in Library</span>
          </p>
          <p>..</p>
        </div>
      </div>
      <div>
        <img src={beautyspotify} alt="" />
      </div>
    </div>
  );
}

export default RightMenu;
