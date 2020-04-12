import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
   fragment GamesFragment on Game {
     _id
     createdAt
     name
     level
     maxLevel
     totalExpPoints
     bwam
     _sh_
     slug
   }
`);
