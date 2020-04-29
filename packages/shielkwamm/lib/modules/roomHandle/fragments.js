import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
   fragment RoomHandlesFragment on RoomHandle {
     _id
     createdAt
     handleId
     handle {
       ...FlatHandlesFragment
       currencies {
         _id
         amount
         currency {
           name
           glyph
         }
       }
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
       currencies {
         _id
         amount
         currency {
           name
           glyph
         }
       }
     }
     isDJ
     isCannon
   }
`);