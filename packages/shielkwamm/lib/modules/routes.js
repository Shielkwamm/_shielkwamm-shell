import { addRoute, Components } from 'meteor/vulcan:core';

addRoute({ name: 'home', path: '/', componentName: 'Overview' });
addRoute({ name: 'roomsList', path: '/rooms', componentName: "RoomsList"})
addRoute({ name: 'markets', path: '/markets', componentName: "MarketsList"})
addRoute({ name: 'handles', path: '/handles', componentName: "HandlesList"});
addRoute({ name: "historic_sh", path: "/historic_sh_", componentName: "Best_sh_List"})

addRoute({ name: 'room', path: '/room/:slug', componentName: "ActiveRoom"})
//addRoute({ name: 'roomHandles', path: '/room/:slug/handles', componentName: "RoomHandles"})
addRoute({ name: 'roomMessages', path: '/room/:slug/messages', componentName: "RoomMessages"})

addRoute({ name: 'market', path: '/market/:slug', componentName: "Market"})