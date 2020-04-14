import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
   fragment I18nsFragment on I18n {
     _id
     createdAt
     name
     glyphSet
     description
     wikiUrl
   }
`);

/*
up
     upName
     down
     downName
     left
     leftName
     right
     rightName
     */
