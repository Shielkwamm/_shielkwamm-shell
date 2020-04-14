import React from 'react';
import { Components, registerComponent } from 'meteor/vulcan:core';
import { Link } from 'react-router-dom';

const Overview = () => (
  <div className="movies-list">
    <h1>Welcome weary adventurers to ==== Shielkwámḿ ====||</h1>
    <h2><Link to="/rooms">Rooms</Link></h2>
    <h2><Link to="/i18n">i18n</Link></h2>
    <h2><Link to="/handles">Handles</Link></h2>
    <h2><Link to="/parties">Parties</Link></h2>
    <h2><Link to="/markets">Markets</Link></h2>
    <h2><Link to="/historic_sh_">Historic △</Link></h2>
  </div>

registerComponent({ name: 'Overview', component: Overview});

//<Components.Best_sh_List />

/*
    <Components.RoomsList />
    <Components.HandlesList />
    <Components.MarketsList />
    <Components.Best_sh_List />
    */