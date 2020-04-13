import React from 'react';
import { Components, registerComponent, withMulti2 } from 'meteor/vulcan:core';
import { Link } from 'react-router-dom';

//import GlyphsList from '../../modules/collection.js';

const HandlesList = ({ loading, results }) => (
  <React.Fragment>
    <h2><Link to="/">⏎ </Link>Handles</h2>
    <p>~unconfirmed, !inbound, []spammy</p>
    <hr></hr>
    {!loading && results.map(handles => (
      <React.Fragment>
       <p>{handles.state} {handles.name}</p>
      
      </React.Fragment>
    ))}
    <hr></hr>
  </React.Fragment>
);

const options = {
  collectionName: "Handles",
  fragmentName: 'HandlesFragment', // uncomment on #Step11
}

registerComponent({ name: 'HandlesList', component: HandlesList, hocs: [[withMulti2, options]] });

/*
<p>~warmIceElation</p>
    <p>+☴☴ BurpingCactus</p>
    <p>++☴☴ +m Jimmy[capsule]</p>
    <p>[lolliebombs]</p>

    */