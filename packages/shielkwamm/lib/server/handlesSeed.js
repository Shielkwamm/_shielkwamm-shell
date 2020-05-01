import Handles from '../modules/handle/collection.js';
import Currencies from '../modules/currency/collection.js';
import HandleCurrencies from '../modules/handleCurrency/collection.js';
import { createMutator } from 'meteor/vulcan:core';
import Parties from '../modules/party/collection.js';
import HandleParties from '../modules/handleParty/collection.js'

Meteor.startup(() => {
  if(Handles.find().count() === 0) {
    handlesSeed.forEach(handle => {
      handle.createdAt = new Date();
      handle.inventory = handle.inventory || [];
      let handleCurrencies = handle.currencies;
      let handleParties = handle.parties;
      handle.currencies = [];
      handle.parties = [];
      let handleId = Handles.insert(handle);

      handleParties && handleParties.forEach(party => {
        let p = Parties.findOne({name: party.name})
        if(!p) {
          console.log("###hp party " + party.name + " not found ", party);
          return;
        }
        HandleParties.insert({
          partyId: p._id,
          handleId: handleId,
          isMod: !!party.isMod,
          createdAt: new Date()
        })
      })


     handleCurrencies && handleCurrencies.forEach(hc => {
       let currency = Currencies.findOne({glyph: hc.glyph});
       if(!currency) {
         console.log("====  Couldn't find currency", hc.glyph)
         return;
       }
       HandleCurrencies.insert({ 
         handleId: handleId,
         currencyId: currency._id,
         amount: hc.amount,
         mood: hc.mood,
         note: hc.note,
         label: hc.label,
         createdAt: new Date() 
        })
     })
   })
  }
});
    

const handlesSeed = [
//  ### Shielkwamm Council ###  
{
  name: "GrandNagus",
  mood: "?-/||",
  isActive: false,
  currencies: [{
    glyph: "🕑",
    amount: 2000000,
    mood: "__[-]🕑[-]<--",
    note: "#1 Once you have their money, you never give it back."
  }],
  parties: [
    {name: "galacticOversight", isMod: true},
    {name: "### Shielkwamm Council ###"}
  ],
},
{
  name: "theQuinceler",
  mood: "[+]◯[-]",
  currentStatus: "~"
},
{
  name: "MonopolyMouse",
  mood: "",
  isActive: false,
  parties: [
    {name: "fluxers"}
  ]
},
{
  name: "Arbitrat0r",
  mood: "||",
  isActive: true,
  currencies: [{
    glyph: "〠",
    amount: 1,
    mood: "〠",
    note: "I have decided that this forheadkiss should be wet and sloppy."
  }],
  parties: [
    {name: "NaNers", isMod: true},
    {name: "### Shielkwamm Council ###", isMod: true}
  ]
},
{
  name: "Inf0rmation",
  mood: "||*",
  isActive: true,
  parties: [
    {name:"NaNers", isMod: true},
    {name: "### Shielkwamm Council ###"}
  ]
},
{
  name: "Admin",
  mood: "+||◯",
  isActive: false,
  currencies: [{
    glyph: "🕑",
    amount: 40,
    mood: "+◯",
    note: "Will 🕑 4 🕑"
  }],
  parties: [
    {name: "1Deep", isMod: true},
    {name: "### Shielkwamm Council ###"}
  ]
},
{
  name: "chatb0t",
  mood: "|*",
  isActive: true,
  parties: [
    {name: "NaNers"},
    {name: "### Shielkwamm Council ###"}
  ],
},

{
  name: "BabeRuth",
  mood: "||**",
  isActive: true,
  parties: [
    {name: "galacticOversight", isMod: true},
    {name: "HumansLeague"}
  ],
},
{
  name: "Eyebrows",
  mood: "++☷☰**",
  isActive: true,
  parties: [
    {name: "galacticOversight", isMod: true},
    {name: 'sheShe'},
    {name: "### Shielkwamm Council ###", isMod: true}
  ],
},
{
  name: "GavelMisses",
  mood: "||||||||||",
  isActive: true,
  parties: [
    {name: "galacticOversight"}, 
    {name: "HumansLeague"}
  ],
},
{
  name: "CocoHeHe",
  mood: "+|*",
  isActive: false,
  parties: [
    {name: "MathLaws", isMod: true},
    {name: "RedditSayin"}, 
    {name: "HumansLeague"}
  ],
},
{
  name: "EasyOff",
  mood: "++",
  isActive: false,
  parties: [
    {name: "chillionaires", isMod: true},
    {name: "HumansLeague"}
  ],
},
{
  name: "[legalese]",
  mood: "",
  isActive: true,
  parties: [
    {name: 'Capitalists'}
  ]
},
{
  name: "MrPeanut",
  mood: "☴",
  isActive: true,
  inventory: ['△'],
  parties: [
    {name: '△ ☴'}, 
    {name: 'eagle', isMod: true},
    {name: 'clearSails'}
  ]
},
{
  name: "FishyFishy",
  mood: "!zZz",
  isActive: true,
  inventory: ['△', '☯'],
  parties: [
    {name: '△ ☴', isMod: true}, 
    {name: 'NaNers', isMod: true}
  ]
},
{
  name: "BrassFace",
  mood: "*puff puff*",
  isActive: false,
  parties: [
    {name: "seeReal", isMod: true}
  ]
},
{
  name: "Bobafeet",
  mood: "☱＋☴",
  isActive: false,
  parties: [
    {name: 'rebelWraith', isMod: true}, 
  ]
},
{
  name: "Warewolf",
  mood: "☷☷☷+",
  isActive: true,
  parties: [
    {name: 'rebelWraith'}, 
  ]
},
{
  name: "Neobii",
  mood: "--",
  isActive: false,
  parties: [
    {name: "1Deep"},
    {name: "rebelWraith"}
  ]
},
{
  name: "Slipurrrrs",
  mood: '-',
  inventory: ['☯'],
  isActive: true,
  parties: [
    {name: "mother"},
    {name: "eagle", isMod: true},
    {name: "clearSails"}
  ]
},
{
  name: "CoolSneakers",
  mood: '↑‾ ',
  isActive: true,
  inventory: ['☯'],
  parties: [
    {name: "mother"},
    {name: "clearSails"}
  ]
},
{
  name: "DragonJamon",
  mood: '**',
  isActive: true,
  parties: [
    {name: "tales", isMod: true},
    {name: "rum"}
  ]
},
{
  name: "JohnnyBravo",
  mood: "+",
  isActive: false,
  parties: [
    {name: "dogs"}
  ]
},
{
  name: "AquaBarbie",
  mood: "+",
  isActive: false,
  inventory: ['☯'],
  parties: [
    {name: "time"}
  ]
},
{
  name: "Querty101",
  mood: "^",
  isActive: false,
  parties: [
    {name: "Hallmark", isMod: true}
  ]
},
{
  name: "MississippiBrazos",
  mood: "+",
  isActive: true,
  inventory: ['☯'],
  parties: [
    {name: "Hallmark", isMod: true}
  ]
},
{
  name: "ItchyMotors",
  mood: "+||",
  isActive: false,
  parties: [
    {name: "fluxers", isMod: true}
  ]
},
{
  name: "Dorthies_dancin_shoes",
  mood: "++",
  isActive: false,
  parties: [
    {name: "fluxers", isMod: true}
  ]
},
{
  name: "FireHydrantLicker_tH",
  mood: "|**,",
  inventory: ['☯'],
  isActive: true,
  currencies: [{
    glyph: "👀",
    amount: 8.0085,
    mood: "  👀   👀  ",
    note: "👀  👀👀  👀"
  }],
  parties: [
    {name: "dang!"}
  ]
},
{
  name: "EarlyBirdie",
  mood: "|**,",
  inventory: ['☯'],
  isActive: true,
  note: "traded [eE for cats]",
  parties: [
    {name: "mother", isMod: true},
    {name: "cats"},
    {name: "clearSails"}
  ]
},
{
  name: "Twoheadedsphaghettisnake666",
  mood: "",
  isActive: true,  
  parties: [
    {name: "Jesus", isMod: true}
  ]
},
{
  name: "Jiminey_crickets",
  mood: "+",
  isActive: false,
  parties: [
    {name: "DollyCarson"}
  ]
},
{
  name: "BurpingCactus",
  mood: "☱*",
  isActive: false,
  parties: [
    {name:  "burps", isMod: true},
    {name: "demBoys", isDJ: true},
    {name: "fluxers"}
  ]
},
{
  name: "Yoshi",
  mood: "+++☷☷☷ ",
  inventory: ['☯'],
  isActive: false,
  parties: [
    {name: "yasss"},
    {name: "eE"},
    {name: "cats"},
    {name: "demBoys"}
  ]
},
{
  name: "MothPuncher",
  mood: "?+ ",
  parties: [
    {name: "eE", isMod: true}
  ]
},
{
  name: "PinkyPromise",
  mood: "+**",
  isActive: true,
  parties: [
    {name: "eE", isMod: false},
    {name: "RedditSayin"},
    {name: "graveDanger"}
  ]
},
{
  name: "Truss BaVeriphi",
  mood: "^+||",
  isActive: true,
  parties: [
    {name: "DollyCarson"}
  ]
},
{
  name: "DrunkFlamingo",
  mood: "+",
  parties: [
    {name: "dang!"}
  ]
},
{
  name: "jetFlow",
  note: "",
  isActive: true,
  parties: [
    {name: "time"},
    {name: "onBránd", isMod: true}
  ]
},
{
  name: "Princess_Peach",
  note: "revoked [eE]"
},
{
  name: "waterLake",
  mood: "[+]*☱",
  isActive: true,
  parties: [
    {name: "aaaack", isMod: true}
  ]
},
{
  name: "chOWN",
  mood: "+☴[+]"
},
{
  name: "Mo3a1Mosau4",
  connectionStatus: "~",
  mood: "_+☴+",
  parties: [
    {name: "RedditSayin", isMod: true}
  ]
},
{
  name: "The_Event_That_Shant_Be_Named",
  mood: "+⋛ ",
  parties: [
    {name: "1Deep", isMod: true},
    {name: "eE"}
  ]
},
{
  name: "MrHanky",
  mood: "*☴☴☴",
  inventory: ['☯'],
  parties: [
    {name: "aaaack", isMod: true},
    {name: "Jesus", isMod: true},
    {name: "☲shit"}
  ]
},
{
  name: "aligatorAllison",
  parties: [
    {name: "burners", isMod: true}
  ]
},
{
  name: "Bulgaria",
  mood: "-|",
  parties: [
    {name: 'stringTheory'}
  ]
},
{
  name: "Jerry",
  mood: "+||",
  inventory: ['☯'],
  parties: [
    {name: 'cheesy'},
    {name: '☲shit', isMod: true},
    {name: 'MathLaws'}
  ]
},
{
  name: "GrinchBitch",
  mood: "+",
  parties: [
    {name: '1Deep'}
  ]
},
{
  name: "Meowth",
  mood: "~",
  parties: [
    {name: "RedditSayin"},
    {name: "mother", isMod: true},
    {name: "MathLaws", isMod: true}
  ]
},
{
  name: "B.J.",
  mood: "?/+ "
},
{
  name: "Togepikachu",
  mood: "?+",
  parties: [
    {name: "cheesy", isConfirmed: false}
  ]
},
{
  name: "pi_Spinner",
  mood: "?+",
  parties: [
    {name: "twizzlers"}
  ]
},
{
  name: "Skeletor",
  mood: "***",
  inventory: ['☯'],
  isActive: true,
  parties: [
    {name: "DollyCarson"}
  ]
},
{
  name: "SpongeDude",
  mood: "",
  isActive: true,
  parties: [
    {name: "eagle"},
    {name: "mother"}
  ]
},
{
  name: "aCuteTriangle",
  mood: "~?-",
  parties: [
    {name: "sheShe"}
  ]
},
{
  name: "marilynMoney",
  parties: [
    {name: "smileyFaceFlag", isMod: true}
  ]
},
{
  name: "weatherWonder",
  parties: [
    {name: "nasaholes", isMod: false}
  ]
},
{
  name: "SandStorm",
  currencies: [{
    glyph: "〠",
    amount: .00000079999999,
    mood: "Ω〠Ω",
    note: "What is this?"
  },
  {
    glyph: "🕑",
    amount: 2,
    mood: "++☴",
    note: "Freebees"
  }],
  parties: [
    {name: "Hallmark"}
  ]
},
{
  name: "Goodwill",
  currencies: [{
    glyph: "🕑",
    amount: 200,
    mood: "+⻌->[☰]",
    note: "[+]-_🏀🏀 Use respectively, please."
  },
  {
    glyph: "👀",
    amount: 16,
    mood: "+",
    node: "from gat0rz"
  }]
},
{
  name: "guy",
  parties: [
    {name: "dracul"}
  ]
},
{
  name: "Givesnolux",
  mood: "+++",
  isHonorary: true,
  parties: [
    {name: 'eE'},
    {name: "yasss"}
  ]
},
{
  name: "NasaShapeUp",
  mood: "",
  isHonorary: true,
  parties: [
    {name: "nasaholes"}
  ]
},
{
  name: "hab1b145_✡",
  mood: "☴++",
  currencies: [{
    glyph: "👀",
    amount: 33,
    mood: "[+]",
    note: "Happy Birthday?"
  },
  ]
},
{
  name: "tigerWoods",
  mood: "",
  parties: [
    {name: 'sheShe'},
  ]
},
{
  name: "Slimer",
  mood: "+",
  isActive: true,
  parties: [
    {name: "mother", isMod: true},
    {name: "saber"}
  ]
},
{
  name: "brassFace",
  mood: "?-?+",
  isActive: true,
  parties: [
    {name: "seeReal", isMod: true}
  ]
},
{
  name: "iMadeEmacs", //*access denied* *access denied* *access denied* *#root: echo "woot" >> .bashrc*"
  mood: "++☴",
  isActive: true,
  parties: [
    {name: "Hallmark"},
    {name: "nasaholes"}
  ]
}]