import Rooms from '../modules/room/collection.js';
import { createMutator } from 'meteor/vulcan:core';

Meteor.startup(() => {
   if(Rooms.find().count() === 0) {
    roomsSeed.forEach(room => {
      room.createdAt = new Date();
      Rooms.insert(room);
    })
   }
});

const roomsSeed = [{
  name: "operat0r",
  messageDelay: 5,
  backgroundColor:"#FFFFFF",
  linkColor: "#A1A1A1",
  color: "#000000",
  slug: "operat0r",
  description: "Get yer calls answered!",
  isActive: false,
  currentExpPoints: 0,
  totalExpPoints: 50,
  level: 0,
  maxLevel: 5,
  zork: "++☰",
  bwam: "[-]◯",
  vibe: "↑⬤",
  _sh_: "+△",
  currentMusicUrl: "https://www.youtube.com/watch?v=HxAYJdLXgZo",
  currentMusicTitle: "Marble Madness Remix (2009)"
},
{
  name: "△USA△",
  messageDelay: 5,
  backgroundColor:"#f1f1f1",
  linkColor: "#bf0a30",
  color: "#002868",
  slug: "operat0r",
  description: "'merica",
  isActive: false,
  currentExpPoints: 0,
  totalExpPoints: 50,
  level: 0,
  maxLevel: 5,
  zork: "+☰",
  bwam: "+◯/+",
  vibe: "↑↑⬤↑↑",
  _sh_: "[+]△[+]",
  currentMusicUrl: "https://www.youtube.com/watch?v=a-7XWhyvIpE",
  currentMusicTitle: "SOUSA The Stars and Stripes Forever - \"The President's Own\" U.S. Marine Band"
}
]