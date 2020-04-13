import React from 'react';
import { Components, registerComponent, withMulti2 } from 'meteor/vulcan:core';
import { Link } from 'react-router-dom';

const PartiesList = ({ loading, results }) => (
  <div className="movies-list">
    <h2><Link to="/">⏎</Link>Parties</h2>
    <hr></hr>
    {!loading && results.map(party => (
      <div key={party._id}>
      <h1>{party.prefix} {party.name}</h1>
      <p>{party.description}</p>
      <hr></hr>
      </div>
    ))}
  </div>
);

const options = {
  collectionName: "Parties",
  fragmentName: 'PartiesFragment', // uncomment on #Step11
}

registerComponent({ name: 'PartiesList', component: PartiesList, hocs: [[withMulti2, options]]});