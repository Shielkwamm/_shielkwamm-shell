import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
   fragment MessagesFragment on Message {
     _id
     createdAt
     text
     gameId
   }
`);
