import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
   fragment HandlesPartiesFragment on HandleParty {
     _id
     createdAt
     isMod
     party {
       ...FlatPartiesFragment
     }
     handle {
       ...FlatHandlesFragment
     }
   }
`);
