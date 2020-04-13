import React from 'react';
import { Components, registerComponent, withMulti2 } from 'meteor/vulcan:core';
import { Link } from 'react-router-dom';

const RoomsList = ({ loading, results }) => (
  <div className="movies-list">
    <h2><Link to="/">⏎ </Link>Rooms</h2>
    <hr></hr>
    {!loading && results.map(room => (
      <div  style={{
        color: room.color,
        paddingTop: "1px",
        paddingLeft: "14px",
        paddingRight: "14px",
        background: room.backgroundColor,
      }} key={room._id}>
        <h1><Link style={{color: room.linkColor}} to={`/room/${room.slug}`}>{room.name}</Link> <span style={{float: "right"}}>{room.zork} {room._sh_} {room.bwam} </span></h1>
        <p>{room.vibe} <a style={{color: room.linkColor}} href={room.currentMusicUrl}>{room.currentMusicTitle}</a> <span style={{float: "right"}}>▵△{room.currentExpPoints} / {room.totalExpPoints}△▵  ☸{room.level} / {room.maxLevel}☸</span></p>
        <p>{room.description}</p>
        <hr></hr>
      </div>
    ))}
  </div>
);

const options = {
  collectionName: "Rooms",
  fragmentName: 'RoomsFragment', // uncomment on #Step11
}

registerComponent({ name: 'RoomsList', component: RoomsList, hocs: [[withMulti2, options]]});
