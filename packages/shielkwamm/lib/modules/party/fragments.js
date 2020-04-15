import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
   fragment PartiesFragment on Party {
     _id
     createdAt
     name
     mood
     description
     isActive
     isEsteemed
   }
`);

registerFragment(`
   fragment FlatPartiesFragment on Party {
     _id
     name
   }
`);