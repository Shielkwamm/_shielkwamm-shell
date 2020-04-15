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
  messageDelay: {
    type: String,
    defaultValue: 2,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
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
  slug: {
    type: String,
    optional: false,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  description: {
    type: String,
    optional: true,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
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
  currentExpPoints: {
    type: String,
    optional: false,
    defaultValue: "0",
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  totalExpPoints: {
    type: String,
    optional: false,
    defaultValue: "50",
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  level: {
    type: String,
    optional: false,
    defaultValue: "0",
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  maxLevel: {
    type: String,
    optional: false,
    defaultValue: "5",
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  zork: { // +☰
    type: String,
    optional: false,
    defaultValue: "+☰",
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  bwam: { // ◯++
    type: String, 
    optional: false,
    defaultValue: "◯",
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  vibe: {
    type: String,
    optional: false,
    defaultValue: "↑↑⬤",
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  _sh_: { //+△+
    type: String,
    optional: false,
    defaultValue: "△",
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  currentMusicUrl: {
    type: String,
    optional: false,
    defaultValue: "https://www.youtube.com/watch?v=HxAYJdLXgZo",
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  currentMusicTitle: {
    type: String,
    defaultValue: "Marble Madness Remix (2009)",
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  areDJMessagesMuted: {
    type: Boolean,
    optional: true,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  areCannonMessagesMuted: {
    type: Boolean,
    optional: true,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
};

export default schema;

/*
i18nIds.$': {
    //label: "i18nIds",
    type: String,
    optional: true,
    canRead: ['guests'],
    /*resolveAs: {
      //fieldName: 'i18n',
      //type: 'I18n',
      //relation: 'hasMany',
      //arguments: 'filterDir: Int = -1, filterColumn: String = "volume24"',
      resolver: (handle, args, context) => {
        //change to graphql query later
        return context.I18ns.find({_id: {$in: room.i18nIds}}); //find latest aggregate
      }
    }
  },
  /*i18nIds: {
    type: Array,
    optional: true,
    defaultValue: [],
    label: "i18n",
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
    /*control: 'select',
    options: () => {
      return [
        {
          value: 'object-key',
          label: 'Market pair in object key',
        },
        {
          value: 'object-array',
          label: 'Market pair in object value'
        }
      ];
    },
    resolveAs: {
      fieldName: 'i18ns',
      type: '[I18n]',
      relation: 'hasMany'
    }
  },
  
  */
