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
  name: 'direction_US',
  description: 'Stay Dry.',
  glyphSet: '← ↑ → ↓ △ ▽ ◁ ▷',
  guideUrl: 'https://guide.shielkwamm.com/docs/i18n/basic',
  isActive: true
},
{
  name: 'shielkwamm_SH',
  dscription: '_sh_ classic',
  glyphSet: '◯ ⚬ ‾ △ ▵ 🌈',
  guideUrl: 'https://guide.shielkwamm.com/docs/i18n/shielkwamm',
  isActive: true,
  isFeatured: !'soon'
},
{
  name: 'sh_SH',
  description: 'Bagua',
  glyphSet: '☰ ☳ ☲ ☷ ☱ ☵ ☶ ☴',
  guideUrl: 'https://guide.shielkwamm.com/docs/i18n/sh',
  isActive: false,
  isFeatured: !!!'soon'
},
{ 
  name: 'money_$$',
  description: 'KISS',
  glyphSet: '🕑 〠 当 👀',
  guideUrl: 'https://guide.shielkwamm.com/docs/i18n/money',
  isActive: true,
  isFeatured: !'soon'
},
{
  name: 'romNom_US',
  description: 'Roman Numerals.',
  glyphSet: 'Ⅹ Ⅰ Ⅱ Ⅲ Ⅳ Ⅴ Ⅵ Ⅶ Ⅷ Ⅸ',
  guideUrl: 'https://guide.shielkwamm.com/docs/i18n/romNom',
  isActive: true,
  isFeatured: !!!!!!!!!!!'soon'
},
{
  name: 'ra_US',
  description: 'real attitude',
  glyphSet: '🙌 👊 🥁 💋 ✔ 🔬 🎉',
  guideUrl: 'https://guide.shielkwamm.com/docs/i18n/real-attitude',
  isActive: false,
  isFeatured: !!!!!!!!!!!!!!!!!!!!!'soon'
},
{
  name: 'female_FM',
  description: 'females',
  glyphSet: '❤ 🍕 ☾',
  guideUrl: 'https://guide.shielkwamm.com/docs/i18n/female',
  isActive: false,
  isFeatured: !!!!!!!!!'soon'
},
{
  name: 'admin_ME',
  description: 'Stuffz',
  glyphSet: '🖌 🌍 🍕 🏀 🦠',
  guideUrl: 'https://guide.shielkwamm.com/docs/i18n/admin',
  isActive: false,
  isFeatured: !'soon (for realz)'
},
{
  name: 'agile_JP',
  description: 'Agile Lean House',
  glyphSet: '敏 現場 現物 現実 現 舎 角 組 改善 改 改革 善 改善 革 輪',
  guideUrl: 'https://guide.shielkwamm.com/docs/i18n/agile',
  isActive: false,
  isFeatured: !'knock'
},
{
  name: 'appropriate_HI',
  description: 'appropriated',
  glyphSet: '⻌ 了 ‾ ☸ ⚔ ᅘ ☑ ☕ 🦄 🌍 ☯',
  guideUrl: 'https://guide.shielkwamm.com/docs/i18n/appropriate',
  isActive: false
},
{
  name: 'math_LE',
  description: 'Mathleets',
  glyphSet: 'μ Δ Ω',
  guideUrl: 'https://guide.shielkwamm.com/docs/i18n/mathleet',
  isActive: false
},
{
  name: 'done_WK',
  description: '=== managing expectations ===',
  glyphSet: '😍 🍝 🦕 🔥 💋',
  guideUrl: 'https://guide.shielkwamm.com/docs/i18n/done-work',
  isActive: false
},
{
  name: '~o~_MX',
  description: 'pues',
  glyphSet: '👶 🎩 🦄',
  guideUrl: 'https://guide.shielkwamm.com/docs/i18n/gritas',
  isActive: false,
  ifFeatured: !!!!!'soon'
},{
  name: 'film_88',
  description: 'Get that shot!',
  glyphSet: '🎥 📷',
  guideUrl: 'https://guide.shielkwamm.com/docs/i18n/film',
  isActive: true,
  ifFeatured: !!!'soon'
},{
  name: 'eagle_US',
  description: 'For the eagles.',
  glyphSet: '🦅 🥚 🍦',
  guideUrl: 'https://guide.shielkwamm.com/docs/i18n/eagle',
  isActive: true,
  ifFeatured: !!!!!!!'soon'
},{
  name: 'ad_AM',
  description: 'Okay! The salty zebra once rode a bike up a mountain, okay?',
  glyphSet: '🧂 🦓 🗻 👌 🚴',
  guideUrl: 'https://guide.shielkwamm.com/docs/i18n/ad-am',
  isActive: true,
  isFeatured: true
},
{
  name: 'au_TH',
  description: 'Awwww, sh**, authentication!',
  glyphSet: '🔑 🔒',
  guideUrl: 'https://guide.shielkwamm.com/docs/i18n/auth',
  isActive: true,
  isFeatured: !'soon'
},
{
  name: 'sign_AL',
  description: 'Connection stuff',
  glyphSet: '✔ 🔬 💻 🎧 ⬤',
  guideUrl: 'https://guide.shielkwamm.com/docs/i18n/signal',
  isActive: true,
  isFeatured: !!!'soon'
},
{
  name: 'key_RNG',
  description: 'what\'s this... oh I get it, carry on, a place holder right?',
  glyphSet: 'ф ☸ 当 Ω',
  guideUrl: 'https://guide.shielkwamm.com/docs/i18n/key-ring',
  isActive: false,
  ifFeatured: !!!!!'soon'
},
{
  name: 's_G',
  description: 'An overture to eyeballs gallore, an _sh_ product coming soon.',
  glyphSet: '👀 👓 🌞 👁 👄',
  guideUrl: 'https://guide.shielkwamm.com/docs/i18n/eyeballs-yall',
  isActive: true,
  ifFeatured: !'soon'
},
{
  name: 'balls_BG',
  description: 'The biggest balls of all',
  glyphSet: '⚾ 🏀 🏈 ⚽ 🥅 🏏 ⛳',
  guideUrl: 'https://guide.shielkwamm.com/docs/i18n/big-ballz',
  isActive: true,
  isFeatured: !!!'soon'
}];
