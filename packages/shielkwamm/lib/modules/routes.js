import { addRoute, Components } from 'meteor/vulcan:core';

addRoute({ name: 'home', path: '/', componentName: 'GamesList' });

addRoute({ name: 'game', path: '/game/:slug', componentName: "ActiveGame"})
//addRoute({ name: 'gameHandles', path: '/game/:slug/handles', componentName: "GameHandles"})
addRoute({ name: 'gameMessages', path: '/game/:slug/messages', componentName: "GameMessages"})

addRoute({ name: 'markets', path: '/markets', componentName: "Markets"})
addRoute({ name: 'market', path: '/market/:slug', componentName: "Market"})
addRoute({ name: 'handles', path: '/handles', componentName: "Handles"});
