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
    canRead: ['guests']
  },
  level: {
    type: Number,
    optional: false,
    defaultValue: 0
  },
  maxLevel: {
    type: Number,
    optional: false,
    defaultValue: 5
  },
  totalExpPoints: {
    type: Number,
    optional: false,
    defaultValue: 50
  },
  bwam: { // ◯++
    type: String, 
    optional: false,
    defaultValue: "◯" 
  },
  shiel: { //+△+
    type: String,
    optional: false,
    defaultValue: "△" 
  }
};

export default schema;
