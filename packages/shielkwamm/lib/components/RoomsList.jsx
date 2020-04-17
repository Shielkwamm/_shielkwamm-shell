import React from 'react';
import { Components, registerComponent, withMulti2 } from 'meteor/vulcan:core';
import { Link } from 'react-router-dom';

const RoomsList = ({ loading, results }) => (
  <div className="movies-list">
    <Components.HeadTags title={`Rooms`}/>
    <h2><Link to="/">⏎ </Link>Rooms <span style={{float: "right"}}> count [ {results && results.length} / 7 ]</span></h2>
    <hr></hr>
    {!loading && results && results.map(room => (
      <div  style={{
        overflow: "auto",
        color: room.colorScheme.color,
        paddingTop: "1px",
        paddingLeft: "14px",
        paddingRight: "14px",
        background: room.colorScheme.backgroundColor,
      }} key={room._id}>
        <h1><Link style={{color: room.colorScheme.linkColor}} to={`/room/${room.slug}`}>{room.name}</Link> <span style={{float: "right"}}>{room.zork} {room._sh_} {room.bwam} </span></h1>
        <p>{room.vibe} <a style={{color: room.colorScheme.linkColor}} href={room.currentMusicUrl}>{room.currentMusicTitle}</a> <span style={{float: "right"}}>▵△{room.currentExpPoints} / {room.totalExpPoints}△▵  ☸{room.level} / {room.maxLevel}☸</span></p>
        <p>{room.description}</p>
        <hr></hr>
        <div style={{float: "left"}}>
        <p style={{color: room.colorScheme.linkColor}}>handles</p>
        {room.roomHandles.map(rh => (
          <React.Fragment>
            {rh.handle.isActive ? (<Components.Handle key={rh._id} handle={rh.handle}/>) : null }
          </React.Fragment>
        ))}
        </div>
        <div style={{float: "right"}}>
        <p style={{color: room.colorScheme.linkColor}}>i18ns</p>
        {room.i18nRooms.map(ih => (
          <h3 key={ih._id}>{ih.i18n.name}</h3>
        ))}
        </div>
      </div>
    ))}
  </div>
);

const options = {
  collectionName: "Rooms",
  fragmentName: 'RoomsFragment', // uncomment on #Step11
}

registerComponent({ name: 'RoomsList', component: RoomsList, hocs: [[withMulti2, options]]});
