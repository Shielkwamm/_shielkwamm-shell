import React from 'react';
import { Components, registerComponent, replaceComponent, withCurrentUser } from 'meteor/vulcan:core';

//import GlyphsList from '../../modules/collection.js';

const MainLayout = ({ children, currentUser }) => (
  <React.Fragment>
    {/*currentUser*/ true ? (
      <div className="container">
        <div className="row">
          <div className="col-8">
            { children }
          </div>
          <div className="col-4">
            <Components.GlyphsList />
          </div>
        </div>
      </div>
    ) : (
      <Components.AccountsLoginForm />
    )}
  </React.Fragment>
);

/*const options = {
  collection: Movies,
  // fragmentName: 'MovieFragment', // uncomment on #Step11
}*/
//registerComponent({ name: 'MoviesList', component: MoviesList,  });
registerComponent({ name: 'MainLayout', component: MainLayout, hocs: [withCurrentUser] });
replaceComponent('Layout', MainLayout);