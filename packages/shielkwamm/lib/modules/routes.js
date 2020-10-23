import { addRoute } from 'meteor/vulcan:core';

import { Overview } from '../components/Overview';
addRoute({ name: 'home', path: '/', component: Overview });

import { RoomsList } from 'meteor/talk';
addRoute({ name: 'roomsList', path: '/rooms', component: RoomsList})

import { HandlesList } from 'meteor/garden';
addRoute({ name: 'handles', path: '/handles', component: HandlesList});
import { PartiesList } from 'meteor/garden';
addRoute({ name: 'parties', path: '/parties', component: PartiesList});

import { ActiveRoom } from 'meteor/talk';
addRoute({ name: 'room', path: '/room/:slug', component: ActiveRoom})
//addRoute({ name: 'roomHandles', path: '/room/:slug/handles', componentName: "RoomHandles"})
import { RoomMessages } from 'meteor/talk';
addRoute({ name: 'roomMessages', path: '/room/:slug/messages', component: RoomMessages})

import { ColorSchemesList } from 'meteor/color-schemes';
addRoute({ name: 'colorSchemesList', path: '/color-schemes', component: ColorSchemesList })

import { I18nsList } from 'meteor/lexicon';
addRoute({ name: 'i18nsList', path: '/i18n', component: I18nsList});

import { HavingThings } from 'meteor/having-things';
addRoute({ name: 'havingThings', path: '/having-things', component: HavingThings})

import { Things } from 'meteor/having-things';
addRoute({ name: 'things', path: '/things', component: Things})

import { HistoricShsList } from 'meteor/lexicon';
addRoute({ name: "historicShsList", path: '/historic-sh', component: HistoricShsList})
///talk mod

import { RoomMod } from 'meteor/talk';
addRoute({ name: 'roomMod', path: '/room/:slug/mod', component: RoomMod});
import { RoomDJ } from 'meteor/talk';
addRoute({ name: 'roomDJ', path: '/room/:slug/dj', component: RoomDJ});
import { RoomCannon } from 'meteor/talk';
addRoute({ name: 'roomCannon', path: '/room/:slug/cannon', component: RoomCannon});
import { RoomOperator } from 'meteor/talk';
addRoute({ name: 'roomOperator', path: '/room/:slug/operator', component: RoomOperator});
