const schema = {
  // default properties

  _id: {
    type: String,
    optional: true,
    canRead: ['guests'],
  },
  createdAt: {
    type: Date,
    optional: true,
    canRead: ['guests'],
    onCreate: ({ newDocument, currentUser}) => {
      return new Date();
    }
  },
  name: {
    type: String,
    optional: true,
    canRead: ['admins'],
    canUpdate: ['admins'],
    canCreate: ['admins']
  },
  description: {
    type: String,
    optional: true,
    canRead: ['admins'],
    canUpdate: ['admins'],
    canCreate: ['admins']
  },
  mood: {
    type: String,
    optional: true,
    canRead: ['admins'],
    canUpdate: ['admins'],
    canCreate: ['admins']
  },
  isActive: {
    type: String,
    optional: true,
    defaultValue: true,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  // userId: {
  //   type: String,
  //   optional: true,
  //   canRead: ['guests'],
  //   resolveAs: {
  //     fieldName: 'user',
  //     type: 'User',
  //     resolver: (movie, args, context) => {
  //       return context.Users.findOne({ _id: movie.userId }, { fields: context.Users.getViewableFields(context.currentUser, context.Users) });
  //     },
  //     addOriginalField: true
  //   }
  // },
  
};

export default schema;
