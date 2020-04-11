import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
   fragment GamesFragment on Game {
     _id
     createdAt
     name
   }
`);
