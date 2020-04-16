import { addRoute, Components } from 'meteor/vulcan:core';

addRoute({ name: 'home', path: '/', componentName: 'Overview' });
addRoute({ name: 'roomsList', path: '/rooms', componentName: "RoomsList"})
addRoute({ name: 'roomRoom', path: '/room/:slug/room', componentName: "RoomRoom"});
addRoute({ name: 'roomDJ', path: '/room/:slug/dj', componentName: "RoomDJ"});
addRoute({ name: 'roomCannon', path: '/room/:slug/cannon', componentName: "RoomCannon"});

addRoute({ name: 'handles', path: '/handles', componentName: "HandlesList"});
addRoute({ name: "parties", path: "/parties", componentName: "PartiesList"});
addRoute({ name: "historic_sh", path: "/historic_sh_", componentName: "Best_sh_List"})

addRoute({ name: 'room', path: '/room/:slug', componentName: "ActiveRoom"})
addRoute({ name: 'roomOperat0r', path: '/room/:slug/operat0r', componentName: "RoomOperat0r"});
//addRoute({ name: 'roomHandles', path: '/room/:slug/handles', componentName: "RoomHandles"})
addRoute({ name: 'roomMessages', path: '/room/:slug/messages', componentName: "RoomMessages"})
addRoute({ name: 'colorSchemesList', path: '/color-schemes', componentName: "ColorSchemesList"})

addRoute({ name: 'i18nsList', path: '/i18n', componentName: "i18nsList"});

addRoute({ name: 'glphysList', path: '/glyphs', componentName: "GlyphsList"})