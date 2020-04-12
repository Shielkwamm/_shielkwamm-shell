import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
   fragment best_sh_ on Sh {
     _id
     createdAt
     text
   }
`);
