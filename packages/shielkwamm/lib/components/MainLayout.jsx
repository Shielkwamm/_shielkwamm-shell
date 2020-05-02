import React from 'react';
import { Components, registerComponent, replaceComponent, withCurrentUser, withMulti2 } from 'meteor/vulcan:core';

//import GlyphsList from '../../modules/collection.js';

const MainLayout = ({ children, loading}) => (
  <React.Fragment>
    {/*currentUser*/ true ? (
      <div>
      { children }
      </div>    
    ) : (
      <Components.AccountsLoginForm />
    )}
  </React.Fragment>
);

registerComponent({ name: 'MainLayout', component: MainLayout, hocs: [withCurrentUser] });
replaceComponent('Layout', MainLayout);