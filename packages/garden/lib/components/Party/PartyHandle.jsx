import React from 'react';
import { Components, registerComponent, withMulti2 } from 'meteor/vulcan:core';

const PartyHandle = ({ handle, colorScheme }) => (
  <React.Fragment>
  <h3><span style={{color: colorScheme.linkColor}}>{handle.isActive? "": "zZz "} {handle.mood}</span> {handle.name}{handle.inventory.length > 0? "_" + handle.inventory.join(""): ""} <Components.HandlePartiesList handleParties={handle.parties}/><span style={{float: "right"}}>{handle.note}</span></h3> 
  </React.Fragment>
)

registerComponent({ name: 'PartyHandle', component: PartyHandle});