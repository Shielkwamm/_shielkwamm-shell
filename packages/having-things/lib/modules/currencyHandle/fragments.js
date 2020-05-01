import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
  fragment CurrencyHandleBase on CurrencyHandle {
    _id
    createdAt
    mood
    note
    amount
  }
`)

registerFragment(`
  fragment CurrencyHandlesBase on CurrencyHandle {
    ...CurrencyHandleBase
    handle {
      ...HandleBase
    }
  }
`)

registerFragment(`
  fragment HandleCurrenciesBase on CurrencyHandle {
    ...CurrencyHandleBase
    currency {
      ...CurrencyBase
    }
  }
`)