import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
   fragment PartiesFragment on Party {
     _id
     createdAt
     name
     description
   }
`);
