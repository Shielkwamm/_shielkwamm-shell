import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
   fragment PartiesFragment on Party {
     _id
     createdAt
     name
     mood
     description
     isActive
     isEsteemed
     colorScheme {
      ...ColorSchemesFragment
    }
   }
`);

registerFragment(`
  fragment PartyBadge on Party {
    _id
    name
    mood
    description
    isActive
    isEsteemed
    i18ns {
       ...PartyI18nsFragment
    }
    colorScheme {
      ...ColorSchemesFragment
    }
    handles {
      ...HandlesPartyBadge
    }
    currencies {
      ...HandleCurrenciesFragment
    }
  }
`)

registerFragment(`
   fragment FlatPartiesFragment on Party {
     _id
     name
   }
`);

// handle badge

registerFragment(`
  fragment HandleBadgeParties on Party {
    _id
    name
    isEsteemed
  }
`);