import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
   fragment RoomsHandlesFragment on RoomsHandle {
     _id
     createdAt
     handleId
     handle {
       ...HandlesFragment
     }
     roomId
     room {
       ...RoomsFragment
     }
     isDJ
     isCannon
   }
`);
