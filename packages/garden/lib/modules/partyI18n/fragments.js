import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
   fragment PartyI18nsFragment on PartyI18n {
     _id
     createdAt
     fluency
     party {
      ...FlatPartiesFragment
     }
     i18n {
      ...FlatI18nsFragment
     }
   }
`);
