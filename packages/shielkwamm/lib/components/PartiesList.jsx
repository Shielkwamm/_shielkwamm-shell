import React from 'react';
import { Components, registerComponent, withMulti2 } from 'meteor/vulcan:core';
import { Link } from 'react-router-dom';

const PartiesList = ({ loading, results }) => (
  <div className="movies-list">
    <Components.HeadTags title={`Parties`}/>
    <h2><Link to="/">⏎ </Link>Parties<span style={{float: "right"}}>count [ {results && results.length} / 50 ]</span></h2>
    <hr></hr>
    <h1 style={{textAlign: "center"}}>=== esteemed ===</h1>
    {!loading && results.map(party => (
      <div key={party._id}>
      { party.isEsteemed ? (
          <h2>{party.isActive? "": "zZz "} {party.mood} {party.name}- <span style={{fontWeight: "normal"}}>{party.description}</span></h2>
        ): null}
      </div>
    ))}
    <hr></hr>
    <h1 style={{textAlign: "center"}}>=== Active ===</h1>
    {!loading && results.map(party => (
      <React.Fragment>
        {!party.isEsteemed && party.isActive ? (
        <h3>{party.mood} {party.name} <span style={{fontWeight: "normal"}}>{party.description}</span></h3>
       ): null}
      </React.Fragment>
    ))}
    <hr></hr>
    {!loading && results.map(party => (
      <div key={party._id}>
      {!party.isEsteemed && !party.isActive? (
        <h3>{party.isActive? "": "zZz "} {party.mood} {party.name} - <span style={{fontWeight: "normal"}}>{party.description}</span></h3>
      ): null}
      </div>
    ))}
  </div>
);

const options = {
  collectionName: "Parties",
  fragmentName: 'PartiesFragment', // uncomment on #Step11
  limit: 50
}

registerComponent({ name: 'PartiesList', component: PartiesList, hocs: [[withMulti2, options]]});