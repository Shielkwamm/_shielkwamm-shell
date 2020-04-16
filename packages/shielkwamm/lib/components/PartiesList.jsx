import React from 'react';
import { Components, registerComponent, withMulti2 } from 'meteor/vulcan:core';
import { Link } from 'react-router-dom';

const Party = ({ party }) => (
  <React.Fragment>
    <h2>{!!party.isActive? "": "zZz "} {party.mood} {party.name}- <span style={{fontWeight: "normal"}}>{party.description}</span><span style={{float: "right"}}>{party.connectionStatus}</span></h2>
    {party.handles.map(ph => (
      <div style={{textAlign: "right"}}><Components.Handle handle={ph.handle}/></div>
    ))}
  </React.Fragment>
)

const PartiesList = ({ loading, results }) => (
  <div className="movies-list">
    <Components.HeadTags title={`Parties`}/>
    <h2><Link to="/">⏎ </Link>Parties<span style={{float: "right"}}>count [ {results && results.length} / 50 ]</span></h2>
    <hr></hr>
    <h1 style={{textAlign: "center"}}>=== esteemed ===</h1>
    {!loading && results.map(party => (
      <div key={party._id}>
      {!!party.isEsteemed ? (
        <Party party={party}/>
        ): null}
      </div>
    ))}
    <hr></hr>
    <h1 style={{textAlign: "center"}}>=== Active ===</h1>
    {!loading && results.map(party => (
      <React.Fragment key={party._id}>
        {!party.isEsteemed && !!party.isActive ? (
          <Party party={party}/>
       ): null}
      </React.Fragment>
    ))}
    <hr></hr>
    <h1 style={{textAlign: "center"}}>=== Inactive ===</h1>
    {!loading && results.map(party => (
      <div key={party._id}>
      {!party.isEsteemed && !party.isActive? (
        <Party party={party}/>
      ): null}
      </div>
    ))}
  </div>
);

const options = {
  collectionName: "Parties",
  fragmentName: 'PartyBadge', // uncomment on #Step11
  limit: 50
}

registerComponent({ name: 'PartiesList', component: PartiesList, hocs: [[withMulti2, options]]});