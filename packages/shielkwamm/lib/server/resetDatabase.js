import { getCollection } from 'meteor/vulcan:lib';

const ColorSchemes = getCollection('ColorSchemes');
const I18ns = getCollection('I18ns');

const Equipment = getCollection('Equipment');

const Handles = getCollection('Handles');
const RoomsHandles = getCollection('RoomsHandles');
const RoomsI18ns = getCollection('RoomsI18ns')

const Rooms = getCollection('Rooms');

const Parties = getCollection('Parties');
const PartiesI18ns = getCollection('PartiesI18ns');
const PartiesHandles = getCollection('PartiesHandles');

const Currencies = getCollection('Currencies');

const CurrenciesActors = getCollection('CurrenciesActors');

const Shs = getCollection('Shs');

const Messages = getCollection('Messages');

import { addI18ns } from './i18nsSeed';
import { addParties } from './partiesSeed';
import { addColorSchemes } from './colorSchemesSeed';
import { addHandles } from './handlesSeed';
import { addRooms } from './roomsSeed';
import { addCurrencies } from './currenciesSeed';
import { addEquipment } from './equipmentsSeed';

Meteor.methods({
  'resetDatabase'() {
    Parties.remove({});
    PartiesI18ns.remove({});
    PartiesHandles.remove({});
    ColorSchemes.remove({});
    I18ns.remove({});
    Handles.remove({});
    Rooms.remove({});
    Equipment.remove({});
    Currencies.remove({});
    CurrenciesActors.remove({});
    Shs.remove({});
    RoomsI18ns.remove({});
    RoomsHandles.remove({});
    Messages.remove({});

    //order sensitive
    addColorSchemes();
    addCurrencies();
    addEquipment();
    addI18ns();
    addParties();
    addHandles();
    addRooms();
    
  }
})