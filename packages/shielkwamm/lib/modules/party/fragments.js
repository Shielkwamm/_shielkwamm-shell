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
    colorScheme {
      ...ColorSchemesFragment
    }
    handles {
      ...HandlesPartyBadge
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