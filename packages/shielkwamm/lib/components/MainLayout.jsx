import React from 'react';
import { Components, registerComponent, replaceComponent, withMulti2 } from 'meteor/vulcan:core';

//import GlyphsList from '../../modules/collection.js';

const MainLayout = ({ children, loading, results }) => (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <h1>{ children }</h1>
        </div>
        <hr></hr>
        <div className="col-4">
          <Components.GlyphsList />
        </div>
      </div>
  </div>
);

/*const options = {
  collection: Movies,
  // fragmentName: 'MovieFragment', // uncomment on #Step11
}*/

registerComponent({ name: 'MainLayout', component: MainLayout });
replaceComponent('Layout', MainLayout);