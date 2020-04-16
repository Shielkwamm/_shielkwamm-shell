import ColorSchemes from '../modules/colorScheme/collection.js';
import { createMutator } from 'meteor/vulcan:core';

Meteor.startup(() => {
   if(ColorSchemes.find().count() === 0) {
    colorSchemesSeed.forEach(colorScheme => {
      colorScheme.createdAt = new Date();
      ColorSchemes.insert(colorScheme);
    })
   }
});

const colorSchemesSeed = [{
  name: "operat0r",
  backgroundColor:"#FFFFFF",
  linkColor: "#A1A1A1",
  color: "#000000",
},
{
  name: "△USA△",
  backgroundColor:"#f1f1f1",
  linkColor: "#bf0a30",
  color: "#002868",
},
{
  name: "kakTUz",
  backgroundColor:"#f2c5e0",
  linkColor: "#76b947",
  color: "#D43790",
},
{
  name: "=== acktweuli ===",
  backgroundColor: "#FDF4E3",
  linkColor: "#6C6A61",
  color: "#705446",
},
{
  name: "ch@nge",
  backgroundColor: "#FBCE3A",
  linkColor: "#C9595F",
  color: "#372F2F"
}
]