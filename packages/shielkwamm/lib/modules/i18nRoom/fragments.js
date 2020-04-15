import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
   fragment I18nRoomFragment on I18nRoom {
     _id
     createdAt
     i18nId   
     i18n {
      ...FlatI18nsFragment
     }
     roomId
     room {
      ...FlatRoomsFragment
     }
   }
`);

registerFragment(`
  fragment RoomI18nFragment on I18nRoom {
    _id
    createdAt
    i18nId   
    i18n {
      ...FlatI18nsFragment
    }
    roomId
    room {
      ...FlatRoomsFragment
    }
  }
`)

/*
     
     roomId
     */
