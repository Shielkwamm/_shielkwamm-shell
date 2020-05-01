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
    type: String,
    optional: true,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
    resolveAs: {
      fieldName: "colorScheme",
      type: 'ColorScheme',
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
  partyHandles: {
    label: "Handles",
    type: String,
    hidden: true,
    optional: true,
    canRead: ['guests'],
    resolveAs: {
      fieldName: 'partyHandles',
      type: '[PartyHandle]',
      relation: 'hasMany',
      resolver: (party, args, context) => {
        return context.PartiesHandles.find({partyId: party._id}).fetch();
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

  partyI18ns: {
    label: "Party I18ns",
    type: String,
    hidden: true,
    optional: true,
    canRead: ['guests'],
    resolveAs: {
      fieldName: 'partyI18ns',
      type: '[PartyI18n]',
      relation: 'hasMany',
      resolver: (party, args, context) => {
        return context.PartiesI18ns.find({partyId: party._id}).fetch();
      }
    }
  }
};

export default schema;
