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
  i18nId: {
    type: String,
    optional: true,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
    resolveAs: {
      fieldName: "i18n",//[i18n]
      type: 'I18n'
    }
  },
  roomId: {
    type: String,
    optional: true,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
    resolveAs: {
      fieldName: 'room',
      type: 'Room'
    }
  }
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
