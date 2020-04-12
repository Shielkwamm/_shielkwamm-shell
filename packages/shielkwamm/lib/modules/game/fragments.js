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
     zork
     bwam
     _sh_
     slug
     currentMusicUrl
     currentMusicName
   }
`);
