import React from 'react';
import { Components, registerComponent, withMulti2 } from 'meteor/vulcan:core';
import { Link } from 'react-router-dom';

const RoomsList = ({ loading, results }) => (
  <div className="movies-list">
    <h2>Rooms</h2>
    <hr></hr>
    {!loading && results.map(room => (
      <div key={room._id}>
      <h1><Link to={`/room/${room.slug}`}>{room.name}</Link></h1>
      <p>{room._sh_} : {room.bwam}<span style={{float: "right"}}><a href={room.currentMusicUrl}>{room.currentMusicTitle}</a> </span></p>
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
