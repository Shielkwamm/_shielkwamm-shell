import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
   fragment HandlesFragment on Handle {
     _id
     createdAt
     name
   }
`);
