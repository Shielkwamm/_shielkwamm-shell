import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
   fragment GamesFragment on Game {
     _id
     createdAt
     name
     level
     maxLevel
     currentExpPoints
     totalExpPoints
     bwam
     _sh_
     slug
     currentMusicUrl
     currentMusicName
   }
`);
