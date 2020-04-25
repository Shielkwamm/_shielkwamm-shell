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
  text: {
    type: String,
    optional: false,
    canRead: ['members', 'admins'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  roomId: {
    type: String,
    optional: false,
    canRead: ['admins'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  type: {
    type: String,
    optional: true,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
    defaultValue: "message",
    options: [
    {
      label: "Vibe",
      value: "vibe"
    },
    {
      label: "Note",
      value: "note"
    },
    {
      label: "Money",
      value: "money"
    },
    {
      label: "Zork",
      value: "zork"
    },
    /*{
      label: "Expectations",
      value: "expecations"
    }*/]
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
