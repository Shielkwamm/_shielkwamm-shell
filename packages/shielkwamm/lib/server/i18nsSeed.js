import { getCollection } from 'meteor/vulcan:lib';

Meteor.startup(() => {
  addI18ns();
});

export function addI18ns(){
  const I18ns = getCollection('I18ns');
  if(I18ns.find().count() === 0) {
    i18nsSeed.forEach(i18n => {
      i18n.createdAt = new Date();
      I18ns.insert(i18n);
    });
  }
}
  

const i18nsSeed = [{
  name: 'basic_US',
  description: 'The basic glyphs of _sh_.',
  glyphSet: '☰ ☳ ☲ ☷ ☱ ☵ ☶ ☴ | ↑ ↓ ‾ | ◯ ⚬ ⬤ ф | △ ▵ | ☸ 当 Ω | ✔ 🔬 💻 🌈',
  guideUrl: 'https://guide.shielkwamm.com/docs/i18n/basic'
},
{ 
  name: 'money_$$',
  description: 'KISS',
  glyphSet: '🕑 〠 当 👀',
  guideUrl: 'https://guide.shielkwamm.com/docs/i18n/money'
},
{
  name: 'romNom_US',
  description: 'Roman Numerals.',
  glyphSet: 'Ⅹ Ⅰ Ⅱ Ⅲ Ⅳ Ⅴ Ⅵ Ⅶ Ⅷ Ⅸ',
  guideUrl: 'https://guide.shielkwamm.com/docs/i18n/romNom'
},
{
  name: 'ra_US',
  description: 'real attitude',
  glyphSet: '🙌 👊 🥁 💋 ✔ 🔬 👀 🎉 🍦',
  guideUrl: 'https://guide.shielkwamm.com/docs/i18n/real-attitude'
},
{
  name: 'female_FM',
  description: 'females',
  glyphSet: '❤ 🍕 ☾',
  guideUrl: 'https://guide.shielkwamm.com/docs/i18n/female'
},
{
  name: 'admin_ME',
  description: 'Stuffz',
  glyphSet: '🖌 🌍 🍕 🏀 🦠',
  guideUrl: 'https://guide.shielkwamm.com/docs/i18n/admin'
},
{
  name: 'agile_JP',
  description: 'Agile Lean House',
  glyphSet: '敏 現場 現物 現実 現 舎 角 組 改善 改 改革 善 改善 革 輪',
  guideUrl: 'https://guide.shielkwamm.com/docs/i18n/agile'
},
{
  name: 'appropriate_HI',
  description: 'appropriated',
  glyphSet: '⻌ 了 ‾ ☸ ⚔ ᅘ ☑ ☕ 🦄 🍦 🌍 ☯',
  guideUrl: 'https://guide.shielkwamm.com/docs/i18n/appropriate'
},
{
  name: 'math_LE',
  description: 'Mathleets',
  glyphSet: 'μ Δ Ω',
  guideUrl: 'https://guide.shielkwamm.com/docs/i18n/mathleet'
},
{
  name: 'done_WK',
  description: '=== managing expectations ===',
  glyphSet: '😍 🍝 🎧 🦕 🔥 💋',
  guideUrl: 'https://guide.shielkwamm.com/docs/i18n/done-work'
},
{
  name: '~o~_MX',
  description: 'pues',
  glyphSet: '👶 🎩 🦄',
  guideUrl: 'https://guide.shielkwamm.com/docs/i18n/gritas'
},{
  name: 'film_88',
  description: 'Get that shot!',
  glyphSet: '🎥 📷',
  guideUrl: 'https://guide.shielkwamm.com/docs/i18n/film'
},{
  name: 'eagle_US',
  description: 'For the eagles.',
  glyphSet: '🦅 🔒 🥚 🔑'
}];
