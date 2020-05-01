import React from 'react';
import { Components, registerComponent, withMulti2 } from 'meteor/vulcan:core';
import { Link } from 'react-router-dom';

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
    <h1 style={{textAlign: "center"}}>=== Active ===</h1>
    {!loading && results.map(handle => (
      <React.Fragment key={handle._id}>
        {!handle.isHonorary && handle.isActive ? (
          <React.Fragment>
          <Components.Handle handle={handle}/>
          <Components.HandleCurrencies handleCurrencies={handle.handleCurrencies}/>
          </React.Fragment>
       ): null}
      </React.Fragment>
    ))}
    <hr></hr>
    <h1 style={{textAlign: "center"}}>=== Inactive ===</h1>
    {!loading && results.map(handle => (
      <React.Fragment key={handle._id}>
        {!handle.isHonorary && !handle.isActive ? (
          <React.Fragment>
          <Components.Handle handle={handle}/>
          <Components.HandleCurrencies handleCurrencies={handle.handleCurrencies}/>
          </React.Fragment>
       ): null}
      </React.Fragment>
    ))}
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