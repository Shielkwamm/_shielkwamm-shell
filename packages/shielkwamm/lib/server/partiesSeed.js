import { getCollection } from 'meteor/vulcan:lib';
import { createMutator } from 'meteor/vulcan:core';

Meteor.startup(() => {
  addParties();
});

export function addParties() {
  const Parties = getCollection('Parties');
  const ColorSchemes = getCollection('ColorSchemes');
  const I18ns = getCollection('I18ns');
  const PartiesI18ns = getCollection('PartiesI18ns');

   if(Parties.find().count() === 0) {
    partiesSeed.forEach(party => {
      party.createdAt = new Date();
      let colorScheme = ColorSchemes.findOne({name: party.colorScheme});
      if(!colorScheme) {
        console.log('###party ' + party.colorScheme + ' not found ')
        return;
      }
      party.colorSchemeId = colorScheme._id;
      let partyId = Parties.insert(party);
      //m2m
      let standardSh = I18ns.findOne({name: 'shielkwamm_SH'});
      PartiesI18ns.insert({i18nId: standardSh._id, partyId: partyId});
      let i18ns = I18ns.find({name: {$in: party.i18ns}});
      i18ns.forEach(i18n => {
        PartiesI18ns.insert({i18nId: i18n._id, partyId: partyId, createdAt: new Date(), fluency: 0})
      });
    });
   }
}

//last major revision was in 2020
//🔑: You better handle this stuff, it's a big source of confusion
//🔑: Any timelines on this?
//frFr: it's good to set the story straight, but there is a ton of story to set straight 
//.Frfr: and a lot has happened in the _sh world since we last visited
//.Frfr: you think a month? goal?
//admin: perhaps I've lost a lot of signals, but we'll have to go through
//admin: one by one and pass it through the authenticion process
//..frFr: so a good authenticiation "lol" is what we need to get this going
//..fRfr: ordering up the "queue" as you will
//admin: yes indeed
//..FRFR: just make sure you don't crash the app and blame it on frfr, you [ frFr ] american.

const partiesSeed = [{
  name: 'NaNers',
  description: 'Absolutely NaNers.',
  isActive: true,
  mood: '++☴☴',
  isEsteemed: true,
  colorScheme: 'n00b',
  i18ns: ['romNom_US', 'admin_ME', 'agile_JP', 'math_LE', 'done_WK']
},
{
  name: 'onBránd',
  description: '',
  isActive: true,
  isEsteemed: true,
  mood: '☴',
  colorScheme: '=== acktweuli ===',
  i18ns: ['done_WK']
},
{
  name: '### Shielkwamm Council ###',
  description: 'Yup',
  isActive: true,
  mood: '|||',
  isEsteemed: true,
  colorScheme: '=== acktweuli ===',
  i18ns: ['romNom_US', 'admin_ME', 'appropriate_HI']
},
{
  name: 'Capitalists',
  description: 'Watching over the galaxy',
  isActive: true,
  mood: '$$',
  colorScheme: '△USA△',
  i18ns: ['money_$$', 'agile_JP', 'appropriate_HI', 'math_LE']
},
{
  name: '△ ☴',
  description: '*SWiM*',
  isActive: true,
  mood: 'SWiMs',
  isEsteemed: true,
  colorScheme: 'n00b',
  i18ns: ['money_$$', 'romNom_US', 'admin_ME', 'agile_JP', 'appropriate_HI', 'math_LE', 'done_WK']
},
{
  name: 'chillionaires',
  description: 'Chillen on stacks',
  isActive: true,
  mood: '$$',
  isEsteemed: true,
  colorScheme: 'ch@nge',
  i18ns: ['money_$$', 'ra_US']
},
{
  name: 'HumansLeague',
  description: 'Don\'t you want me, baby',
  isActive: false,
  mood: '|||',
  isEsteemed: false,
  colorScheme: '=== acktweuli ===',
  i18ns: ['romNom_US']
},
{
  name: 'galacticOversight',
  description: 'Watching over the galaxy',
  isActive: true,
  mood: '__',
  colorScheme: '△USA△',
  i18ns: ['ra_US', 'admin_ME']
},
{
  name: 'clearSails',
  description: '💋 hygine',
  isActive: true,
  mood: '☴',
  colorScheme: 'n00b',
  i18ns: ['romNom_US', 'appropriate_HI']
},
{ 
  name: 'rebelWraith',
  description: '*stares*',
  isActive: !!!false,
  mood: '+☴☱',
  colorScheme: 'n00b',
  i18ns: []
},
{
  name: 'rum',
  description: 'coconut',
  isActive: true,
  mood: '☴',
  colorScheme: '=== acktweuli ===',
  i18ns: ['ra_US']
},
{
  name: 'time',
  description: 'Is of the essense.',
  isActive: true,
  mood: '+**',
  colorScheme: 'n00b',
  i18ns: ['money_$$', 'romNom_US', 'appropriate_HI', 'done_WK']
},
{
  name: 'tales',
  description: 'FROM THE CRYPT',
  isActive: false,
  colorScheme: 'ch@nge',
  i18ns: ['romNom_US']
},
{
  name: 'yasss',
  description: 'the ones with the tall fuzzy hats!',
  isActive: false,
  mood: '☴☱',
  colorScheme: 'kakTUz',
  i18ns: ['romNom_US', 'female_FM']
},
{
  name: 'eagle',
  description: 'Bald face',
  isActive: true,
  isEsteemed: true,
  mood: '+☴ *salutes i18n[en_US]',
  colorScheme: '△USA△',
  i18ns: ['romNom_US', 'eagle_US']
},
{
  name: 'aaaack',
  description: 'aaaaaaaaaaaaaaaahhh',
  mood: '☴',
  isActive: false,
  colorScheme: 'ch@nge',
  i18ns: ['ra_US', 'math_LE', '~o~_MX']
},
{
  name: 'dang!',
  description: 'ummmmm',
  isActive: false,
  mood: '?+',
  colorScheme: 'kakTUz',
  i18ns: ['female_FM']
},
{
  name: 'cheesy',
  description: 'Tooling',
  isActive: true,
  mood: '/o+☴☱++/o',
  colorScheme: '△USA△',
  i18ns: ['romNom_US', 'female_FM', 'agile_JP', 'done_WK']
},
{
  name: 'fluxers',
  description: 'tips hat',
  isActive: false,
  mood: '☴',
  colorScheme: '=== acktweuli ===',
  i18ns: []
},
{
  name: 'saber',
  description: 'Code C0de',
  isActive: true,
  mood: '☴',
  colorScheme: 'n00b',
  i18ns: ['money_$$', 'ra_US']
},
{
  name: 'nasaholes',
  description: 'Nasa\'s Holes',
  isActive: false,
  mood: '☱',
  colorScheme: '=== acktweuli ===',
  i18ns: ['romNom_US', 'admin_ME']
},
{
  name: 'smileyFaceFlag',
  description: 'Thank you',
  isActive: false,
  mood: '☴',
  colorScheme: 'n00b',
  i18ns: ['romNom_US', 'female_FM']
},
{
  name: 'burners',
  description: 'flipman',
  isActive: true,
  mood: '☴☴',
  colorScheme: 'ch@nge',
  i18ns: ['female_FM']
},
{
  name: 'demBoys',
  description: 'dem Boys',
  isActive: true,
  mood: '☴',
  colorScheme: '△USA△',
  i18ns: ['female_FM', 'appropriate_HI']
},
{
  name: 'burps',
  description: '*burp*',
  isActive: false,
  mood: '+/o+_☱',
  colorScheme: 'kakTUz',
  i18ns: ['ra_US', 'female_FM', '~o~_MX']
},
{
  name: 'stringTheory',
  description: '[arg] (tina)',
  isActive: false,
  mood: '~!☱?-',
  colorScheme: 'kakTUz',
  i18ns: ['money_$$', 'female_FM', '~o~_MX']
},
{
  name: 'eE',
  description: 'Ee 24/7',
  isActive: true,
  mood: '-- ',
  colorScheme: 'ch@nge',
  i18ns: ['romNom_US', 'agile_JP', 'appropriate_HI']
},
{
  name: 'dogs',
  description: 'Heirarchy is good',
  isActive: true,
  mood: '☲',
  colorScheme: '△USA△',
  i18ns: ['romNom_US', 'math_LE']
},
{
  name: 'cats',
  description: 'Independant destiny',
  isActive: false,
  mood: '☱',
  colorScheme: 'kakTUz',
  i18ns: ['female_FM', 'appropriate_HI']
},
{
  name: '1Deep',
  description: '⋛ World Bytes ☴☲☱☰',
  isActive: true,
  mood: '++☴',
  colorScheme: 'ch@nge',
  i18ns: ['romNom_US', 'ra_US', 'admin_ME']
},
{
  name: 'Hallmark',
  description: 'My favorite stories about US innovation',
  isActive: true,
  mood: '*☴',
  colorScheme: '=== acktweuli ===',
  i18ns: ['money_$$', 'agile_JP']
},
{
  name: 'DollyCarson',
  description: 'nuttin\' but the bust yolkes',
  isActive: false,
  mood: '+☴',
  colorScheme: '=== acktweuli ===',
  i18ns: []
},
{
  name: 'Jesus',
  description: 'Here fishy fishy',
  isActive: true,
  isFeatured: true,
  mood: '+☲',
  colorScheme: 'ch@nge',
  i18ns: ['appropriate_HI']
},
{
  name: 'yeast',
  description: 'just a spoon full of sugar',
  isActive: true,
  mood: '+☱',
  colorScheme: 'kakTUz',
  i18ns: ['female_FM']
},
{
  name: 'sheShe',
  description: 'What great ears you have!',
  isActive: true,
  mood: '/)☴++',
  colorScheme: 'ch@nge',
  i18ns: ['romNom_US', 'appropriate_HI', 'math_LE']
},
{
  name: 'twizzlers',
  description: '☷☵☰ || +☰☰',
  isActive: true,
  mood: '+',
  colorScheme: 'ch@nge',
  i18ns: []
},
{
  name: 'RecyledMaterial',
  description: 'T-Rexin\'',
  isActive: false,
  mood: '+**',
  colorScheme: 'ch@nge',
  i18ns: []
},
{
  name: '☲shit',
  description: 'Welcome to earth',
  isActive: true,
  mood: '+',
  colorScheme: '=== acktweuli ===',
  i18ns: ['romNom_US', 'math_LE']
},
{
  name: 'RedditSayin',
  description: '≏',
  isActive: true,
  mood: '+≏[-]',
  colorScheme: 'ch@nge',
  i18ns: []
},
{
  name: 'shearWater',
  description: '',
  isActive: true,
  mood: '?_—',
  colorScheme: 'n00b',
  i18ns: ['money_$$']
},
{
  name: 'dracul',
  description: 'My favorite color is red.',
  isActive: true,
  mood: '~',
  colorScheme: 'ch@nge',
  i18ns: ['romNom_US']
},
{
  name: 'mother',
  description: '',
  isActive: false,
  mood: '~',
  colorScheme: 'n00b',
  i18ns: ['romNom_US']
},
{
  name: 'seeReal',
  description: '',
  isActive: true,
  mood: '+☴+☴',
  colorScheme: 'kakTUz',
  i18ns: ['ra_US', '~o~_MX']
},
{
  name: '[3blackAndMilds]',
  description: '',
  isActive: false,
  mood: '',
  colorScheme: 'n00b',
  i18ns: ['~o~_MX']
},
{
  name: 'MathLaws',
  description: 'algebra',
  isActive: true,
  mood: '++',
  colorScheme: '=== acktweuli ===',
  i18ns: ['math_LE']
},
{
  name: 'graveDanger',
  description: 'beauty',
  colorScheme: '=== acktweuli ===',
},
{
  name: 'sha6',
  description: '👀_👀',
  colorScheme: '=== acktweuli ==='
},
{
  name: '@Boys',
  description: 'ballz deep',
  colorScheme: '=== acktweuli ===',
  isActive: true,
  isFeatured: true
},
{
  name: 'frFr',
  description: 'Hamlet Etu Frame Age',
  colorScheme: '=== acktweuli ===',
  isActive: true,
  isFeatured: true
}
]

//frFr: goodness people are getting wobbly already
//Scoup: just a note, can you consult with a teacher...
//.Scoup or something for seating arrangement ideas
//frFr: scope creep, but it's all good, that's a good idea...
//.frFr: and good ideas happen here at _sh_
//..
//.Scoup: So that's a no, you do have a few teachers in there
//admin: yeah, something like composition, ratio, but yeah...
//admin: we'll mint a key for this occasion
//{.frFr} ): later... right?
//admin: yup!
//...
//frFr: k let's see if this doesn't crash everything.