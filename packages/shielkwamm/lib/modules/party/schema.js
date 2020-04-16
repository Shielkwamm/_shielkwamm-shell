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
  colorSchemeId: {
    label: "colorScheme",
    type: String,
    optional: true,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
    resolveAs: {
      field: "colorScheme",
      type: '[ColorScheme]',
      relation: "hasOne"
    }
  },
  description: {
    type: String,
    optional: true,
    canRead: ['admins'],
    canUpdate: ['admins'],
    canCreate: ['admins'],
    input: 'textarea'
  },
  isActive: {
    type: Boolean,
    optional: true,
    defaultValue: true,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  mood: {
    type: String,
    optional: true,
    canRead: ['admins'],
    canUpdate: ['admins'],
    canCreate: ['admins']
  },
  isEsteemed: {
    type: Boolean,
    optional: true,
    defaultValue: false,
    canRead:['guests'],
    canUpdate: ['admins'],
    canCreate: ['admins']
  },
  handles: {
    label: "Handles",
    type: String,
    hidden: true,
    optional: true,
    canRead: ['guests'],
    resolveAs: {
      fieldName: 'handles',
      type: '[HandleParty]',
      relation: 'hasMany',
      resolver: (party, args, context) => {
        return context.HandleParties.find({partyId: party._id}).fetch();
      }
    }
  },
  connectionStatus: {
    type: String,
    optional: true,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
    defaultValue: "~"
  },

  i18ns: {
    label: "partyI18ns",
    type: String,
    hidden: true,
    optional: true,
    canRead: ['guests'],
    resolveAs: {
      fieldName: 'partyI18ns',
      type: '[PartyI18n]',
      relation: 'hasMany',
      //arguments: 'filterDir: Int = -1, filterColumn: String = "volume24"',
      resolver: (room, {filterDir, filterColumn}, context) => {
        return context.PartyI18ns.find({partyId: party._id}).fetch();
      }
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
