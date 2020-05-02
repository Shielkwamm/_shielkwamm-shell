import { createCollection } from 'meteor/vulcan:core';
import schema from './schema.js';
import './fragments.js';

const CurrenciesActors = createCollection({
  collectionName: 'CurrenciesActors',
  typeName: 'CurrencyActor',
  schema,
  // resolvers: yourCustomResolvers // null to disable default resolvers generation
  // mutations: yourCustomMutations // null to disable default mutations generation
  permissions: {
    canRead: ['members'],
    canCreate: ['members'],
    canUpdate: ['owners', 'admins'],
    canDelete: ['owners', 'admins']
  },
});



export default CurrenciesActors;
