import React from 'react';
import { Components, registerComponent, withMulti2 } from 'meteor/vulcan:core';
import { Link } from 'react-router-dom';

const ColorSchemesList = ({ loading, results }) => (
  <React.Fragment>
    <Components.HeadTags title={"Color Schemes"} />
    <h2><Link to="/">⏎ </Link>Color Schemes <span style={{float: "right"}}>count [ {results && results.length} / 11 ]</span></h2>
    <hr></hr>
    {!loading && results.map(colorScheme => (
      <div key={colorScheme._id} style={{float: "left", width: "30%", padding: "5px", display: "inlineBlock"}}>
        <p>{colorScheme.name}</p>
        <div style={{height: "55px", backgroundColor: colorScheme.color}}></div>
        <div style={{height: "55px", backgroundColor: colorScheme.backgroundColor}}></div>
        <div style={{height: "55px", backgroundColor: colorScheme.linkColor}}></div>
        <div style={{height: "55px", backgroundColor: colorScheme.altColor}}></div>
      </div>  
      )
    )}
  </React.Fragment>
);

const options = {
  collectionName: "ColorSchemes",
  fragmentName: 'ColorSchemesList',
  limit: 11
}

registerComponent({ name: 'ColorSchemesList', component: ColorSchemesList, hocs: [[withMulti2, options]] });