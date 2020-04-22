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
    canRead: ['guests']
  },
  glyph: {
    type: String,
    canRead: ['guests']
  },
  description: {
    type: String,
    canRead: ['guests']
  },
  ledgerUrl: {
    type: String,
    canRead: ['guests']
  }
  
};

export default schema;
