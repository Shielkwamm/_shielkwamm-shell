import React, { Component } from 'react';
import { Components, registerComponent, withMulti2 } from 'meteor/vulcan:core';
import { Link } from 'react-router-dom';

const RoomsList = ({ loading, results }) => (
  <div className="movies-list">
    <Components.HeadTags title={`Rooms`}/>
    <h2><Link to="/">⏎ </Link>Rooms <span style={{float: "right"}}> count [ {results && results.length} / 7 ]</span></h2>
    <hr></hr>
    {!loading && results && results.map(room => (
      <Components.Room key={room._id} room={room}/>
    ))}
  </div>
);

const options = {
  collectionName: "Rooms",
  fragmentName: 'RoomsList', // uncomment on #Step11
}

registerComponent({ name: 'RoomsList', component: RoomsList, hocs: [[withMulti2, options]]});