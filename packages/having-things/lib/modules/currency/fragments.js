import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
  fragment CurrencySimple on Currency {
    _id
    name
  }`
)

registerFragment(`
   fragment CurrencyBase on Currency {
     ...CurrencySimple
     createdAt
     glyph
     description
     ledgerUrl
   }
`);

registerFragment(`
   fragment CurrencyList on Currency {
     ...CurrencyBase
     currencyHandles {
      ...CurrencyHandlesBase
    }
   }
`)

registerFragment(`
   fragment HandleWithCurrencies on Handle {
     ...HandleBase
     handleCurrencies {
       ...HandleCurrenciesBase
     }
   }
`)