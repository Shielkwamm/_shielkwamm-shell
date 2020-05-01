import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
   fragment ColorSchemeBase on ColorScheme {
     _id
     createdAt
     backgroundColor
     linkColor
     altColor
     color
     name
   }
`);

registerFragment(`
  fragment ColorSchemesList on ColorScheme {
    ...ColorSchemeBase
  }
`)
