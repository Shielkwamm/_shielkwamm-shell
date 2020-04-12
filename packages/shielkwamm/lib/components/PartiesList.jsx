import React from 'react';
import { Components, registerComponent, withMulti2 } from 'meteor/vulcan:core';
import { Link } from 'react-router-dom';

const PartiesList = ({ loading, results }) => (
  <div className="movies-list">
    <h2>Parties</h2>
    <hr></hr>
    
  </div>
);

const options = {
  collectionName: "Parties",
  fragmentName: 'PartiesFragment', // uncomment on #Step11
}

registerComponent({ name: 'PartiesList', component: PartiesList, hocs: [[withMulti2, options]]})

/*
{!loading && results.map(party => (
      <div key={room._id}>
      <h1><Link to={`/room/${room.slug}`}>{room.name}</Link></h1>
      <p>{room._sh_} : {room.bwam}<span style={{float: "right"}}><a href={room.currentMusicUrl}>{room.currentMusicTitle}</a> </span></p>
      <p>{room.description}</p>
      <hr></hr>
      </div>
    ))}
    */