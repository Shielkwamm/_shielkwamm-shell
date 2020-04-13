import React from 'react';
import { registerComponent } from 'meteor/vulcan:core';
import { Link } from 'react-router-dom';

const RoomHeader = ({ room }) => (
  <div style={{
      color: room.color,
      paddingTop: "1px",
      paddingLeft: "14px",
      paddingRight: "14px",
      backgroundColor: room.backgroundColor,
    }}>
    <h3><Link style={{color: room.linkColor}} to="/rooms">⏎</Link>{room.name} ☸_{room.level} <span style={{float: "right"}}>{room.zork} {room._sh_} {room.bwam}</span></h3>
    <p style={{textAlign: "right"}}> <a style={{color: room.linkColor}} href={room.currentMusicUrl} target={"_blank"}>{room.currentMusicTitle}</a> {room.vibe}</p>
    <hr></hr>
  </div>
)

registerComponent( {name: 'RoomHeader', component: RoomHeader})