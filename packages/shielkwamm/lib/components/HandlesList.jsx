import React from 'react';
import { Components, registerComponent, withMulti2 } from 'meteor/vulcan:core';

//import GlyphsList from '../../modules/collection.js';

const HandlesList = () => (
  <React.Fragment>
    <h2>Handles</h2>
    <p>~unconfirmed, !inbound, []spammy</p>
    <hr></hr>
    <p>zZz admin</p>
    <p>~warmIceElation</p>
    <p>zZz airBursts</p>
    <p>+☴☴ BurpingCactus</p>
    <p>TrussHere</p>
    <p>++☴☴ +m Jimmy[capsule]</p>
    <p>[lolliebombs]</p>
    <p></p>
    <hr></hr>
  </React.Fragment>
);


registerComponent({ name: 'HandlesList', component: HandlesList });