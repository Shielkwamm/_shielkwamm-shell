import { createMutator } from 'meteor/vulcan:core';
import { getCollection } from 'meteor/vulcan:lib';

Meteor.startup(() => {
  const Currencies = getCollection('Currencies');
  const ColorSchemes = getCollection('ColorSchemes');
  if(Currencies.find().count() === 0) {
   currenciesSeed.forEach(currency => {
    let colorScheme = ColorSchemes.findOne({name: currency.colorScheme});
    if(!colorScheme) {
      console.log('###currency ' + currency.colorScheme + ' not found ')
      return;
    }
    currency.colorSchemeId = colorScheme._id;
     currency.createdAt = new Date();
     Currencies.insert(currency);
   })
  }
});


const currenciesSeed = [
{
  name: 'ForeheadKisses',
  glyph: '〠',
  description: 'Only the the most special ☴ get the forehead kiss and not many people get to see a whole forehead kiss in their lifetime.',
  ledgerUrl: 'https://github.com/Shielkwamm/sheeeet/blob/master/LEDGER.md',
  colorScheme: 'imagination',
},
{
  name: 'MockMock',
  glyph: '🕑',
  description: 'Necessary evil, makes the world go round.',
  ledgerUrl: 'https://github.com/Shielkwamm/sheeeet/blob/master/LEDGER.md',
  colorScheme: '=== acktweuli ===',
},
{
  name: 'GooglyEyes',
  glyph: '👀',
  description: 'Nobody knows where these came from and they are wiley, becareful about owning them because they might own you!',
  ledgerUrl: 'https://github.com/Shielkwamm/sheeeet/blob/master/LEDGER.md',
  colorScheme: 'kakTUz'
},
{
  name: 'LotteryTickets',
  glyph: '当',
  description: 'Everyone is a winner!',
  ledgerUrl: 'https://github.com/Shielkwamm/sheeeet/blob/master/LEDGER.md',
  colorScheme: 'ch@nge',
}
]