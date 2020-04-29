import React, { Component } from 'react';
import { Components, registerComponent, withMulti2 } from 'meteor/vulcan:core';
import { Link } from 'react-router-dom';

const Room = ({ room }) => (
  <div  style={{
    overflow: "auto",
    color: room.colorScheme.color,
    paddingTop: "1px",
    paddingLeft: "14px",
    paddingRight: "14px",
    background: room.colorScheme.backgroundColor,
  }}>
    <h1><Link style={{color: room.colorScheme.linkColor}} to={`/room/${room.slug}`}>{room.name}</Link> <span style={{float: "right"}}>{room.zork} {room._sh_} {room.bwam} </span></h1>
    <p>{room.vibe} <a style={{color: room.colorScheme.linkColor}} href={room.currentMusicUrl}>{room.currentMusicTitle}</a> <span style={{float: "right"}}>▵△{room.currentExpPoints} / {room.totalExpPoints}△▵  ☸{room.level} / {room.maxLevel}☸</span></p>
    <p>{room.description}</p>
    <hr></hr>
    <div style={{float: "left"}}>
    <p style={{color: room.colorScheme.linkColor}}>handles</p>
    {room.roomHandles.map(rh => (
      <React.Fragment key={rh._id}>
        {rh.handle.isActive ? (<Components.Handle key={rh._id} handle={rh.handle}/>) : null }
      </React.Fragment>
    ))}
    </div>
    <div style={{float: "right"}}>
    <p style={{color: room.colorScheme.linkColor}}>i18ns</p>
    {room.i18nRooms.map(ih => (
      <h3 key={ih._id}>{ih.i18n.name}</h3>
    ))}
    <hr></hr>
    <Components.RoomCurrencies room={room}/>
    </div>
  </div>
);

registerComponent({ name: 'Room', component: Room});
