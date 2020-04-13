import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
   fragment HandlesFragment on Handle {
     _id
     createdAt
     name
     mood
     isActive
     description
     parties
   }
`);

//partyIds
//parties