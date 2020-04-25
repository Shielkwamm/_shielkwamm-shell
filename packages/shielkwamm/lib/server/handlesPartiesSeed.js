import Handles from '../modules/handle/collection.js';
import { createMutator } from 'meteor/vulcan:core';
import Parties from '../modules/party/collection.js';
import HandleParties from '../modules/handleParty/collection.js'

Meteor.startup(() => {
  if(HandleParties.find().count() === 0) {
    handlesPartiesSeed.forEach(hp => {
    let handle = Handles.findOne({name: hp.handleName});
    if(!handle) {
      console.log("###hp handle " +  hp.handleName + " not found ", hp)
      return;
    }
    hp.parties.forEach(party => {
      let p = Parties.findOne({name: party.name})
      if(!p) {
        console.log("###hp party " + party.name + " not found ", party);
        return;
      }
      HandleParties.insert({
        partyId: p._id,
        handleId: handle._id,
        isMod: !!party.isMod,
        createdAt: new Date()
      })
     })
   })
  }
});


const handlesPartiesSeed = [
{
  handleName: "Mo3a1Mosau4",
  parties: [
    {name: "RedditSayin", isMod: true}
  ]
},
{
  handleName: "GrandNagus",
  parties: [
    {name: "galacticOversight", isMod: true},
    {name: "### Shielkwamm Council ###"}
  ],
},
{
  handleName: "Arbitrat0r",
  parties: [
    {name: "NaNers", isMod: true},
    {name: "### Shielkwamm Council ###", isMod: true}
  ]
},
{
  handleName: "Inf0rmation",
  parties: [
    {name:"NaNers", isMod: true},
    {name: "### Shielkwamm Council ###"}
  ]
},
{
  handleName: "Admin",
  parties: [
    {name: "1Deep", isMod: true},
    {name: "### Shielkwamm Council ###"}
  ]
},
{
  handleName: "chatb0t",
  parties: [
    {name: "NaNers"},
    {name: "### Shielkwamm Council ###"}
  ],
},
{
  handleName: "Eyebrows",
  parties: [
    {name: "galacticOversight", isMod: true},
    {name: 'sheShe'},
    {name: "### Shielkwamm Council ###", isMod: true}
  ],
},
{
  handleName: "GavelMisses",
  parties: [
    {name: "galacticOversight"}, 
    {name: "HumansLeague"}
  ],
},
{
  handleName: "BabeRuth",
  parties: [
    {name: "galacticOversight", isMod: true},
    {name: "HumansLeague"}
  ],
},
{
  handleName: "CocoHeHe",
  parties: [
    {name: "MathLaws", isMod: true},
    {name: "RedditSayin"}, 
    {name: "HumansLeague"}
  ],
},
{
  handleName: "EasyOff",
  parties: [
    {name: "chillionaires", isMod: true},
    {name: "HumansLeague"}
  ],
},
{
  handleName: '[legalese]',
  parties: [
    {name: 'Capitalists'}
  ]
},
{
  handleName: "MrPeanut",
  parties: [
    {name: '△ ☴'}, 
    {name: 'eagle', isMod: true},
    {name: 'clearSails'}
  ]
},
{
  handleName: "FishyFishy",
  parties: [
    {name: '△ ☴', isMod: true}, 
    {name: 'NaNers', isMod: true}
  ]
},
{
  handleName: "brassFace",
  parties: [
    {name: "seeReal", isMod: true}
  ]
},
{
  handleName: "Bobafeet",
  parties: [
    {name: 'rebelWraith', isMod: true}, 
  ]
},
{
  handleName: "Warewolf",
  parties: [
    {name: 'rebelWraith'}, 
  ]
},
{
  handleName: "Neobii",
  parties: [
    {name: "1Deep"},
    {name: "rebelWraith"}
  ]
},
{
  handleName: "Slipurrrrs",
  parties: [
    {name: "mother"},
    {name: "eagle", isMod: true},
    {name: "clearSails"}
  ]
},
{
  handleName: "CoolSneakers",
  parties: [
    {name: "mother"},
    {name: "clearSails"}
  ]
},
{
  handleName: "DragonJamon",
  parties: [
    {name: "tales", isMod: true},
    {name: "rum"}
  ]
},
{
  handleName: "JohnnyBravo",
  parties: [
    {name: "dogs"}
  ]
},{
  handleName: "AquaBarbie",
  parties: [
    {name: "time"}
  ]
}, {
  handleName: "MonopolyMouse",
  parties: [
    {name: "fluxers"}
  ]
},
{
  handleName: "Querty101",
  parties: [
    {name: "Hallmark", isMod: true}
  ]
},
{
  handleName: "MississippiBrazos",
  parties: [
    {name: "Hallmark", isMod: true}
  ]
},
{
  handleName: "ItchyMotors",
  parties: [
    {name: "fluxers", isMod: true}
  ]
},
{
  handleName: "Dorthies_dancin_shoes",
  parties: [
    {name: "fluxers", isMod: true}
  ]
},
{
  handleName: "FireHydrantLicker_tH",
  parties: [
    {name: "dang!"}
  ]
},
{
  handleName: "EarlyBirdie",
  parties: [
    {name: "mother", isMod: true},
    {name: "cats"},
    {name: "clearSails"}
  ]
},
{
  handleName: "Twoheadedsphaghettisnake666",
  parties: [
    {name: "Jesus", isMod: true}
  ]
},
{
  handleName: "Jiminey_crickets",
  parties: [
    {name: "DollyCarson"}
  ]
},
{
  handleName: "BurpingCactus",
  parties: [
    {name:  "burps", isMod: true},
    {name: "demBoys", isDJ: true},
    {name: "fluxers"}
  ]
},
{
  handleName: "Yoshi",
  parties: [
    {name: "yasss"},
    {name: "eE"},
    {name: "cats"},
    {name: "demBoys"}
  ]
},
{
  handleName: "guy",
  parties: [
    {name: "dracul"}
  ]
},
{
  handleName: "MothPuncher",
  parties: [
    {name: "eE", isMod: true}
  ]
},
{
  handleName: "PinkyPromise",
  parties: [
    {name: "eE", isMod: false},
    {name: "RedditSayin"},
    {name: "graveDanger"}
  ]
},
{
  handleName: "Truss BaVeriphi",
  parties: [
    {name: "DollyCarson"}
  ]
},
{
  handleName: "DrunkFlamingo",
  parties: [
    {name: "dang!"}
  ]
},
{
  handleName: "CheekStream",
  parties: [
    {name: "time"},
    {name: "yasss"}
  ]
},
{
  handleName: "waterLake",
  parties: [
    {name: "aaaack", isMod: true}
  ]
},
{
  handleName: "The_Event_That_Shant_Be_Named",
  parties: [
    {name: "1Deep", isMod: true},
    {name: "eE"}
  ]
},
{
  handleName: "MrHanky",
  parties: [
    {name: "aaaack", isMod: true},
    {name: "Jesus", isMod: true},
    {name: "☲shit"}
  ]
},
{
  handleName: "SandStorm",
  parties: [
    {name: "DollyCarson"}
  ]
},
{
  handleName: "SpongeDude",
  parties: [
    {name: "eagle"},
    {name: "mother"}
  ]
},
{
  handleName: "Skeletor",
  parties: [
    {name: "DollyCarson"}
  ]
},
{
  handleName: "Meowth",
  parties: [
    {name: "RedditSayin"},
    {name: "mother", isMod: true},
    {name: "MathLaws", isMod: true}
  ]
},
{
  handleName: "Jerry",
  parties: [
    {name: 'cheesy'},
    {name: '☲shit', isMod: true},
    {name: 'MathLaws'}
  ]
},
{
  handleName: "Givesnolux",
  parties: [
    {name: 'eE'},
    {name: "yasss"}
  ]
},
{
  handleName: "Togepikachu",
  parties: [
    {name: "cheesy", isConfirmed: false}
  ]
},
{
  handleName: "aligatorAllison",
  parties: [
    {name: "burners", isMod: true}
  ]
},
{
  handleName: "Bulgaria",
  parties: [
    {name: 'stringTheory'}
  ]
},
{
  handleName: 'GrinchBitch',
  parties: [
    {name: '1Deep'}
  ]
},
{
  handleName: 'pi_Spinner',
  parties: [
    {name: "twizzlers"}
  ]
},
{
  handleName: "aCuteTriangle",
  parties: [
    {name: "sheShe"}
  ]
},
{
  handleName: "marilynMoney",
  parties: [
    {name: "smileyFaceFlag", isMod: true}
  ]
},
{
  handleName: "NasaShapeUp",
  parties: [
    {name: "nasaholes"}
  ]
},
{
  handleName: "Slimer",
  parties: [
    {name: "mother", isMod: true},
    {name: "saber"}
  ]
},
{
  handleName: "BrassFace",
  parties: [
    {name: "seeReal", isMod: true}
  ]
}
]