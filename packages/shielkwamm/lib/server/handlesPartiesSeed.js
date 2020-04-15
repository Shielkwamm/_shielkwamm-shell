import Handles from '../modules/handle/collection.js';
import { createMutator } from 'meteor/vulcan:core';
import Parties from '../modules/party/collection.js';
import HandleParties from '../modules/handleParty/collection.js'

Meteor.startup(() => {
  if(HandleParties.find().count() === 0) {
   handlesPartiesSeed.forEach(hp => {
     let handle = Handles.findOne({name: hp.handleName});
     if(!handle) {
       console.log("### " + hp.handleName + " not found ")
       return;
     }
     hp.parties.forEach(party => {
      let p = Parties.findOne({name: party.name})
      if(!p) {
        console.log("### " + party.name + " not found ");
      }
      HandleParties.insert({
        partyId: p._id,
        handleId: handle._id,
        isMod: party.isMod,
        createdAt: new Date()
      })
     })
   })
  }
});


const handlesPartiesSeed = [
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
    {name: "1deep", isMod: true},
    {name: "### Shielkwamm Council ###"}
  ]
},
{
  handleName: "Chatb0t",
  parties: [
    {name: "NaNers"},
    {name: "### Shielkwamm Council ###"}
  ],
},
{
  handleName: "Eyebrows",
  parties: [
    {name: "galacticOversight", isMod: true},
    {name: 'sheShes'},
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
    {name: 'capitalists'}
  ]
},
{
  handleName: "MrPeanut",
  parties: [
    {name: '△ ☴'}, 
    {name: 'eagle', isMod: true},
    {name: 'clearSails'},
    {name: '1deep'}
  ]
},
{
  handleName: "FishyFishy",
  parties: [
    {name: '△ ☴', isMod: true}, 
    {name: 'NaNers', isMod: true}
  ]
}
]
 
 /*
### Active Logins ###
51 out of 66 active logins
☱＋☴ Bobafeet [rebelWraith]
☷☷☷+ Warewolf [rebelWraith]
zZz --Neobii [1deep, rebelWraith]
- Slipurrrrs_☯ [mother, eagle, clearasil]
CoolSneakers  [mother, clearasil]
** DragonJamon [tales, rum]
JohnnyBravo [dogs]
+ AquaBarbie_☯ [time]
?+_m MonopolyMouse [fluxers]
^ Querty101 [hallmark]
MississippiBrazos_☯ [hallmark]
+|| ItchyMotors [fluxers]
++ Dorthies_dancin_shoes [fluxers]
|** FireHydrantLicker_tH_☯ [dang!] -- warning: using [eE] might result in undesired consequences
EarlyBirdie [mother, cats, clearasil] --- traded [eE for cats]
Twoheadedsphaghettisnake666 [Jesus]
+ Jiminey_crickets_☯ [DollyCarson] (hand)
☱* BurpingCactus [burps, demBoys, fluxers]
+++☷☷☷ Yoshi_☯ [yassss, eE, cats, demBoys]
?+ MothPuncher_☯ [eE]
+** Pinkypromise_☯☯ [eE, RedditSayin]
^+|| Truss BaVeriphi [DollyCarson]
+ DrunkFlamingo [dang!]
CheekStream [time, yass] -- revoked [dang!]
Princess Peach_xx [cats] -- revoked [eE]
+☱ waterLake__☯ [aaaack]
--☴☴ chOWN
zZz +⋛ The_Event_That_Shant_Be_Named [1deep, eE]
*☴☴☴ MrHanky_☯ [aaaack, Jesus, ☲shit]
aligatorAllison [burners]
-| Bulgaria [stringTheory]
+|| Jerry_☯ [cheesy, ☲shit, MathLaws]
+ GrinchBitch [1deep]
~ Meowth [RedditSayin, mother, MathLaws]
?/+ B.J.
?+ Togepikachu [~cheesy]
?+ Pi Spinner [twizlers]
*** Skeletor_☯ [DollyCarson]
SpongeDude [eagle, 1deep, mother]
~?- aCuteTriangle [sheShes]
marilynMoney [smileyFaceFlag]
weatherWonder [environment]
SandStorm
snickerd00 [dracul]
man [dracul]
Honorary Logins
+++Givesnolux [eE, yasss]
NasaShapeUp [nassholes]
+Slimer: [mother, saber]
?-brassFace?+: [seeReal]*/