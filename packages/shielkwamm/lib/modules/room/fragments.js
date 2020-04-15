import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
   fragment RoomsFragment on Room {
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
     vibe
     slug
     currentMusicUrl
     currentMusicTitle
     description
     color
     backgroundColor
     linkColor
     messageDelay
     areDJMessagesMuted
     areCannonMessagesMuted
     i18nRooms {
       ...RoomI18nFragment
     }
   }
`);

registerFragment(`
   fragment FlatRoomsFragment on Room {
     _id
     name
   }
`);