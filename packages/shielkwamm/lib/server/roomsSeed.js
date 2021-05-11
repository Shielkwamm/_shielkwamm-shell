import { createMutator } from 'meteor/vulcan:core';
import { getCollection } from 'meteor/vulcan:lib';

Meteor.startup(() => {
  addRooms();
});

export function addRooms() {
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
      });
     });
    });
   }
}

//Scoup, frFr: def open a channel on this one
//frfr: maybe use your ~[10]syntax?
//admin: ah, yeah playlists
//frFr: yussss, people are just like, why does it only play one song
//admin: _|[++]
//admin: yeah that's a [ redacted ] youtube playlist thing
//frFr: yeah, just so everyone knows, it's a url and title, that's a playlist
//frFr: so you can put a playlist url there, just make sure it's the embed link
//..admin: oh goodness, quality content to do live
//frFr: honestly when you did that 3 thing setup, it was hard to see what you were programming,
//frFr: you need an live editor to switch between the views
//frFr: [++], haha def not now... :scope creep: 
//frFr: ☕ will not do for that, it
//admin: {{ 了 }} @ frFr
//frFr: { 了 }
//admin: how's the rooms here?
//..admin: oh sorry
//admin: 了 @ [@boi] 
// [redacted !🔑]
//admin: salutes @了@boi]
// [redacted !🔑]
//admin: @boiz?
//@boiz: I think you're missing some zones

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
  zork: '{/+||☰?*}',
  bwam: '{ ◯',
  vibe: '↑⬤↑',
  _sh_: '/+△',
  currentMusicUrl: 'https://www.youtube.com/embed/xnNCidccbG8',
  currentMusicTitle: 'Taraf De Haidouks - Turceasca',
  handles: [
    {name: 'Arbitrat0r'},
    {name: 'Inf0rmation'},
    {name: 'chatb0t'},
    {name: 'admin'},
    {name: 'FishyFishy'} 
  ],
  i18ns: [
    {name: 'shielkwamm_SH'},
    {name: 'admin_ME'},
    {name: 'money_$$'},
    {name: 'sign_AL'}
  ]
},
{
  name: '△USA△',
  colorScheme: '△USA△',
  messageDelay: 5,
  slug: '△USA△',
  description: '-USA-',
  isActive: false,
  currentExpPoints: 0,
  totalExpPoints: 50,
  level: 0,
  maxLevel: 5,
  zork: '+☰',
  bwam: '+◯/+',
  vibe: '↑↑⬤↑↑',
  _sh_: '[+]△[+]',
  currentMusicUrl: 'https://www.youtube.com/embed/xDRWdNn_nLk',
  currentMusicTitle: 'Appalachian Spring - Aaron Copland',
  handles: [
    {name: 'admin'},
    {name: 'Slipurrrrs', isDJ: true },
    {name: 'Scoup', isMod: true, isDJ: true},
    {name: '<<☴', isMod: true},
  ],
  i18ns: [
    {name: 'eagle_US'}
  ]
},
{
  name: 'en·vi·ron·ment',
  colorScheme: 'imagination',
  isFeatured: false,
  messageDelay: 5,
  slug: 'en·vi·ron·ment',
  description: 'Spitbawlz',
  isActive: false,
  currentExpPoints: 0,
  totalExpPoints: 50,
  level: 0,
  maxLevel: 5,
  zork: '🤠',
  bwam: '🚜',
  vibe: '🌽',
  _sh_: '🍅',
  currentMusicUrl: 'https://www.youtube.com/embed/vNVguvNE7qc',
  currentMusicTitle: 'Trace Adkins - Honky Tonk Badonkadonk (Official Music Video)',
  handles: [
    {name: 'Arbitrat0r'},
    {name: 'Inf0rmation'},
    {name: 'chatb0t'},
    {name: 'admin'},
    {name: 'neobii', isDJ: true}
  ],
  i18ns: [
    {name: 'shielkwamm_SH'},
    {name: 'money_$$'}
  ]
},
{
  name: 'percent20',
  colorScheme: 'percent20',
  isFeatured: true,
  messageDelay: 5,
  slug: 'percent20',
  description: 'Space',
  isActive: false,
  currentExpPoints: 0,
  totalExpPoints: 50,
  level: 0,
  maxLevel: 5,
  zork: '+☰+',
  bwam: '?+◯☯?+',
  vibe: '{↑↑↑⬤↑↑↑}',
  _sh_: '+△',
  currentMusicUrl: 'https://www.youtube.com/embed/D-IGJrUY-hg',
  currentMusicTitle: 'Disrupt - Blast you to Bits ',
  handles: [
    {name: 'admin', isDJ: true},
    {name: '~[koko]'},
  ],
  i18ns: [
    {name: 'shielkwamm_SH'},
    {name: 'eagle_US'},
    {name: 's_G'}
  ]
},
{
  name: 'llololl',
  colorScheme: 'n00b',
  isFeatured: false,
  messageDelay: 5,
  slug: 'llololl',
  description: 'lolo --> loll',
  isActive: false,
  currentExpPoints: 0,
  totalExpPoints: 50,
  level: 0,
  maxLevel: 5,
  zork: '🗻👌',
  bwam: '👌',
  vibe: '+🦓',
  _sh_: '~[🦓🧂]',
  currentMusicUrl: 'https://www.youtube.com/embed/YaN8u2T01Xw',
  currentMusicTitle: 'Junior 85 - Raymond Scott',
  handles: [
    {name: 'admin'},
    {name: 'neobii', isDJ: true},
  ],
  i18ns: [
    {name: 'ad_AM'}
  ]
},
{
  name: 'eyeballsGallore',
  colorScheme: 'chos',
  isFeatured: false,
  messageDelay: 5,
  slug: 'sg',
  description: 'lolo --> loll',
  isActive: false,
  currentExpPoints: 0,
  totalExpPoints: 50,
  level: 0,
  maxLevel: 5,
  zork: '☺☺☺',
  bwam: '{ ( 🌞  )',
  vibe: '?xo[-]⬤?xo[+]',
  _sh_: '🥒?',
  currentMusicUrl: 'https://www.youtube.com/embed/4vaN01VLYSQ',
  currentMusicTitle: 'Salt-N-Pepa - Shoop',
  handles: [
    {name: 'admin', isDJ: false},
  ],
  i18ns: [
    {name: 'ad_AM'},
    {name: 's_G'},
  ]
}
]

roomsSeed[5].handles[0].isDJ = false;//true
roomsSeed[5].handles[0].isDJ = !!false;//true

//<iframe width="560" height="315" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//[ omitted due to brevity ]
//admin, frFr: we'll plan some github scripties to manage this aspect of the story, or just clean it up when things need to get [ redacted ]
//admin, frFr: but overall the plan should be focusing and managing parts of this that emphasize the application development related cultures
//frFr: like you have to laugh at the meme about "exiting vim", cause that shit is funny
//Scoup: it seems like that's all you had to say @admin
//+◯ 