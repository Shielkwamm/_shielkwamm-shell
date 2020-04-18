import Parties from '../modules/party/collection.js';
import ColorSchemes from '../modules/colorScheme/collection.js';
import { createMutator } from 'meteor/vulcan:core';
import I18ns from '../modules/i18n/collection.js';
import PartyI18ns from '../modules/partyI18n/collection.js'

Meteor.startup(() => {
   if(Parties.find().count() === 0) {
    partiesSeed.forEach(party => {
      party.createdAt = new Date();
      let colorScheme = ColorSchemes.findOne({name: party.colorScheme});
      if(!colorScheme) {
        console.log("###party " + party.colorScheme + " not found ")
        return;
      }
      party.colorSchemeId = colorScheme._id;
      let partyId = Parties.insert(party);
      //m2m
      let basic = I18ns.findOne({name: "basic_US"});
      PartyI18ns.insert({i18nId: basic._id, partyId: partyId})
      let i18ns = I18ns.find({name: {$in: party.i18ns}});
      i18ns.forEach(i18n => {
        PartyI18ns.insert({i18nId: i18n._id, partyId: partyId, createdAt: new Date(), fluency: 0})
      })
    })
   }
});

const partiesSeed = [{
  name: "NaNers",
  description: "Absolutely NaNers.",
  isActive: true,
  mood: "++☴☴",
  isEsteemed: true,
  colorScheme: "n00b",
  i18ns: ['romNom_US', 'admin_ME', 'agile_JP', 'math_LE', 'done_WK']
},
{
  name: "### Shielkwamm Council ###",
  description: "Yup",
  isActive: true,
  mood: "|||",
  isEsteemed: true,
  colorScheme: "=== acktweuli ===",
  i18ns: ['romNom_US', 'admin_ME', 'appropriate_HI']
},
{
  name: "Capitalists",
  description: "Watching over the galaxy",
  isActive: true,
  mood: "$$",
  isEsteemed: true,
  colorScheme: "△USA△",
  i18ns: ['money_$$', 'agile_JP', 'appropriate_HI', 'math_LE']
},
{
  name: "△ ☴",
  description: "*SWiM*",
  isActive: true,
  mood: "SWiMs",
  isEsteemed: true,
  colorScheme: "n00b",
  i18ns: ['money_$$', 'romNom_US', 'admin_ME', 'agile_JP', 'appropriate_HI', 'math_LE', 'done_WK']
},
{
  name: "chillionaires",
  description: "Chillen on stacks",
  isActive: false,
  mood: "$$",
  isEsteemed: true,
  colorScheme: "ch@nge",
  i18ns: ['money_$$', 'ra_US']
},
{
  name: "HumansLeague",
  description: "Don't you want me, baby",
  isActive: false,
  mood: "|||",
  isEsteemed: true,
  colorScheme: "=== acktweuli ===",
  i18ns: ['romNom_US']
},
{
  name: "galacticOversight",
  description: "Watching over the galaxy",
  isActive: true,
  mood: "__",
  colorScheme: "△USA△",
  i18ns: ['ra_US', 'admin_ME']
},
{
  name: "clearSails",
  description: "💋 hygine",
  isActive: false,
  mood: "☴",
  colorScheme: "n00b",
  i18ns: ['romNom_US', 'appropriate_HI']
},
{ 
  name: "rebelWraith",
  description: "*stares*",
  isActive: true,
  mood: "+☴☱",
  colorScheme: "n00b",
  i18ns: []
},
{
  name: "rum",
  description: "coconut",
  isActive: false,
  mood: "☴",
  colorScheme: "=== acktweuli ===",
  i18ns: ['ra_US']
},
{
  name: "time",
  description: "Is of the essense.",
  isActive: true,
  mood: "+**",
  colorScheme: "n00b",
  i18ns: ['money_$$', 'romNom_US', 'appropriate_HI', 'done_WK']
},
{
  name: "tales",
  description: "FROM THE CRYPT",
  isActive: true,
  colorScheme: "ch@nge",
  i18ns: ['romNom_US']
},
{
  name: "yasss",
  description: "the ones with the tall fuzzy hats!",
  isActive: true,
  mood: "☴☱",
  colorScheme: "kakTUz",
  i18ns: ['romNom_US', 'female_FM']
},
{
  name: 'eagle',
  description: "Bald face",
  isActive: true,
  mood: "+☴ *salutes i18n[en_US]",
  colorScheme: "△USA△",
  i18ns: ['romNom_US']
},
{
  name: "aaaack",
  description: "aaaaaaaaaaaaaaaahhh",
  mood: "☴",
  isActive: true,
  colorScheme: "ch@nge",
  i18ns: ['ra_US', 'math_LE', '~o~_MX']
},
{
  name: "dang!",
  description: "ummmmm",
  isActive: false,
  mood: "?+",
  colorScheme: "kakTUz",
  i18ns: ['female_FM']
},
{
  name: "cheesy",
  description: "Tooling",
  isActive: true,
  mood: "/o+☴☱++/o",
  colorScheme: "△USA△",
  i18ns: ['romNom_US', 'female_FM', 'agile_JP', 'done_WK']
},
{
  name: "fluxers",
  description: "tips hat",
  isActive: false,
  mood: "☴",
  colorScheme: "=== acktweuli ===",
  i18ns: []
},
{
  name: "saber",
  description: "Code C0de",
  isActive: true,
  mood: "☴",
  colorScheme: "n00b",
  i18ns: ['money_$$', 'ra_US']
},
{
  name: "nasaholes",
  description: "Nasa's Holes",
  isActive: false,
  mood: "☱",
  colorScheme: "=== acktweuli ===",
  i18ns: ['romNom_US', 'admin_ME']
},
{
  name: "smileyFaceFlag",
  description: "Thank you",
  isActive: false,
  mood: "☴",
  colorScheme: "n00b",
  i18ns: ['romNom_US', 'female_FM']
},
{
  name: "burners",
  description: "flipman",
  isActive: false,
  mood: "☴",
  colorScheme: "ch@nge",
  i18ns: ['female_FM']
},
{
  name: "demBoys",
  description: "dem Boys",
  isActive: true,
  mood: "☴",
  colorScheme: "△USA△",
  i18ns: ['female_FM', 'appropriate_HI']
},
{
  name: "burps",
  description: "*burp*",
  isActive: true,
  mood: "+/o+_☱",
  colorScheme: "kakTUz",
  i18ns: ['ra_US', 'female_FM', '~o~_MX']
},
{
  name: "stringTheory",
  description: "[arg] (tina)",
  isActive: false,
  mood: "~!☱?-",
  colorScheme: "kakTUz",
  i18ns: ['money_$$', 'female_FM', '~o~_MX']
},
{
  name: "eE",
  description: "Ee 24/7",
  isActive: true,
  mood: "-- ",
  colorScheme: "ch@nge",
  i18ns: ['romNom_US', 'agile_JP', 'appropriate_HI']
},
{
  name: "dogs",
  description: "Heirarchy is good",
  isActive: true,
  mood: "☲",
  colorScheme: "△USA△",
  i18ns: ['romNom_US', 'math_LE']
},
{
  name: "cats",
  description: "Independant destiny",
  isActive: false,
  mood: "☱",
  colorScheme: "kakTUz",
  i18ns: ['female_FM', 'appropriate_HI']
},
{
  name: "1Deep",
  description: "⋛ We are the world ☴☲☱☰",
  isActive: true,
  mood: "++☴",
  colorScheme: "ch@nge",
  i18ns: ['romNom_US', 'ra_US', 'admin_ME']
},
{
  name: "Hallmark",
  description: "my favorite stories about US innovation",
  isActive: true,
  mood: "*☴",
  colorScheme: "=== acktweuli ===",
  i18ns: ['money_$$', 'agile_JP']
},
{
  name: "DollyCarson",
  description: "nuttin' but the bust yolkes",
  isActive: false,
  mood: "+☴",
  colorScheme: "=== acktweuli ===",
  i18ns: []
},
{
  name: "Jesus",
  description: "suseJ",
  isActive: false,
  mood: "+☲",
  colorScheme: "ch@nge",
  i18ns: ['appropriate_HI']
},
{
  name: "yeast",
  description: "just a spoon full of sugar",
  isActive: true,
  mood: "+☱",
  colorScheme: "kakTUz",
  i18ns: ['female_FM']
},
{
  name: "sheShe",
  description: "What great ears you have!",
  isActive: true,
  mood: "/)☴++",
  colorScheme: "ch@nge",
  i18ns: ['romNom_US', 'appropriate_HI', 'math_LE']
},
{
  name: "twizzlers",
  description: "☷☵☰ || +☰☰",
  isActive: true,
  mood: "+",
  colorScheme: "ch@nge",
  i18ns: []
},
{
  name: "RecyledMaterial",
  description: "T-Rexin'",
  isActive: false,
  mood: "+**",
  colorScheme: "ch@nge",
  i18ns: []
},
{
  name: "☲shit",
  description: "Welcome to earth",
  isActive: true,
  mood: "+",
  colorScheme: "=== acktweuli ===",
  i18ns: ['romNom_US', 'math_LE']
},
{
  name: "RedditSayin",
  description: "≏",
  isActive: true,
  mood: "+≏[-]",
  colorScheme: "ch@nge",
  i18ns: []
},
{
  name: "shearWater",
  description: "",
  isActive: true,
  mood: "?_—",
  colorScheme: "n00b",
  i18ns: ['money_$$']
},
{
  name: "dracul",
  description: "My favorite color is red.",
  isActive: true,
  mood: "~",
  colorScheme: "ch@nge",
  i18ns: ['romNom_US']
},
{
  name: "mother",
  description: "",
  isActive: false,
  mood: "~",
  colorScheme: "n00b",
  i18ns: ['romNom_US']
},
{
  name: "seeReal",
  description: "",
  isActive: true,
  mood: "+☴+☴",
  colorScheme: "kakTUz",
  i18ns: ['ra_US', '~o~_MX']
},
{
  name: "[3blackAndMilds]",
  description: "",
  isActive: false,
  mood: "",
  colorScheme: "n00b",
  i18ns: ['~o~_MX']
},
{
  name: "MathLaws",
  description: "algebra",
  isActive: true,
  mood: "++",
  colorScheme: "=== acktweuli ===",
  i18ns: ['math_LE']
}
]