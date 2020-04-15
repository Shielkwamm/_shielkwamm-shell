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
     isActive
     backgroundColor
     linkColor
     messageDelay
     areDJMessagesMuted
     areCannonMessagesMuted
     i18nRooms {
       ...I18nRoomsFragment
     }
     roomHandles {
       ...RoomHandlesFragment
     }
   }
`);

registerFragment(`
  fragment RoomsListFragment on Room {
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
     isActive
     backgroundColor
     linkColor
     messageDelay
     i18nRooms {
      ...I18nRoomsFragment
    }
    roomHandles {
      ...RoomHandlesHandlesFragment
    }
}
`);

registerFragment(`
   fragment FlatRoomsFragment on Room {
     _id
     name
   }
`);