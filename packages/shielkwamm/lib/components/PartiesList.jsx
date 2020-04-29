import React from 'react';
import { Components, registerComponent, withMulti2 } from 'meteor/vulcan:core';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

const PartiesList = ({ loading, results }) => (
  <div className="movies-list">
    <Components.HeadTags title={`Parties`}/>
    <h2><Link to="/">⏎ </Link>Parties<span style={{float: "right"}}>count [ {results && results.length} / 50 ]</span></h2>
    <div>
    <hr></hr>
    <h1 style={{textAlign: "center"}}>=== esteemed ===</h1>
    <hr></hr>
    </div>
    {!loading && results.map(party => (
      <React.Fragment key={party._id + "es"}>
        {!!party.isEsteemed ? (
          <Grid container spacing={3} style={{backgroundColor: party.colorScheme.backgroundColor}}>
            <Components.Party party={party}/>
          </Grid>
        ): null }
        </React.Fragment>
    ))}
    <hr></hr>
    <h1 style={{textAlign: "center"}}>=== Active ===</h1>
    <hr></hr>
    {!loading && results.map(party => (
      <React.Fragment key={party._id + "ac"} >
        {!party.isEsteemed && !!party.isActive ? (
          <Grid container spacing={3} style={{backgroundColor: party.colorScheme.backgroundColor}}>
          <Components.Party party={party}/>
          </Grid>
       ): null}
       </React.Fragment>
    ))}
    <hr></hr>
    <h1 style={{textAlign: "center"}}>=== Inactive ===</h1>
    <hr></hr>
    {!loading && results.map(party => (
      <React.Fragment  key={party._id + "in"} >
      {!party.isEsteemed && !party.isActive? (
        <Grid container spacing={3}style={{backgroundColor: party.colorScheme.backgroundColor}}>
        <Components.Party party={party}/>
        </Grid>
      ): null}
      </React.Fragment>
    ))}
  </div>
);

const options = {
  collectionName: "Parties",
  fragmentName: 'PartyBadge', // uncomment on #Step11
  limit: 50
}

registerComponent({ name: 'PartiesList', component: PartiesList, hocs: [[withMulti2, options]]});