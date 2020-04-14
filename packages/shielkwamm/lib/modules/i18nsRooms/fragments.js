import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
   fragment I18nsRoomsFragment on I18nsRoom {
     _id
     createdAt
     i18nId {
       ...I18nsFragment
     }
     roomId {
       ...RoomsFragment
     }
   }
`);
