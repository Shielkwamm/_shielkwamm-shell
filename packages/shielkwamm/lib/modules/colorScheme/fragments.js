import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
   fragment ColorSchemesFragment on ColorScheme {
     _id
     createdAt
     backgroundColor
     linkColor
     color
     name
   }
`);
