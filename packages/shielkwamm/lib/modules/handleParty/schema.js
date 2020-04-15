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
  partyId: {
    type: String,
    optional: true,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
    resolveAs: {
      fieldName: "party",
      type: "Party",
      relation: 'hasOne'
    },
    //addOriginalField: true
  },
  /*party: {
    label: "Party",
    type: String,
    hidden: true,
    optional: true,
    canRead: ['guests'],
    resolveAs: {
      fieldName: 'party',
      type: '[Party]',
      relation: 'hasOne',
      arguments: 'filterDir: Int = -1, filterColumn: String = "volume24"',
      resolver: (handleParty, {filterDir, filterColumn}, context) => {
        //console.log("handle ", handleParty, context.Parties.findOne({_id: handleParty.partyId}))
        return context.Parties.find({_id: handleParty.partyId}).fetch();
      }
    }
  },*/
  /*handle: {

  },*/
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
  isMod: {
    type: Boolean,
    optional: true,
    defaultValue: false,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
  }
  
};

export default schema;

