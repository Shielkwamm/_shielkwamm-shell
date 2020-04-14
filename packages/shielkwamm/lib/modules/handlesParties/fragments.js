import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
   fragment HandlesPartiesFragment on HandlesParty {
     _id
     createdAt
   }
`);
