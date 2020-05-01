import React from 'react';
import { Components, registerComponent, withMulti2 } from 'meteor/vulcan:core';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

const Party = ({ party }) => (
  <Grid item xs={12}>
    <h2><span style={{color: party.colorScheme.linkColor}}>{!!party.isActive? "": "zZz "} {party.mood}</span> <span style={{color: party.colorScheme.color}}>{party.name}- <span style={{fontWeight: "normal"}}>{party.description}</span></span><span style={{float: "right"}}>{party.connectionStatus}</span></h2>
    <Grid item xs={6} style={{color: party.colorScheme.linkColor, float: "left"}}>
    {party.partyI18ns.map(partyI18ns => (
      <div key={partyI18ns._id}> {partyI18ns.i18n.name}</div>
    ))}
    </Grid>
    <Grid item xs={6} style={{color: party.colorScheme.color, float: "right"}}>
    {party.partyHandles.map(partyHandle => (
      <div key={partyHandle._id} style={{textAlign: "right"}}><Components.Handle handle={partyHandle.handle}/></div>
    ))}
    </Grid>
  </Grid>
)

registerComponent({ name: 'Party', component: Party});