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
    defaultValue: 0,
    canRead: ['guests']
  },
  maxLevel: {
    type: Number,
    optional: false,
    defaultValue: 5,
    canRead: ['guests']
  },
  totalExpPoints: {
    type: Number,
    optional: false,
    defaultValue: 50,
    canRead: ['guests']
  },
  bwam: { // ◯++
    type: String, 
    optional: false,
    defaultValue: "◯" ,
    canRead: ['guests']
  },
  shiel: { //+△+
    type: String,
    optional: false,
    defaultValue: "△" ,
    canRead: ['guests']
  }
};

export default schema;
