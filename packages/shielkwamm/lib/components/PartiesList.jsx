import React from 'react';
import { Components, registerComponent, withMulti2 } from 'meteor/vulcan:core';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

const Party = ({ party }) => (
  <Grid item xs={12}>
    <h2><span style={{color: party.colorScheme.linkColor}}>{!!party.isActive? "": "zZz "} {party.mood}</span> <span style={{color: party.colorScheme.color}}>{party.name}- <span style={{fontWeight: "normal"}}>{party.description}</span></span><span style={{float: "right"}}>{party.connectionStatus}</span></h2>
    <Grid item xs={6} style={{color: party.colorScheme.linkColor, float: "left"}}>
    {party.i18ns.map(pi => (
      <div key={pi._id}> {pi.i18n.name}</div>
    ))}
    </Grid>
    <Grid item xs={6} style={{color: party.colorScheme.color, float: "right"}}>
    {party.handles.map(ph => (
      <div key={ph._id} style={{textAlign: "right"}}><Components.Handle handle={ph.handle}/></div>
    ))}
    </Grid>
  </Grid>
)

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
      <React.Fragment>
        {!!party.isEsteemed ? (
          <Grid container spacing={3} key={party._id} style={{backgroundColor: party.colorScheme.backgroundColor}}>
            <Party party={party}/>
          </Grid>
        ): null }
        </React.Fragment>
    ))}
    <hr></hr>
    <h1 style={{textAlign: "center"}}>=== Active ===</h1>
    <hr></hr>
    {!loading && results.map(party => (
      <React.Fragment>
        {!party.isEsteemed && !!party.isActive ? (
          <Grid container spacing={3} key={party._id}  style={{backgroundColor: party.colorScheme.backgroundColor}}>
          <Party party={party}/>
          </Grid>
       ): null}
       </React.Fragment>
    ))}
    <hr></hr>
    <h1 style={{textAlign: "center"}}>=== Inactive ===</h1>
    <hr></hr>
    {!loading && results.map(party => (
      <React.Fragment>
      {!party.isEsteemed && !party.isActive? (
        <Grid container spacing={3} key={party._id} style={{backgroundColor: party.colorScheme.backgroundColor}}>
        <Party party={party}/>
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