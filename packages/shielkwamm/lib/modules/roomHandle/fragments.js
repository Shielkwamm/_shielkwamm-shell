import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
   fragment RoomHandlesFragment on RoomHandle {
     _id
     createdAt
     handleId
     handle {
       ...FlatHandlesFragment
     }
     roomId
     room {
       ...FlatRoomsFragment
     }
     isDJ
     isCannon
   }
`);

registerFragment(`
   fragment RoomHandlesHandlesFragment on RoomHandle {
     _id
     createdAt
     handleId
     handle {
       ...FlatHandlesFragment
     }
     isDJ
     isCannon
   }
`);