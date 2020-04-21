import Currencies from '../modules/currency/collection.js';
import { createMutator } from 'meteor/vulcan:core';

Meteor.startup(() => {
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
  description: "Only the the most special ☴ get the forehead kiss and not many people get to see a whole forehead kiss in their lifetime."
},
{
  name: "MockMock",
  glyph: "🕑",
  description: "Necessary evil, makes the world go round."
},
{
  name: "GooglyEyes",
  glyph: "👀",
  description: "Nobody knows where these came from and they are wiley, becareful about owning them because they might own you!"
},]