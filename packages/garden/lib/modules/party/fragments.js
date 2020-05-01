import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
  fragment PartySimple on Party {
    _id
    name
  }
`)

registerFragment(`
   fragment PartyBase on Party {
     ...PartySimple
     createdAt
     mood
     description
     isActive
     isEsteemed
   }
`);

registerFragment(`
  fragment PartiesList on Party {
    ...PartyBase
    partyColorScheme {
      ...ColorSchemeBase
    }
    partyI18ns {
      ...PartyI18nsBase
    }
    partyHandles {
      ...PartyHandlesBase
    }
  }`
);