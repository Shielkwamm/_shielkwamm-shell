import { createMutator } from 'meteor/vulcan:core';
import { getCollection } from 'meteor/vulcan:lib';

Meteor.startup(() => {
  const Rooms = getCollection('Rooms')
  const ColorSchemes = getCollection('ColorSchemes')
  const Handles = getCollection('Handles');
  const RoomsHandles = getCollection('RoomsHandles');
  const RoomsI18ns = getCollection('RoomsI18ns');
  const I18ns = getCollection('I18ns')
   if(Rooms.find().count() === 0) {
    roomsSeed.forEach(room => {
      room.createdAt = new Date();
      let colorScheme = ColorSchemes.findOne({name: room.colorScheme});
      room.colorSchemeId = colorScheme._id;
      let roomId = Rooms.insert(room);

      room.i18ns.forEach(ir => {
        let i = I18ns.findOne({name: ir.name})
        if(!i) {
          console.log('###irc ' + ir.name + ' not found ');
          return;
        }
        RoomsI18ns.insert({
          i18nId: i._id,
          roomId: roomId,
          createdAt: new Date()
        })
      })

      room.handles.forEach(h => {

      let handle = Handles.findOne({name: h.name});
      if(!handle) {
        console.log('###rh handle ' + h.name + ' not found ', h)
        return;
      }
     
      RoomsHandles.insert({
        roomId: roomId,
        handleId: handle._id,
        isMod: !!h.isMod,
        isCannon: !!h.isCannon,
        isDJ: !!h.isDJ,
        createdAt: new Date()
      })
     })
    })
   }
});

const roomsSeed = [{
  name: 'operat0r',
  colorScheme: 'n00b',
  messageDelay: 5,
  slug: 'operat0r',
  description: 'Get yer calls answered!',
  isActive: false,
  currentExpPoints: 0,
  totalExpPoints: 50,
  level: 0,
  maxLevel: 5,
  zork: '++☰',
  bwam: '[-]◯',
  vibe: '↑⬤',
  _sh_: '+△',
  currentMusicUrl: 'https://www.youtube.com/watch?v=HxAYJdLXgZo',
  currentMusicTitle: 'Marble Madness Remix (2009)',
  handles: [
    {name: 'Arbitrat0r'},
    {name: 'Inf0rmation'},
    {name: 'chatb0t'},
    {name: 'Admin'},
    {name: 'FishyFishy'} 
  ],
  i18ns: [
    {name: 'basic_US'},
    {name: 'admin_ME'},
    {name: 'money_$$'},
  ]
},
{
  name: '△USA△',
  colorScheme: '△USA△',
  isFeatured: true,
  messageDelay: 5,
  slug: '△USA△',
  description: '\'merica',
  isActive: false,
  currentExpPoints: 0,
  totalExpPoints: 50,
  level: 0,
  maxLevel: 5,
  zork: '+☰',
  bwam: '+◯/+',
  vibe: '↑↑⬤↑↑',
  _sh_: '[+]△[+]',
  currentMusicUrl: 'https://www.youtube.com/watch?v=a-7XWhyvIpE',
  currentMusicTitle: 'SOUSA The Stars and Stripes Forever - "The President\'s Own" U.S. Marine Band',
  handles: [
    {name: 'Arbitrat0r'},
    {name: 'Inf0rmation'},
    {name: 'chatb0t'},
    {name: 'Admin'},
    {name: 'MrPeanut', isMod: true},
    {name: 'Slipurrrrs', isMod: true, isDJ: true },
    {name: 'Truss BaVeriphi'},
    {name: 'MrHanky', isCannon: true, isDJ: true}
  ],
  i18ns: [
    {name: 'basic_US'},
    {name: 'female_FM'},
    {name: 'money_$$'},
    {name: 'appropriate_HI'}
  ]
},
{
  name: 'Work Stuffz',
  colorScheme: 'imagination',
  isFeatured: true,
  messageDelay: 5,
  slug: 'work-stuffz',
  description: 'Spitbawlz',
  isActive: false,
  currentExpPoints: 0,
  totalExpPoints: 50,
  level: 0,
  maxLevel: 5,
  zork: '+/{{☰}}+',
  bwam: '?+◯☯?+',
  vibe: '↑↑⬤',
  _sh_: '+△',
  currentMusicUrl: 'https://www.youtube.com/embed/lwJ1i5lCw0M?start=218',
  currentMusicTitle: 'Hatsune Miku',
  handles: [
    {name: 'Arbitrat0r'},
    {name: 'Inf0rmation'},
    {name: 'chatb0t'},
    {name: 'Admin'},
    {name: 'neobii', isDJ: true}
  ],
  i18ns: [
    {name: 'basic_US'},
    {name: 'money_$$'},
    {name: 'appropriate_HI'}
  ]
}
]
