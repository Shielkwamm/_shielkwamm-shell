import Rooms from '../modules/room/collection.js';
import ColorSchemes from '../modules/colorScheme/collection.js';
import { createMutator } from 'meteor/vulcan:core';

Meteor.startup(() => {
   if(Rooms.find().count() === 0) {
    roomsSeed.forEach(room => {
      room.createdAt = new Date();
      let colorScheme = ColorSchemes.findOne({name: room.colorScheme});
      room.colorSchemeId = colorScheme._id;
      Rooms.insert(room);
    })
   }
});

const roomsSeed = [{
  name: "operat0r",
  colorScheme: "n00b",
  messageDelay: 5,
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
  colorScheme: "△USA△",
  isFeatured: true,
  messageDelay: 5,
  slug: "△USA△",
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