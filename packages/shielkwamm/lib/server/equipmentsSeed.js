import Equipment from '../modules/equipment/collection.js';
import { createMutator } from 'meteor/vulcan:core';

Meteor.startup(() => {
  if(Equipment.find().count() === 0) {
   equipmentSeed.forEach(equipment => {
     equipment.createdAt = new Date();
     Equipment.insert(equipment);
   })
  }
});


const equipmentSeed = [
{
  name: '_sh_',
  glyph: '△',
  description: 'How in the world did you get this?',
  wikiUrl: 'https://github.com/Shielkwamm/one_Z-rk/wiki/contr0l'
},
{
  name: 'Crypter',
  glyph: '☯',
  description: 'Sometimes things get to === obvious ===.',
  wikiUrl: 'https://github.com/Shielkwamm/one_Z-rk/wiki/contr0l'
},
{
  name: 'Radio Dial',
  glyph: '🔘',
  description: 'radio dial, do not [+]Ø[+] 🐭 +/o+☷++☯.',
  wikiUrl: 'https://github.com/Shielkwamm/one_Z-rk/wiki/contr0l'
},
{
  name: 'The big Cheese',
  glyph: '🐭',
  description: 'Please the big Cheese',
  wikiUrl: 'https://github.com/Shielkwamm/one_Z-rk/wiki/contr0l'
},
{
  name: 'Task master',
  glyph: '🕑',
  description: '=== Manages expections ===',
  wikiUrl: 'https://github.com/Shielkwamm/one_Z-rk/wiki/contr0l'
},
{
  name: 'Ω',
  glyph: 'Ω',
  description: 'Just be real.',
  wikiUrl: 'https://github.com/Shielkwamm/one_Z-rk/wiki/contr0l'
},
{
  name: 'Cannon ball',
  glyph: '🔬',
  description: 'Cannon incongruenance',
  wikiUrl: 'https://github.com/Shielkwamm/one_Z-rk/wiki/contr0l'
},
{
  name: 'Acknowledgement',
  glyph: '☾',
  description: 'Acknowledge or be gone',
  wikiUrl: 'https://github.com/Shielkwamm/one_Z-rk/wiki/contr0l'
},
{
  name: 'HR / Legal',
  glyph: '🦕',
  description: 'Follow the rules or get the boo box',
  wikiUrl: 'https://github.com/Shielkwamm/one_Z-rk/wiki/contr0l'
},
{
  name: 'Documentation',
  glyph: '🎥',
  description: 'Sometimes it just needs a look',
  wikiUrl: 'https://github.com/Shielkwamm/one_Z-rk/wiki/contr0l'
}
]