import { createCollection } from 'meteor/vulcan:core';
import schema from './schema.js';
import './fragments.js';
import Shs from '../sh/collection.js';

const Messages = createCollection({
  collectionName: 'Messages',
  typeName: 'Message',
  schema,
  // resolvers: yourCustomResolvers // null to disable default resolvers generation
  // mutations: yourCustomMutations // null to disable default mutations generation
  permissions: {
    canRead: ['members'],
    canCreate: ['admins'],
    canUpdate: ['owners', 'admins'],
    canDelete: ['owners', 'admins']
  },
  callbacks: {
    create: { //before doesn't work ??
      after: [(document, properties) => { 
        let messageType = extractMessageType(document.text);
        Messages.update({_id: document._id}, {$set: {type: messageType}})
      }],
    },
    update: {
      after: [(document, properties) => {
        let messageType = extractMessageType(document.text);
        Messages.update({_id: document._id}, {$set: {type: messageType}})
      }],
    }
  },
});

function extractMessageType(text) {
  // don't forget to view as 3 parts of _sh_ #i18n game
  let _sh_Regex = /^((=.{0,1}){3})\s(.{4,15})\s((=.{0,1}){3})/ // a little bit more esteemed of a regex... is _sh_ this a richard stallman joke?
  if(text.match(_sh_Regex)){
    
    return "_sh_";
  }
  let vibeRegex = /^.*⬤.*$/;
  if(text.match(vibeRegex)) {
    return "vibe";
  }
  let noteRegex = /^.*🔬.*$/;//maybe not need?
  if(text.match(noteRegex))  {
    return "note";
  }
  let zorkRegex = /^[^:]+$/;
  if(text.match(zorkRegex)){
    return "zork";
  }
  return "message";
}

export default Messages;
