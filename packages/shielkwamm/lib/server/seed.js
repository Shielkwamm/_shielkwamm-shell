import I18ns from '../../modules/i18n/collection.js';
import { createMutator } from 'meteor/vulcan:core';

Meteor.startup(() => {
   /*if(Markets.find().count() === 0) {
    marketsSeed.forEach(market => {
      if(market.cg){
        HTTP.call('GET', 'https://api.coingecko.com/api/v3/exchanges/' + market.cg, function(err, res) {    
          if(err || !res.data) {
            console.log("!!!!! " + "Seed data not populated... restart.");
            return;  
          }
          market.smallImageUrl = market.smallImageUrl || res.data.image;
          //market.largeImageUrl = market.largeImageUrl;
          delete market.cg;
          Markets.insert(market);
        });
      }
      else {
        Markets.insert(market);
      }
    })
   }*/
});

const i18nsSeed = [{
  name: "basic_US",
  description: "The basic glyphs of _sh_.",
  glyphSet: "☰ ☳ ☲ ☷ ☱ ☵ ☶ ☴ | ↑↓‾ | ◯ ⚬ ⬤ ф | △ ▵ | ☸ 当 Ω | ✔ 🔬 💻 🌈",
  wikiUrl: "https://github.com/Shielkwamm/one_Z-rk/wiki/Glyphs"
},
{
  name: "romNom_US",
  description: "Roman Numerals.",
  glyphSet: "Ⅹ Ⅰ Ⅱ Ⅲ Ⅳ Ⅴ Ⅵ Ⅶ Ⅷ Ⅸ",
  wikiUrl: "https://github.com/Shielkwamm/one_Z-rk/wiki/Glyphs"
},
{
  name: "attitude_US",
  description: "real attitude",
  glyphSet: "🙌 👊 🥁 💋 ✔ 🔬 👀 🎉 🍦",
  wikiUrl: "https://github.com/Shielkwamm/one_Z-rk/wiki/i18n%5Bra_US%5D"
},
{
  name: "female_FM",
  description: "females",
  glyphSet: "❤ 🍕 ☾",
  wikiUrl: "https://github.com/Shielkwamm/one_Z-rk/wiki/i18n%5Bfemale_FM%5D"
}]
