import { addRoute, Components } from 'meteor/vulcan:core';

addRoute({ name: 'home', path: '/', componentName: 'Overview' });
addRoute({ name: 'markets', path: '/markets', componentName: "MarketsList"})
addRoute({ name: 'handles', path: '/handles', componentName: "HandlesList"});

addRoute({ name: 'game', path: '/game/:slug', componentName: "ActiveGame"})
//addRoute({ name: 'gameHandles', path: '/game/:slug/handles', componentName: "GameHandles"})
addRoute({ name: 'gameMessages', path: '/game/:slug/messages', componentName: "GameMessages"})

addRoute({ name: 'market', path: '/market/:slug', componentName: "Market"})