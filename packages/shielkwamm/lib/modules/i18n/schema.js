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
    defaultValue: "basic",
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  description: {
    type: String,
    optional: true,
    defaultValue: "The basic glyphs of _sh_.",
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  glyphSet: {
    type: String,
    optional: false,
    defaultValue: "☰ ☳ ☲ ☷ ☱ ☵ ☶ ☴ | ↑↓‾ | ◯ ⚬ ⬤ ф | △ ▵ | ☸ 当 Ω | ✔ 🔬 💻 🌈",
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  wikiUrl: {
    type: String,
    optional: false,
    defaultValue: "https://github.com/Shielkwamm/one_Z-rk/wiki/Glyphs",
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  i18nRooms: {
    label: "i18nRooms",
    type: String,
    hidden: true,
    optional: true,
    canRead: ['guests'],
    resolveAs: {
      fieldName: 'i18nRooms',
      type: '[I18nRoom]',
      relation: 'hasMany',
      //arguments: 'filterDir: Int = -1, filterColumn: String = "volume24"',
      resolver: (i18n, {filterDir, filterColumn}, context) => {
        return context.I18nRooms.find({i18nId: i18n._id}).fetch();
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

/*

  up: {
    type: String,
    optional: false,
    defaultValue: "áéḱḿí",
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  upName: {
    type: String,
    optional: false,
    defaultValue: "Arbitrati0r",
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  down: {
    type: String,
    optional: false,
    defaultValue: "ŃńÓóÔô",
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  downName: {
    type: String,
    optional: false,
    defaultValue: "Complicat0r",
    defaultValue: "ŃńÓóÔô",
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  left: {
    type: String,
    defaultValue: "Òòìḱ",
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  leftName: {
    type: String,
    defaultValue: "Em0ti0n",
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  right: {
    type: String,
    defaultValue: "Ööï",
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  rightName: {
    type: String,
    defaultValue: "Intigat0r",
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  */