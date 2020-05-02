import React from 'react';
import { Components, registerComponent, withMulti2 } from 'meteor/vulcan:core';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

const CurrencyHandles = ({ currencyHandles }) => {

  return (
    <React.Fragment>
  {currencyHandles.map( currencyHandle => (
    <React.Fragment key={currencyHandle._id}>
    <h4 style={{textAlign: "right"}}><i>{currencyHandle.note}</i></h4>
    <p style={{textAlign: "right"}}>{currencyHandle.handle.name}: {currencyHandle.mood} {currencyHandle.amount}</p>
    </React.Fragment>
  ))}
  </React.Fragment>
  )
}

registerComponent({ name: "CurrencyHandles", component: CurrencyHandles})

const CurrenciesList = ({ loading, results }) => (
  <React.Fragment>
    <Grid container>
    {!loading && results.map(currency => (
      <React.Fragment key={currency._id}>
        <Grid item xs={12} sm={6}>
        <div style={{backgroundColor: currency.colorScheme.backgroundColor}}>
          <div style={{margin: 0, padding: "15px", border: "1px solid " + currency.colorScheme.color}}>
          <h2 style={{marginBottom: "6px", textAlign: "center",marginTop: "10px"}}><span style={{color: currency.colorScheme.linkColor}}>{currency.glyph}</span> <span style={{color: currency.colorScheme.altColor}}>{currency.name}</span></h2>
          <p style={{marginBottom: "10px", marginTop: 0, textAlign: "center", color: currency.colorScheme.color}}><i>{currency.description}</i></p>
      <p><a href={currency.ledgerUrl}>ledger</a></p>
      </div>
      </div>
      <CurrencyHandles currencyHandles={currency.currencyHandles}/>
      </Grid>
      </React.Fragment>
      )
    )}
    </Grid>
  </React.Fragment>
)

const options = {
  collectionName: "Currencies",
  fragmentName: 'CurrenciesList',
  limit: 11
}

registerComponent({ name: "CurrenciesList", component: CurrenciesList, hocs: [[withMulti2, options]] });

const HavingThings = () => (
  <React.Fragment>
    <Components.HeadTags title={"Having Things"} />
    <h2><Link to="/">⏎ </Link>Having Things</h2>
    <hr></hr>
    <Components.CurrenciesList/>
  </React.Fragment>
);

registerComponent({ name: 'HavingThings', component: HavingThings});