import Parties from '../modules/party/collection.js';
import { createMutator } from 'meteor/vulcan:core';

Meteor.startup(() => {
   if(Parties.find().count() === 0) {
    partiesSeed.forEach(party => {
      Parties.insert({
        name: party.name,
        description: party.description,
        isActive: party.isActive,
        mood: party.mood,
        isEsteemed: party.isEsteemed,
        createdAt: new Date()
      })  
    })
   }
});

const partiesSeed = [{
  name: "NaNers",
  description: "Absolutely NaNers.",
  isActive: true,
  mood: "++☴☴",
  isEsteemed: true
},
{
  name: "### Shielkwamm Council ###",
  description: "Yup",
  isActive: true,
  mood: "|||",
  isEsteemed: true
},
{
  name: "Capitalists",
  description: "Watching over the galaxy",
  isActive: true,
  mood: "$$",
  isEsteemed: true
},
{
  name: "△ ☴",
  description: "*SWiM*",
  isActive: true,
  mood: "SWiMs",
  isEsteemed: true
},
{
  name: "HumansLeague",
  description: "Don't you want me, baby",
  isActive: false,
  mood: "|||",
  isEsteemed: true
},
{
  name: "galacticOversight",
  description: "Watching over the galaxy",
  isActive: true,
  mood: "__"
},
{
  name: "clearSails",
  description: "💋 hygine",
  isActive: false,
  mood: "☴"
},
{ 
  name: "rebelWraith",
  description: "*stares*",
  isActive: true,
  mood: "+☴☱"
},
{
  name: "Time",
  description: "Is of the essense.",
  isActive: true,
  mood: "+**"
},
{
  name: "Yasss",
  description: "the ones with the tall fuzzy hats!",
  isActive: "true",
  mood: "☴☱"
},
{
  name: 'eagle',
  description: "Bald face",
  isActive: true,
  mood: "+☴ *salutes i18n[en_US]"
},
{
  name: "aaack",
  description: "aaaaaaaaaaaaaaaahhh",
  mood: "☴",
  isActive: "true"
},
{
  name: "Dang!",
  description: "ummmmm",
  isActive: false,
  mood: "?+"
},
{
  name: "Fluxers",
  description: "tips hat",
  isActive: false,
  mood: "☴"
},
{
  name: "stringTheory",
  description: "[arg] (tina)",
  isActive: false,
  mood: "~!☱?-"
},
{
  name: "eE",
  description: "Ee 24/7",
  isActive: true,
  mood: "-- "
},
{
  name: "Dogs",
  description: "Heirarchy is good",
  isActive: true,
  mood: "☲"
},
{
  name: "Cats",
  description: "Independant destiny",
  isActive: false,
  mood: "☱"
},
{
  name: "1Deep",
  description: "⋛ We are the world ☴☲☱☰",
  isActive: true,
  mood: "++☴"
},
{
  name: "Hallmark",
  description: "my favorite stories about US innovation",
  isActive: true,
  mood: "*☴"
},
{
  name: "DollyCarson",
  description: "nuttin' but the bust yolkes",
  isActive: false,
  mood: "+☴"
},
{
  name: "Jesus",
  description: "suseJ",
  isActive: false,
  mood: "+☲"
},
{
  name: "yeast",
  description: "just a spoon full of sugar",
  isActive: true,
  mood: "+☱"
},
{
  name: "sheShe",
  description: "What great ears you have!",
  isActive: true,
  mood: "/)☴++"
},
{
  name: "Twizzlers",
  description: "☷☵☰ || +☰☰",
  isActive: true,
  mood: "+"
},
{
  name: "RecyledMaterial",
  description: "T-Rexin'",
  isActive: false,
  mood: "+**"
},
{
  name: "☲shit",
  description: "Welcome to earth",
  isActive: true,
  mood: "+"
},
{
  name: "RedditSayin",
  description: "≏",
  isActive: true,
  mood: "+≏[-]",
},
{
  name: "shearWater",
  description: "",
  isActive: true,
  mood: "?_—"
},
{
  name: "dracul",
  description: "My favorite color is red.",
  isActive: true,
  mood: "~"
},
{
  name: "seriousMother",
  description: "",
  isActive: false,
  mood: "~"
},
{
  name: "seeReal",
  description: "",
  isActive: true,
  mood: "+☴+☴"
},
{
  name: "[3blackAndMilds]",
  description: "",
  isActive: false,
  mood: ""
}
]