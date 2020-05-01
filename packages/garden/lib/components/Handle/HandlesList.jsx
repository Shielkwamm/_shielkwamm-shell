import React from 'react';
import { Components, registerComponent, withMulti2 } from 'meteor/vulcan:core';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

const HandleCurrencies = ({ handleCurrencies }) => (
  <React.Fragment>
    {handleCurrencies && handleCurrencies.map(handleCurrency => (
      <p key={handleCurrency._id} style={{marginLeft: "50px"}}>{handleCurrency.currency.glyph} [{handleCurrency.currency.name}] {handleCurrency.amount} {handleCurrency.mood}<span style={{float:"right"}}>{handleCurrency.note}</span></p> 
    ))}
  </React.Fragment>
)

registerComponent({ name: 'HandleCurrencies', component: HandleCurrencies });

const HandlesList = ({ loading, results }) => (
  <React.Fragment>
    <Components.HeadTags title={`Handles`}/>
    <h2><Link to="/">⏎ </Link>Handles <span style={{float: "right"}}>count [ {results && results.length} / 77]</span></h2>
    <p>~unconfirmed, !inbound, []spammy</p>
    <hr></hr>
    <h1 style={{textAlign: "center"}}>=== Honorary ===</h1>
    {!loading && results.map(handle => (
      <React.Fragment key={handle._id}>
        {handle.isHonorary ? (
          <React.Fragment>
            <Components.Handle handle={handle}/>
            <Components.HandleCurrencies handleCurrencies={handle.handleCurrencies}/>
          </React.Fragment>
        ): null}  
      </React.Fragment>
    ))}
    <hr></hr>
    <Grid container spacing={10}>
      <Grid item md={6} xs={12}>
    <h1 style={{textAlign: "center"}}>=== Active ===</h1>
    <Grid container spacing={2}>
    {!loading && results.map(handle => (
      <React.Fragment key={handle._id}>
        {!handle.isHonorary && handle.isActive ? (
          <Grid item xs={12} sm={12} md={6}>
          <Components.Handle handle={handle}/>
          <Components.HandleCurrencies handleCurrencies={handle.handleCurrencies}/>
          </Grid>
       ): null}
      </React.Fragment>
    ))}
    </Grid>
    </Grid>
    <Grid item md={6} xs={12}>
    <h1 style={{textAlign: "center"}}>=== Inactive ===</h1>
    <Grid container spacing={2}>
    {!loading && results.map(handle => (
      <React.Fragment key={handle._id}>
        {!handle.isHonorary && !handle.isActive ? (
          <Grid item xs={12} sm={12} md={6}>
          <Components.Handle handle={handle} isShowingZzZs={false}/>
          <Components.HandleCurrencies handleCurrencies={handle.handleCurrencies}/>
          </Grid>
       ): null}
      </React.Fragment>
    ))}
    </Grid>
    </Grid>
    </Grid>
  </React.Fragment>
);

const options = {
  collectionName: "Handles",
  fragmentName: 'HandlesList',
  limit: 77
}

registerComponent({ name: 'HandlesList', component: HandlesList, hocs: [[withMulti2, options]] });

/*
<p>~warmIceElation</p>
    <p>+☴☴ BurpingCactus</p>
    <p>++☴☴ +m Jimmy[capsule]</p>
    <p>[lolliebombs]</p>

    */