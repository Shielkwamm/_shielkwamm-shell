import React from 'react';
import { Components, registerComponent, replaceComponent, useCurrentUser } from 'meteor/vulcan:core';

//import GlyphsList from '../../modules/collection.js';

const MainLayout = ({ children, loading}) => {
  const { currentUser } = useCurrentUser();
  return (
  <React.Fragment>
    {/*currentUser*/ true ? (
      <div>
      { children }
      </div>    
    ) : (
      <Components.AccountsLoginForm />
    )}
  </React.Fragment>
  )
};

registerComponent({ name: 'MainLayout', component: MainLayout });
replaceComponent('Layout', MainLayout);