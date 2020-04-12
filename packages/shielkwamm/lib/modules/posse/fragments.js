import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
   fragment PossesFragment on Posse {
     _id
     createdAt
     name
     description
   }
`);
