import React from 'react';
import { Components, registerComponent, withMulti2 } from 'meteor/vulcan:core';
import { Link } from 'react-router-dom';

const GamesList = ({ loading, results }) => (
  <div className="movies-list">
    <h2>Games</h2>
    <hr></hr>
    {!loading && results.map(game => (
      <p key={game._id}><Link to={`/game/${game.slug}`}>{game.name}</Link>: {game._sh_} : {game.bwam} </p>
    ))}
  </div>
);

const options = {
  collectionName: "Games",
  fragmentName: 'GamesFragment', // uncomment on #Step11
}

registerComponent({ name: 'GamesList', component: GamesList, hocs: [[withMulti2, options]]});
