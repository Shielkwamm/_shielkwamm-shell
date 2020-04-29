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
  name: "n00b",
  backgroundColor:"#FFFFFF",
  linkColor: "#A1A1A1",
  color: "#000000",
  altColor: "#FF69B4"
},
{
  name: "△USA△",
  backgroundColor:"#f1f1f1",
  linkColor: "#bf0a30",
  color: "#002868",
  altColor: "#FFBB00"
},
{
  name: "kakTUz",
  backgroundColor:"#f2c5e0",
  linkColor: "#76b947",
  color: "#D43790",
  altColor: "#0093C9"
},
{
  name: "=== acktweuli ===",
  backgroundColor: "#FDF4E3",
  linkColor: "#6C6A61",
  color: "#705446",
  altColor: "#654321"
},
{
  name: "ch@nge",
  backgroundColor: "#FBCE3A",
  linkColor: "#C9595F",
  color: "#372F2F",
  altColor: "#E88E5A"
},
{
  name: "stillL1f3",
  backgroundColor: "#976366",
  linkColor: "#D0B863",
  color: "#83A279",
  altColor: "#FFC98B"
}
]