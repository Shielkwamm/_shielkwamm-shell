import { Connectors } from 'meteor/vulcan:core';
import ColorSchemes from "./collection.js"

export const StylishCollections = [];

export const makeStylish = collection => {
  StylishCollections.push(collection);
  collection.addField([
    {
      fieldName: 'colorSchemeId',
      fieldSchema: {
        type: String,
        optional: true,
        canRead: ['guests'],
        canCreate: ['admins'],
        canUpdate: ['admins'],
        resolveAs: {
          fieldName: "colorScheme",
          type: 'ColorScheme',
          relation: "hasOne"
        }
      },
    },
  ])
  /*
  ColorSchemes.addField([
    {
      fieldName: 'handles',
      fieldSchema: {
        type: String,
        optional: true,
        canRead: ['guests'],
        resolveAs: {
          fieldName: "handles",
          type: "Handle",
          relation: "hasMany"
        }
      }
    }
  ])*/
}