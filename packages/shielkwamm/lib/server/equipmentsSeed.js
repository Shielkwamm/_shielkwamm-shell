import Equipments from '../modules/equipment/collection.js';
import { createMutator } from 'meteor/vulcan:core';

Meteor.startup(() => {
  if(Equipments.find().count() === 0) {
   equipmentsSeed.forEach(equipment => {
     equipment.createdAt = new Date();
     Equipments.insert(equipment);
   })
  }
});


const equipmentsSeed = [
{
  name: "_sh_",
  glyph: "△",
  description: "How in the world did you get this?"
},
{
  name: "Crypter",
  glyph: "☯",
  description: "Sometimes things get to === obvious ===."
},
{
  name: "Radio Dial",
  glyph: "🔘",
  description: "radio dial, do not [+]Ø[+] 🐭 +/o+☷++☯."
},
{
  name: "The big Cheese",
  glyph: "🐭",
  description: "Please the big Cheese"
},
{
  name: "Task master",
  glyph: "🕑",
  description: "=== Manages expections ==="
},
{
  name: "Ω",
  glyph: "Ω",
  description: "Just be real."
},
{
  name: "Cannon ball",
  glyph: "🔬",
  description: "Cannon incongruenance"
},
{
  name: "Acknowledgement",
  glyph: "☾",
  description: "Acknowledge or be gone"
},
{
  name: "HR / Legal",
  glyph: "🦕",
  description: "Follow the rules or get the boo box"
},
{
  name: "Documentation",
  glyph: "🎥",
  description: "Sometimes it just needs a look"
}
]