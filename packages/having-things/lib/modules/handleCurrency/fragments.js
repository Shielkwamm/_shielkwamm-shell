import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
   fragment HandleCurrenciesFragment on HandleCurrency {
     _id
     createdAt
     mood
     note
     amount
     currency {
       ...CurrenciesFragment
     }
     handle {
      ...FlatHandlesFragment
    }
   }
`);