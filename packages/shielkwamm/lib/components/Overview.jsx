import React from 'react';
import { Components, registerComponent } from 'meteor/vulcan:core';
import { Link } from 'react-router-dom';

const Overview = () => (
  <div className="movies-list">
    <h1><Link to="/rooms">Rooms</Link></h1>
    <h1><Link to="/handles">Handles</Link></h1>
    <h1><Link to="/markets">Markets</Link></h1>
    <h1><Link to="/historic_sh_">Historic △</Link></h1>
  </div>
);

registerComponent({ name: 'Overview', component: Overview});

//<Components.Best_sh_List />

/*
    <Components.GamesList />
    <Components.HandlesList />
    <Components.MarketsList />
    <Components.Best_sh_List />
    */