import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
   fragment HandlesFragment on Handle {
     _id
     createdAt
     name
     description
     parties
   }
`);

//partyIds
//parties