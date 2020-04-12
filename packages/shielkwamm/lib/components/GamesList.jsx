import React from 'react';
import { Components, registerComponent, withMulti2 } from 'meteor/vulcan:core';
import { Link } from 'react-router-dom';

const GamesList = ({ loading, results }) => (
  <div className="movies-list">
    <h3>List of active games</h3>
    {!loading && results.map(game => (
      <h1><Link to={`/game/${game.slug}`}>{game.name}</Link></h1>
    ))}
  </div>
);

const options = {
  collectionName: "Games",
  fragmentName: 'GamesFragment', // uncomment on #Step11
}

registerComponent({ name: 'GamesList', component: GamesList, hocs: [[withMulti2, options]]});
