import { createCollection } from 'meteor/vulcan:core';
import schema from './schema.js';
import './fragments.js';
import Handles from '../handle/collection.js'

const RoomHandles = createCollection({
  collectionName: 'RoomHandles',
  typeName: 'RoomHandle',
  schema,
  // resolvers: yourCustomResolvers // null to disable default resolvers generation
  // mutations: yourCustomMutations // null to disable default mutations generation
  permissions: {
    canRead: ['members'],
    canCreate: ['members', 'admins'],
    canUpdate: ['owners', 'admins'],
    canDelete: ['owners', 'admins']
  },
  create: {
    after: [(document, properties) => {
      let handle = Handles.findOne({_id: document.handleId});
      Messages.insert({roomId: document.roomId, text: `${handle.name} joined`, createdAt: new Date()})
    }],
  },
  delete: {
    after: [(document, properties) => {
      let handle = Handles.findOne({_id: document.handleId});
      Messages.insert({roomId: document.roomId, text: `${handle.name} left`, createdAt: new Date()})
    }],
  }
  //customFilters: [
  //  {
  //    name: "_withRatings",
  //    argument: "average: Int",
  //    filter: ({ input, context, filterArguments }) => {
  //      const { average } = filterArguments;
  //      const { Reviews } = context;
  //      // get all movies that have an average review score of X stars 
  //      const xStarReviewsMoviesIds = getMoviesByScore(average);
  //      return {
  //        selector: { _id: { $in: xStarReviewsMoviesIds } },
  //        options: {}
  //      }
  //    }
  //  }
  //]

});



export default RoomHandles;
