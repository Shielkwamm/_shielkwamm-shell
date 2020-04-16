import Parties from '../modules/party/collection.js';
import { createMutator } from 'meteor/vulcan:core';

Meteor.startup(() => {
   if(Parties.find().count() === 0) {
    partiesSeed.forEach(party => {
      party.createdAt = new Date();
      Parties.insert(party);
        /*{
        name: party.name,
        description: party.description,
        isActive: party.isActive,
        mood: party.mood,
        isEsteemed: party.isEsteemed,
        createdAt: new Date()
      })*/  
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
  isEsteemed: true,
  colorScheme: "n00b"
},
{
  name: "chillionaires",
  description: "Chillen on stacks",
  isActive: false,
  mood: "$$",
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
  mood: "☴"
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
},
{
  name: "yasss",
  description: "the ones with the tall fuzzy hats!",
  isActive: true,
  mood: "☴☱"
},
{
  name: 'eagle',
  description: "Bald face",
  isActive: true,
  mood: "+☴ *salutes i18n[en_US]"
},
{
  name: "aaaack",
  description: "aaaaaaaaaaaaaaaahhh",
  mood: "☴",
  isActive: true
},
{
  name: "dang!",
  description: "ummmmm",
  isActive: false,
  mood: "?+"
},
{
  name: "cheesy",
  description: "Tooling",
  isActive: true,
  mood: "/o+☴☱++/o"
},
{
  name: "fluxers",
  description: "tips hat",
  isActive: false,
  mood: "☴"
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
  mood: "☱"
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
  mood: "☴"
},
{
  name: "demBoys",
  description: "dem Boys",
  isActive: true,
  mood: "☴"
},
{
  name: "burps",
  description: "*burp*",
  isActive: true,
  mood: "+/o+_☱"
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
  name: "dogs",
  description: "Heirarchy is good",
  isActive: true,
  mood: "☲"
},
{
  name: "cats",
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
  name: "twizzlers",
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
  mood: "?_—",
  colorScheme: "n00b"
},
{
  name: "dracul",
  description: "My favorite color is red.",
  isActive: true,
  mood: "~"
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
  mood: "+☴+☴"
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
  mood: "++"
}
]