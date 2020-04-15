import React from 'react';
import { Components, registerComponent, withMulti2 } from 'meteor/vulcan:core';
import { Link } from 'react-router-dom';

//import GlyphsList from '../../modules/collection.js';

const HandlesList = ({ loading, results }) => (
  <React.Fragment>
    <Components.HeadTags title={`Handles`}/>
    <h2><Link to="/">⏎ </Link>Handles <span style={{float: "right"}}>count [ {results && results.length} / 77]</span></h2>
    <p>~unconfirmed, !inbound, []spammy</p>
    <hr></hr>
    <h1 style={{textAlign: "center"}}>=== Honorary ===</h1>
    {!loading && results.map(handle => (
      <React.Fragment>
        {handle.isHonorary ? (
          <h2>{handle.isActive? "": "zZz "} {handle.mood} {handle.name} </h2>
        ): null}
      </React.Fragment>
    ))}
    <hr></hr>
    <h1 style={{textAlign: "center"}}>=== Active ===</h1>
    {!loading && results.map(handle => (
      <React.Fragment>
        {!handle.isHonorary && handle.isActive ? (
        <h3>{handle.mood} {handle.name} <span style={{float: "right"}}>{handle.note}</span></h3>
       ): null}
      </React.Fragment>
    ))}
    <hr></hr>
    {!loading && results.map(handle => (
      <React.Fragment>
        {!handle.isHonorary && !handle.isActive ? (
        <h3>{handle.isActive? "": "zZz "} {handle.mood} {handle.name} <span style={{float: "right"}}>{handle.note}</span></h3>
       ): null}
      </React.Fragment>
    ))}
  </React.Fragment>
);

const options = {
  collectionName: "Handles",
  fragmentName: 'HandlesFragment', // uncomment on #Step11
  limit: 77
}

registerComponent({ name: 'HandlesList', component: HandlesList, hocs: [[withMulti2, options]] });

/*
<p>~warmIceElation</p>
    <p>+☴☴ BurpingCactus</p>
    <p>++☴☴ +m Jimmy[capsule]</p>
    <p>[lolliebombs]</p>

    */