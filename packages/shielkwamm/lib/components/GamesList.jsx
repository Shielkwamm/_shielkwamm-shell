import React from 'react';
import { Components, registerComponent, withMulti2 } from 'meteor/vulcan:core';

const GamesList = ({ loading, results }) => (
  <div className="movies-list">
    <h3>List of active games</h3>
    <Components.Datatable collectionName="Games"/>
  </div>
);

/*const options = {
  collection: Movies,
  // fragmentName: 'MovieFragment', // uncomment on #Step11
}*/

registerComponent({ name: 'GamesList', component: GamesList });
