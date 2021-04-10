import Equipment from '../modules/equipment/collection.js';
import { createMutator } from 'meteor/vulcan:core';

Meteor.startup(() => {
  addEquipment();
});

export function addEquipment() {
  if(Equipment.find().count() === 0) {
    equipmentSeed.forEach(equipment => {
      equipment.createdAt = new Date();
      Equipment.insert(equipment);
    });
   }
}

const equipmentSeed = [
{
  name: '_sh_',
  glyph: '△',
  description: 'How in the world did you get this?',
  guideUrl: 'https://guide.shielkwamm.com/docs/i18n/things/control'
},
{
  name: 'Crypter',
  glyph: '☯',
  description: 'Sometimes things get to === obvious ===.',
  guideUrl: 'https://guide.shielkwamm.com/docs/i18n/things/control'
},
{
  name: 'Radio Dial',
  glyph: '🔘',
  description: 'radio dial, do not [+]Ø[+] 🐭 +/o+☷++☯.',
  guideUrl: 'https://guide.shielkwamm.com/docs/i18n/things/control'
},
{
  name: 'The big Cheese',
  glyph: '🐭',
  description: 'Please the big Cheese',
  guideUrl: 'https://guide.shielkwamm.com/docs/i18n/things/control'
},
{
  name: 'Task master',
  glyph: '🕑',
  description: '=== Manages expections ===',
  guideUrl: 'https://guide.shielkwamm.com/docs/i18n/things/control'
},
{
  name: 'Ω',
  glyph: 'Ω',
  description: 'Just be real.',
  guideUrl: 'https://guide.shielkwamm.com/docs/i18n/things/control'
},
{
  name: 'Cannon ball',
  glyph: '🔬',
  description: 'Cannon incongruenance',
  guideUrl: 'https://guide.shielkwamm.com/docs/i18n/things/control'
},
{
  name: 'Acknowledgement',
  glyph: '☾',
  description: 'Acknowledge or be gone',
  guideUrl: 'https://guide.shielkwamm.com/docs/i18n/things/control'
},
{
  name: 'HR / Legal',
  glyph: '🦕',
  description: 'Follow the rules or get the boo box',
  guideUrl: 'https://guide.shielkwamm.com/docs/i18n/things/control'
},
{
  name: 'Documentation',
  glyph: '🎥',
  description: 'Sometimes it just needs a look',
  guideUrl: 'https://guide.shielkwamm.com/docs/i18n/things/control'
},
{
  name: 'Key',
  glyph: '🔑 ',
  description: 'Keys unlock things',
  guideUrl: 'https://guide.shielkwamm.com/docs/i18n/things/control'
},
{
  name: 'HearMeOut',
  glyph: '👂',
  description: 'When you listen to an idea for a set period of time.',
  guideUrl: 'https://guide.shielkwamm.com/docs/i18n/things/control' 
}
]
