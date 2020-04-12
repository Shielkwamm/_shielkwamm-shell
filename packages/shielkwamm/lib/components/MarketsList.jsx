import React from 'react';
import { Components, registerComponent, withMulti2 } from 'meteor/vulcan:core';

//import GlyphsList from '../../modules/collection.js';

const MarketsList = () => (
  <React.Fragment>
    <h2>Markets</h2>
    <hr></hr>
  </React.Fragment>
);


registerComponent({ name: 'MarketsList', component: MarketsList });