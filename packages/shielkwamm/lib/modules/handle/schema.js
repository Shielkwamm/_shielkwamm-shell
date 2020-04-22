import { createSchema } from 'meteor/vulcan:core';

const currencySchema = createSchema({
  currencyId: {
    type: String,
    optional: true,
    canRead: ['guests'],
    resolveAs: {
      fieldName: 'currency',
      type: '[Currency]',
      relation: 'hasOne',
      resolver: (currency, {filterDir, filterColumn}, context) => {
        return context.Currency.findOne({currencyId: currency});
      }
    }
  },
  amount: {
    type: Number,
    optional: true,
    canRead: ['guests']
  }
})

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
  },
  parties: {
    label: "Parties",
    type: String,
    hidden: true,
    optional: true,
    canRead: ['guests'],
    resolveAs: {
      fieldName: 'parties',
      type: '[HandleParty]',
      relation: 'hasMany',
      resolver: (handle, args, context) => {
        return context.HandleParties.find({handleId: handle._id}).fetch();
      }
    }
  },
  connectionStatus: {
    label: "Connection Status",
    type: String,
    optional: false,
    canRead: ['guests'],
    defaultValue: "~"
  },
  currencies: {
    label: "Currencies",
    type: String,
    hidden: true,
    optional: true,
    canRead: ['guests'],
    resolveAs: {
      fieldName: 'currencies',
      type: '[HandleCurrency]',
      relation: 'hasMany',
      resolver: (handle, args, context) => {
        return context.HandleCurrencies.find({handleId: handle._id}).fetch();
      }
    }
  },
  
};

export default schema;