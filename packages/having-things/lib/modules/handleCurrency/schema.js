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
  amount: {
    type: Number,
    defaultValue: 0,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
  },
  mood: {
    type: String,
    defaultValue: "",
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
  },
  note: {
    type: String,
    defaultValue: "",
    optional: true,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
  },
  handleId: {
    type: String,
    optional: true,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
    resolveAs: {
      fieldName: 'handle',
      type: 'Handle',
      relation: "hasOne"
    }
  },
  currencyId: {
    type: String,
    optional: true,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
    resolveAs: {
      fieldName: 'currency',
      type: 'Currency',
      relation: "hasOne"
    }
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
