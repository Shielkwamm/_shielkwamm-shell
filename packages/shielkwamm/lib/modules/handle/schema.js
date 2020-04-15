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
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  description: {
    type: String,
    optional: true,
    defaultValue: "n00b",
    canRead: ['admins'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
    input: 'textarea'
  },
  note: {
    type: String,
    optional: true,
    defaultValue: "",
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  mood: {
    type: String,
    optional: true,
    defaultValue: "~",
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  isActive: {
    type: Boolean,
    optional: true,
    defaultValue: true,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  isHonorary: {
    type: Boolean,
    optional: true,
    defaultValue: false,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  inventory: {
    type: Array,
    optional: true,
    defaultValue: [],
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  "inventory.$": {
    type: String,
    optional: true,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  }
  /*
  'partiesIds.$': {
    label: "Parties",
    type: String,
    hidden: true,
    optional: true,
    canRead: ['guests'],
    /*resolveAs: {
      fieldName: 'parties',
      type: '[Party]',
      relation: 'hasMany',
      //arguments: 'filterDir: Int = -1, filterColumn: String = "volume24"',
      resolver: (handle, args, context) => {
        //change to graphql query later
        return context.Parties.find({_id: {$in: handle.partyIds}}); //find latest aggregate
      }
    }
  },
  partiesIds: {
    type: Array,
    optional: true,
    defaultValue: [],
    label: "Parties",
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
    resolveAs: {
      fieldName: 'partys',
      type: '[Party]',
      relation: 'hasMany'
    }
  },*/
  /*parties: {
    type: String,
    optional: true,
    defaultValue: "",
    canRead: ['admins'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
  }*/
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
