import React from 'react';
import { Components, registerComponent, withMulti2 } from 'meteor/vulcan:core';
import { Link } from 'react-router-dom';

const PartiesList = ({ handleParties = []}) => (
  <React.Fragment>
  { handleParties.length > 0 ? (
    <span>[ { handleParties.map((handleParty, index) => (<span key={handleParty._id}>{handleParty.isMod?"#":""}{handleParty.party.name} {(handleParties.length-1 !== index) ? ",": ""} </span>))} ]</span>
  ): null }
  </React.Fragment>
)

/*handleParties.forEach(handleParty => {
    <span>{handleParty.party.name}</span>
  })*/

const Handle = ({ handle }) => (
  <h3>{handle.isActive? "": "zZz "} {handle.mood} {handle.name}{handle.inventory? "_" + handle.inventory.join(""): ""} <PartiesList handleParties={handle.parties}/><span style={{float: "right"}}>{handle.note}</span></h3> 
)

registerComponent({ name: 'Handle', component: Handle});