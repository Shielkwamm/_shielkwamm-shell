import React from 'react';
import { Components, registerComponent, withMulti2 } from 'meteor/vulcan:core';
import { Link } from 'react-router-dom';

const HistoricShsList = ({ loading, results }) => {
  return (
    <div className="movies-list">
      <h2><Link to="/">⏎</Link> △ Historic △</h2>
      <hr></hr>
      {!loading && results.map(sh => (
        <React.Fragment key={sh._id}>
        <Components.Sh sh={sh}/>
        </React.Fragment>
      ))}  
    </div>
  )
};

const options = {
  collectionName: "Shs",
  fragmentName: 'ShBest', // uncomment on #Step11
}

registerComponent({ name: 'HistoricShsList', component: HistoricShsList, hocs: [[withMulti2, options]]});
