import React, { Component } from 'react';
import { Components, registerComponent, withMulti2 } from 'meteor/vulcan:core';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

const Room = ({ room }) => (
  <div  style={{
    overflow: "auto",
    color: room.colorScheme.color,
    paddingTop: "1px",
    paddingLeft: "14px",
    paddingRight: "14px",
    background: room.colorScheme.backgroundColor,
  }}>
    <h1><Link style={{color: room.colorScheme.linkColor}} to={`/room/${room.slug}`}>{room.name}</Link> <span style={{float: "right"}}>{room.zork} <span style={{color: room.colorScheme.linkColor}}>{room._sh_}</span> <span style={{color: room.colorScheme.altColor}}> {room.bwam} </span></span></h1>
    <p>{room.vibe} <a style={{color: room.colorScheme.linkColor}} href={room.currentMusicUrl}>{room.currentMusicTitle}</a> <span style={{float: "right"}}>▵△{room.currentExpPoints} / {room.totalExpPoints}△▵  ☸{room.level} / {room.maxLevel}☸</span></p>
    <p>{room.description}</p>
    <hr></hr>
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
    
    <Grid item xs={4}>
    <p style={{color: room.colorScheme.linkColor}}>handles</p>
    {room.roomHandles.map(rh => (
      <React.Fragment key={rh._id}>
        {rh.handle.isActive ? (<Components.Handle colorScheme={room.colorScheme} key={rh._id} handle={rh.handle}/>) : null }
      </React.Fragment>
    ))}
    </Grid>
    <Grid style={{textAlign: "center"}} item xs={4}>
    <Components.RoomCurrencies room={room}/>
    </Grid>
    <Grid style={{textAlign: "right"}} item xs={4}>
    <p style={{color: room.colorScheme.linkColor}}>i18ns</p>
    {room.i18nRooms.map(ih => (
      <h3 key={ih._id}>{ih.i18n.name}</h3>
    ))}
    </Grid>
    </Grid>
  </div>
);

registerComponent({ name: 'Room', component: Room});
