import React from "react";
import "./Styles/LeftMenu.css";
import { FaSpotify, FaEllipsisH } from "react-icons/fa";
import Menu from "./Menu";
import MenuList from "./MenuList";
import Discover from "./Discover";
import DiscoverList from "./DiscoverList";
import Collection from "./Collection";
import CollectionList from "./CollectionList";
function LeftMenu() {
  return (
    <div className="leftMenu">
      <div className="logoContainer">
        <i>
          <FaSpotify />
        </i>
        <h2>Spotify</h2>
        <i>
          <FaEllipsisH />
        </i>
      </div>
      <Menu title={"Menu"} menuObject={MenuList} />
      <DiscoverList title={"Discover"} discoverObject={Discover} />
      <CollectionList title={"Your Collection"} collectionObject={Collection} />
      <div className="account">Hi Thaddeus</div>;
    </div>
  );
}

export default LeftMenu;
