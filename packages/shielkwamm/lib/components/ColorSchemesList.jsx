import React from 'react';
import { Components, registerComponent, withMulti2 } from 'meteor/vulcan:core';

//import GlyphsList from '../../modules/collection.js';

const ColorSchemesList = ({ loading, results }) => (
  <React.Fragment>
    <h1>Color Schemes</h1>
    <hr></hr>
    <Components.HeadTags title={"Color Schemes"} />
    {!loading && results.map(colorScheme => (
        <React.Fragment key={colorScheme._id}>
        <div style={{float: "left", width: "30%", padding: "5px", display: "inlineBlock"}}>
        <p>{colorScheme.name}</p>
        <div style={{height: "55px", backgroundColor: colorScheme.color}}></div>
        <div style={{height: "55px", backgroundColor: colorScheme.backgroundColor}}></div>
        <div style={{height: "55px", backgroundColor: colorScheme.linkColor}}></div>
        </div>
        </React.Fragment>
      )
    )}
  </React.Fragment>
);

const options = {
  collectionName: "ColorSchemes",
  fragmentName: 'ColorSchemesFragment',
  limit: 11
}

//<div style={{backgroundColor: "white", textAlign: "center", left: 0, right: 0, position: "fixed", bottom: "0"}}>
//</div>
registerComponent({ name: 'ColorSchemesList', component: ColorSchemesList, hocs: [[withMulti2, options]] });