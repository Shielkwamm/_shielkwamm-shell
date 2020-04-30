import React from 'react';
import { Components, registerComponent, withMulti2 } from 'meteor/vulcan:core';
import { Link } from 'react-router-dom';

const CurrencyHandles = ({ handles }) => {

  return (
    <React.Fragment>
  {handles.map( handle => (
    <React.Fragment key={handle._id}>
    <h4 style={{textAlign: "right"}}>{handle.note}</h4>
    <p style={{textAlign: "right"}}>{handle.handle.name}: {handle.mood} {handle.amount}</p>
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
      <CurrencyHandles handles={currency.handles}/>
      </React.Fragment>
      )
    )}
  </React.Fragment>
)

const options = {
  collectionName: "Currencies",
  fragmentName: 'CurrenciesFragment',
  limit: 11
}

registerComponent({ name: "CurrenciesList", component: CurrenciesList, hocs: [[withMulti2, options]] });

const HavingThings = () => (
  <React.Fragment>
    <Components.HeadTags title={"Having Things"} />
    <Link to="/">⏎ </Link>Having Things
    <hr></hr>
    <Components.CurrenciesList/>
  </React.Fragment>
);

registerComponent({ name: 'HavingThings', component: HavingThings});