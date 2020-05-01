import { createMutator } from 'meteor/vulcan:core';
import { getCollection } from 'meteor/vulcan:lib';

Meteor.startup(() => {
  const Currencies = getCollection("Currencies");
  if(Currencies.find().count() === 0) {
   currenciesSeed.forEach(currency => {
     currency.createdAt = new Date();
     Currencies.insert(currency);
   })
  }
});


const currenciesSeed = [
{
  name: "ForeheadKisses",
  glyph: "〠",
  description: "Only the the most special ☴ get the forehead kiss and not many people get to see a whole forehead kiss in their lifetime.",
  ledgerUrl: "https://github.com/Shielkwamm/one_Z-rk/wiki/%23%23%23-Leger"
},
{
  name: "MockMock",
  glyph: "🕑",
  description: "Necessary evil, makes the world go round.",
  ledgerUrl: "https://github.com/Shielkwamm/one_Z-rk/wiki/%23%23%23-Leger"
},
{
  name: "GooglyEyes",
  glyph: "👀",
  description: "Nobody knows where these came from and they are wiley, becareful about owning them because they might own you!",
  ledgerUrl: "https://github.com/Shielkwamm/one_Z-rk/wiki/%23%23%23-Leger"
},
{
  name: "LotteryTickets",
  glyph: "当",
  description: "Everyone is a winner!",
  ledgerUrl: "https://github.com/Shielkwamm/one_Z-rk/wiki/%E5%BD%93%E5%BD%93-Loitery-%E5%BD%93%E5%BD%93-===-%F0%9F%90%AD--%E2%BB%8C-===="
}
]