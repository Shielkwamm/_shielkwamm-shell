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
    optional: false,
    defaultValue: "n00b_N00B",
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  description: {
    type: String,
    optional: true,
    defaultValue: "Hi I just wrote this.",
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  up: {
    type: String,
    optional: false,
    defaultValue: "áéḱḿí",
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  upName: {
    type: String,
    optional: false,
    defaultValue: "Arbitrati0r",
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  down: {
    type: String,
    optional: false,
    defaultValue: "ŃńÓóÔô",
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  downName: {
    type: String,
    optional: false,
    defaultValue: "Complicat0r",
    defaultValue: "ŃńÓóÔô",
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  left: {
    type: false,
    defaultValue: "Òòìḱ",
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  leftName: {
    type: false,
    defaultValue: "Em0ti0n",
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  right: {
    type: false,
    defaultValue: "Ööï",
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  rightName: {
    type: false,
    defaultValue: "Intigat0r",
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
