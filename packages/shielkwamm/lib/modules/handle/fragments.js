import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
   fragment HandlesFragment on Handle {
     _id
     createdAt
     isActive
     name
     mood
     note
     description
     isHonorary
     inventory
     parties {
       ...HandlesPartiesFragment
     }
   }
`);
registerFragment(`
   fragment FlatHandlesFragment on Handle {
     _id
     createdAt
     isActive
     name
     mood
   }
`);

//partyIds
//parties