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
     connectionStatus
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
     connectionStatus
     inventory
     connectionStatus
     isHonorary
   }
`);

registerFragment(`
  fragment HandleBadge on Handle {
    _id
    name
    isActive
    isHonorary
    mood
    note
    inventory
    connectionStatus
    parties {
      ...HandlePartiesBadge
    } 
  }
`);

//partyIds
//parties