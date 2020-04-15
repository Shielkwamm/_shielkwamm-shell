import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
   fragment I18nRoomsFragment on I18nRoom {
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

/*
     
     roomId
     */
