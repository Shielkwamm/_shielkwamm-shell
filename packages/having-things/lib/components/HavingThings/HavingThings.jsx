import React from 'react';
import { Components, registerComponent, withMulti2 } from 'meteor/vulcan:core';
import { Link } from 'react-router-dom';

const CurrencyHandles = ({ currencyHandles }) => {

  return (
    <React.Fragment>
  {currencyHandles.map( currencyHandle => (
    <React.Fragment key={currencyHandle._id}>
    <h4 style={{textAlign: "right"}}>{currencyHandle.note}</h4>
    <p style={{textAlign: "right"}}>{currencyHandle.handle.name}: {currencyHandle.mood} {currencyHandle.amount}</p>
    </React.Fragment>
  ))}
  </React.Fragment>
  )
}

registerComponent({ name: "CurrencyHandles", component: CurrencyHandles})

const CurrenciesList = ({ loading, results }) => (
  <React.Fragment>
    {!loading && results.map(currency => (
      <React.Fragment key={currency._id}>
      <h2>{currency.glyph} {currency.name}</h2>
      <p><a href={currency.ledgerUrl}>ledger</a></p>
      <p>{currency.description}</p>
      <CurrencyHandles currencyHandles={currency.currencyHandles}/>
      </React.Fragment>
      )
    )}
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