const schema = {

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
    defaultValue: "Ol' Glory",
    canRead: ['guests'],
    canUpdate: ['admins'],
    canCreate: ['admins']
  },
  color: {
    type: String,
    optional: false,
    defaultValue: "#000000",
    canRead: ['guests'],
    canUpdate: ['admins'],
    canCreate: ['admins']
  },
  backgroundColor: {
    type: String,
    optional: false,
    defaultValue: "#FFFFFF",
    canRead: ['guests'],
    canUpdate: ['admins'],
    canCreate: ['admins']
  },
  linkColor: {
    type: String,
    optional: false,
    defaultValue: "#A1A1A1",
    canRead: ['guests'],
    canUpdate: ['admins'],
    canCreate: ['admins']
  },
  altColor: {
    type: String,
    optional: false,
    defaultValue: "#A1A1A1",
    canRead: ['guests'],
    canUpdate: ['admins'],
    canCreate: ['admins']
  }  
};

export default schema;
