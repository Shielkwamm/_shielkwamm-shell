import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
   fragment MarketsFragment on Market {
     _id
     createdAt
   }
`);
