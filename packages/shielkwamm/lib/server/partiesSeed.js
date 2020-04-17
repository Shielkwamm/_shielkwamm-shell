import Parties from '../modules/party/collection.js';
import ColorSchemes from '../modules/colorScheme/collection.js';
import { createMutator } from 'meteor/vulcan:core';

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
      Parties.insert(party);
    })
   }
});

const partiesSeed = [{
  name: "NaNers",
  description: "Absolutely NaNers.",
  isActive: true,
  mood: "++☴☴",
  isEsteemed: true,
  colorScheme: "n00b"
},
{
  name: "### Shielkwamm Council ###",
  description: "Yup",
  isActive: true,
  mood: "|||",
  isEsteemed: true,
  colorScheme: "=== acktweuli ==="
},
{
  name: "Capitalists",
  description: "Watching over the galaxy",
  isActive: true,
  mood: "$$",
  isEsteemed: true,
  colorScheme: "△USA△"
},
{
  name: "△ ☴",
  description: "*SWiM*",
  isActive: true,
  mood: "SWiMs",
  isEsteemed: true,
  colorScheme: "n00b"
},
{
  name: "chillionaires",
  description: "Chillen on stacks",
  isActive: false,
  mood: "$$",
  isEsteemed: true,
  colorScheme: "ch@nge"
},
{
  name: "HumansLeague",
  description: "Don't you want me, baby",
  isActive: false,
  mood: "|||",
  isEsteemed: true,
  colorScheme: "=== acktweuli ==="
},
{
  name: "galacticOversight",
  description: "Watching over the galaxy",
  isActive: true,
  mood: "__",
  colorScheme: "△USA△"
},
{
  name: "clearSails",
  description: "💋 hygine",
  isActive: false,
  mood: "☴",
  colorScheme: "n00b"
},
{ 
  name: "rebelWraith",
  description: "*stares*",
  isActive: true,
  mood: "+☴☱",
  colorScheme: "n00b"
},
{
  name: "rum",
  description: "coconut",
  isActive: false,
  mood: "☴",
  colorScheme: "=== acktweuli ==="
},
{
  name: "time",
  description: "Is of the essense.",
  isActive: true,
  mood: "+**",
  colorScheme: "n00b"
},
{
  name: "tales",
  description: "FROM THE CRYPT",
  isActive: true,
  colorScheme: "ch@nge"
},
{
  name: "yasss",
  description: "the ones with the tall fuzzy hats!",
  isActive: true,
  mood: "☴☱",
  colorScheme: "kakTUz"
},
{
  name: 'eagle',
  description: "Bald face",
  isActive: true,
  mood: "+☴ *salutes i18n[en_US]",
  colorScheme: "△USA△"
},
{
  name: "aaaack",
  description: "aaaaaaaaaaaaaaaahhh",
  mood: "☴",
  isActive: true,
  colorScheme: "ch@nge"
},
{
  name: "dang!",
  description: "ummmmm",
  isActive: false,
  mood: "?+",
  colorScheme: "kakTUz"
},
{
  name: "cheesy",
  description: "Tooling",
  isActive: true,
  mood: "/o+☴☱++/o",
  colorScheme: "△USA△"
},
{
  name: "fluxers",
  description: "tips hat",
  isActive: false,
  mood: "☴",
  colorScheme: "=== acktweuli ==="
},
{
  name: "saber",
  description: "Code C0de",
  isActive: true,
  mood: "☴",
  colorScheme: "n00b"
},
{
  name: "nasaholes",
  description: "Nasa's Holes",
  isActive: false,
  mood: "☱",
  colorScheme: "=== acktweuli ==="
},
{
  name: "smileyFaceFlag",
  description: "Thank you",
  isActive: false,
  mood: "☴",
  colorScheme: "n00b"
},
{
  name: "burners",
  description: "flipman",
  isActive: false,
  mood: "☴",
  colorScheme: "ch@nge"
},
{
  name: "demBoys",
  description: "dem Boys",
  isActive: true,
  mood: "☴",
  colorScheme: "△USA△"
},
{
  name: "burps",
  description: "*burp*",
  isActive: true,
  mood: "+/o+_☱",
  colorScheme: "kakTUz"
},
{
  name: "stringTheory",
  description: "[arg] (tina)",
  isActive: false,
  mood: "~!☱?-",
  colorScheme: "kakTUz"
},
{
  name: "eE",
  description: "Ee 24/7",
  isActive: true,
  mood: "-- ",
  colorScheme: "ch@nge"
},
{
  name: "dogs",
  description: "Heirarchy is good",
  isActive: true,
  mood: "☲",
  colorScheme: "△USA△"
},
{
  name: "cats",
  description: "Independant destiny",
  isActive: false,
  mood: "☱",
  colorScheme: "kakTUz"
},
{
  name: "1Deep",
  description: "⋛ We are the world ☴☲☱☰",
  isActive: true,
  mood: "++☴",
  colorScheme: "ch@nge"
},
{
  name: "Hallmark",
  description: "my favorite stories about US innovation",
  isActive: true,
  mood: "*☴",
  colorScheme: "=== acktweuli ==="
},
{
  name: "DollyCarson",
  description: "nuttin' but the bust yolkes",
  isActive: false,
  mood: "+☴",
  colorScheme: "=== acktweuli ==="
},
{
  name: "Jesus",
  description: "suseJ",
  isActive: false,
  mood: "+☲",
  colorScheme: "ch@nge"
},
{
  name: "yeast",
  description: "just a spoon full of sugar",
  isActive: true,
  mood: "+☱",
  colorScheme: "kakTUz"
},
{
  name: "sheShe",
  description: "What great ears you have!",
  isActive: true,
  mood: "/)☴++",
  colorScheme: "ch@nge"
},
{
  name: "twizzlers",
  description: "☷☵☰ || +☰☰",
  isActive: true,
  mood: "+",
  colorScheme: "ch@nge"
},
{
  name: "RecyledMaterial",
  description: "T-Rexin'",
  isActive: false,
  mood: "+**",
  colorScheme: "ch@nge"
},
{
  name: "☲shit",
  description: "Welcome to earth",
  isActive: true,
  mood: "+",
  colorScheme: "=== acktweuli ==="
},
{
  name: "RedditSayin",
  description: "≏",
  isActive: true,
  mood: "+≏[-]",
  colorScheme: "ch@nge"
  
},
{
  name: "shearWater",
  description: "",
  isActive: true,
  mood: "?_—",
  colorScheme: "n00b"
},
{
  name: "dracul",
  description: "My favorite color is red.",
  isActive: true,
  mood: "~",
  colorScheme: "ch@nge"
},
{
  name: "mother",
  description: "",
  isActive: false,
  mood: "~",
  colorScheme: "n00b"
},
{
  name: "seeReal",
  description: "",
  isActive: true,
  mood: "+☴+☴",
  colorScheme: "kakTUz"
},
{
  name: "[3blackAndMilds]",
  description: "",
  isActive: false,
  mood: "",
  colorScheme: "n00b"
},
{
  name: "MathLaws",
  description: "algebra",
  isActive: true,
  mood: "++",
  colorScheme: "=== acktweuli ==="
}
]