import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
   fragment RoomHandlesFragment on RoomHandle {
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
