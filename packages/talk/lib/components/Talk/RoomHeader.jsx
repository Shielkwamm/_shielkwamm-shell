import React from 'react';
import { Link } from 'react-router-dom';

export const RoomHeader = ({ room }) => (
  <div style={{
      color: room.colorScheme.color,
      paddingTop: "1px",
      paddingLeft: "14px",
      paddingRight: "14px",
      background: room.colorScheme.backgroundColor,
    }}>
    <h3><Link style={{color: room.colorScheme.linkColor}} to="/rooms">⏎</Link>{room.name} ☸_{room.level} <span style={{float: "right"}}>{room.zork} <span style={{color: room.colorScheme.linkColor}}>{room._sh_}</span> <span style={{color: room.colorScheme.altColor}}>{room.bwam}</span></span></h3>
    <p style={{textAlign: "right"}}> <a style={{color: room.colorScheme.linkColor}} href={room.currentMusicUrl} target={"_blank"}>{room.currentMusicTitle}</a> {room.vibe}</p>
    <hr></hr>
  </div>
)