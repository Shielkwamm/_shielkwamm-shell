import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
   fragment MessageBase on Message {
     _id
     createdAt
     text
     roomId
     type
     sh {
       ...ShBest
     }
   }
`);
