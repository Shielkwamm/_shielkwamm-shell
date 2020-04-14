import I18ns from '../modules/i18n/collection.js';
import { createMutator } from 'meteor/vulcan:core';

Meteor.startup(() => {
   if(I18ns.find().count() === 0) {
    i18nsSeed.forEach(i18n => {
      I18ns.insert({
        name: i18n.name,
        description: i18n.description,
        glyphSet: i18n.glyphSet,
        wikiUrl: i18n.wikiUrl,
        createdAt: new Date()
      })  
    })
   }
});

const i18nsSeed = [{
  name: "basic_US",
  description: "The basic glyphs of _sh_.",
  glyphSet: "☰ ☳ ☲ ☷ ☱ ☵ ☶ ☴ | ↑↓‾ | ◯ ⚬ ⬤ ф | △ ▵ | ☸ 当 Ω | ✔ 🔬 💻 🌈",
  wikiUrl: "https://github.com/Shielkwamm/one_Z-rk/wiki/i18n%5Bbasic_US%5D"
},
{ 
  name: "money_$$",
  description: "KISS",
  glyphSet: "🕑 〠 当 👀",
  wikiUrl: "https://github.com/Shielkwamm/one_Z-rk/wiki/%23%23%23-Leger"
},
{
  name: "romNom_US",
  description: "Roman Numerals.",
  glyphSet: "Ⅹ Ⅰ Ⅱ Ⅲ Ⅳ Ⅴ Ⅵ Ⅶ Ⅷ Ⅸ",
  wikiUrl: "https://github.com/Shielkwamm/one_Z-rk/wiki/i18n%5BromNom_US%5D"
},
{
  name: "ra_US",
  description: "real attitude",
  glyphSet: "🙌 👊 🥁 💋 ✔ 🔬 👀 🎉 🍦",
  wikiUrl: "https://github.com/Shielkwamm/one_Z-rk/wiki/i18n%5Bra_US%5D"
},
{
  name: "female_FM",
  description: "females",
  glyphSet: "❤ 🍕 ☾",
  wikiUrl: "https://github.com/Shielkwamm/one_Z-rk/wiki/i18n%5Bfemale_FM%5D"
},
{
  name: "admin_ME",
  description: "Stuffz",
  glyphSet: "🖌 🌍 🍕 🏀",
  wikiUrl: "https://github.com/Shielkwamm/one_Z-rk/wiki/i18n%5Badmin_Me%5D"
},
{
  name: "agile_JP",
  description: "Agile Lean House",
  glyphSet: "敏 現場 現物 現実 現 舎 角 組 改善 改 改革 善 改善 革 輪",
  wikiUrl: "https://github.com/Shielkwamm/one_Z-rk/wiki/i18n%5Bagile_JP%5D"
},
{
  name: "appropriate_HI",
  description: "appropriated",
  glyphSet: "⻌ 了 ‾ ☸ ⚔ ᅘ ☑ ☕ 🦄 🍦 🌍",
  wikiUrl: "https://github.com/Shielkwamm/one_Z-rk/wiki/i18n%5Bappropriate_HI%5D"
},
{
  name: "math_LE",
  description: "Mathleets",
  glyphSet: "μ Δ Ω",
  wikiUrl: "https://github.com/Shielkwamm/one_Z-rk/wiki/i18n%5Bmath_LE%5D"
},
{
  name: "done_WK",
  description: "=== managing expectations ===",
  glyphSet: "😍 🍝 🎧 🦕 🔥 💋",
  wikiUrl: "https://github.com/Shielkwamm/one_Z-rk/wiki/i18n%5Bdone_WK%5D"
},
{
  name: "~o~_MX",
  description: "",
  glyphSet: "👶 🎩 🦄",
  wikiUrl: "https://github.com/Shielkwamm/one_Z-rk/wiki/i18n%5B~o~_MX%5D"
}]
