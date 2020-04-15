import Handles from '../modules/handle/collection.js';
import { createMutator } from 'meteor/vulcan:core';

Meteor.startup(() => {
  if(Handles.find().count() === 0) {
   handlesSeed.forEach(handle => {
     handle.createdAt = new Date();
     handle.inventory = handle.inventory || [];
     Handles.insert(handle);
   })
  }
});


const handlesSeed = [
//  ### Shielkwamm Council ###  
{
  name: "GrandNagus",
  mood: "?-/||",
  isActive: false
},
{
  name: "MonopolyMouse",
  mood: "",
  isActive: false
},
{
  name: "Arbitrat0r",
  mood: "||",
  isActive: true
},
{
  name: "Inf0rmation",
  mood: "||*",
  isActive: true
},
{
  name: "Admin",
  mood: "+||◯",
  isActive: false
},
{
  name: "chatb0t",
  mood: "|*",
  isActive: true
},
{
  name: "BabeRuth",
  mood: "||**",
  isActive: true
},
{
  name: "Eyebrows",
  mood: "++☷☰**",
  isActive: true
},
{
  name: "GavelMisses",
  mood: "||||||||||",
  isActive: true
},
{
  name: "CocoHeHe",
  mood: "+|*",
  isActive: false
},
{
  name: "EasyOff",
  mood: "++",
  isActive: false,
},
{
  name: "[legalese]",
  mood: "",
  isActive: true
},
{
  name: "MrPeanut",
  mood: "☴",
  isActive: true,
  inventory: ['△']
},
{
  name: "FishyFishy",
  mood: "!zZz",
  isActive: true,
  inventory: ['△', '☯']
},
{
  name: "BrassFace",
  mood: "*puff puff*",
  isActive: false
},
{
  name: "Bobafeet",
  mood: "☱＋☴",
  isActive: false,
},
{
  name: "Warewolf",
  mood: "☷☷☷+",
  isActive: true,
},
{
  name: "Neobii",
  mood: "--",
  isActive: false,
},
{
  name: "Slipurrrrs",
  mood: '-',
  inventory: ['☯'],
  isActive: true
},
{
  name: "CoolSneakers",
  mood: '',
  isActive: true
},
{
  name: "DragonJamon",
  mood: '**',
  isActive: true
},
{
  name: "JohnnyBravo",
  mood: "+",
  isActive: false
},
{
  name: "AquaBarbie",
  mood: "+",
  isActive: false,
  inventory: ['☯']
},
{
  name: "Querty101",
  mood: "^",
  isActive: false
},
{
  name: "MississippiBrazos",
  mood: "+",
  isActive: true,
  inventory: ['☯']
},
{
  name: "ItchyMotors",
  mood: "+||",
  isActive: false,
},
{
  name: "Dorthies_dancin_shoes",
  mood: "++",
  isActive: false
},
{
  name: "FireHydrantLicker_tH",
  mood: "|**,",
  inventory: ['☯'],
  isActive: true
},
{
  name: "EarlyBirdie",
  mood: "|**,",
  inventory: ['☯'],
  isActive: true,
  note: "traded [eE for cats]"
},
{
  name: "Twoheadedsphaghettisnake666",
  mood: "",
  isActive: true,  
},
{
  name: "Jiminey_crickets",
  mood: "+",
  isActive: false
},
{
  name: "BurpingCactus",
  mood: "☱*",
  isActive: false
},
{
  name: "Yoshi",
  mood: "+++☷☷☷ ",
  inventory: ['☯'],
  isActive: false
},
{
  name: "MothPuncher",
  mood: "?+ "
},
{
  name: "PinkyPromise",
  mood: "+**",
  isActive: true
},
{
  name: "Truss BaVeriphi",
  mood: "^+||",
  isActive: true
},
{
  name: "DrunkFlamingo",
  mood: "+"
},
{
  name: "CheekStream",
  note: "revoked [dang!]",
  isActive: true
},
{
  name: "Princess_Peach",
  note: "revoked [eE]"
},
{
  name: "waterLake",
  mood: "+☱",
  isActive: true
},
{
  name: "chOWN",
  mood: "--☴☴"
},
{
  name: "The_Event_That_Shant_Be_Named",
  mood: "+⋛ "
},
{
  name: "MrHanky",
  mood: "*☴☴☴",
  inventory: ['☯']
},
{
  name: "aligatorAllison"
},
{
  name: "Bulgaria",
  mood: "-|"
},
{
  name: "Jerry",
  mood: "+||",
  inventory: ['☯']
},
{
  name: "GrinchBitch",
  mood: "+"
},
{
  name: "Meowth",
  mood: "~"
},
{
  name: "B.J.",
  mood: "?/+ "
},
{
  name: "Togepikachu",
  mood: "?+"
},
{
  name: "pi_Spinner",
  mood: "?+"
},
{
  name: "Skeletor",
  mood: "***",
  inventory: ['☯'],
  isActive: true
},
{
  name: "SpongeDude",
  mood: "",
  isActive: true
},
{
  name: "aCuteTriangle",
  mood: "~?-"
},
{
  name: "marilynMoney"
},
{
  name: "weatherWonder"
},
{
  name: "SandStorm"
},
{
  name: "man"
},
{
  name: "Givesnolux",
  mood: "+++",
  isHonorary: true
},
{
  name: "NasaShapeUp",
  mood: "",
  isHonorary: true
},
{
  name: "Slimer",
  mood: "+",
  isActive: true
},
{
  name: "brassFace",
  mood: "?-?+",
  isActive: true
}]