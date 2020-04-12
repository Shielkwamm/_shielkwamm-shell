import { addRoute, Components } from 'meteor/vulcan:core';

addRoute({ name: 'home', path: '/', componentName: 'GamesList' });
addRoute({ name: 'game', path: '/game/:slug', componentName: "ActiveGame"})
