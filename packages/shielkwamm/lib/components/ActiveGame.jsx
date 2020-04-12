import React from 'react';
import { Components, registerComponent, withSingle2 } from 'meteor/vulcan:core';

const ActiveGame = ({ loading, document }) => (
  <div className="movies-list">
    {loading ? (
      null
    ) : (
      <h3>{document.name}</h3>
    )}
  </div>
);

const options = {
  collectionName: "Games",
  fragmentName: 'GamesFragment', // uncomment on #Step11
}

registerComponent({ name: 'ActiveGame', component: ActiveGame, hocs: [[withSingle2, options]]});