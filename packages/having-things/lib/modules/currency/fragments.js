import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
   fragment CurrenciesFragment on Currency {
     _id
     createdAt
     name
     glyph
     description
     ledgerUrl
     handles {
       _id
       amount
       mood
       note
      handle {
        _id
        name
      }
     }
   }
`);
