import { getCollection } from 'meteor/vulcan:lib';
import { createMutator } from 'meteor/vulcan:core';

export function addParties() {
  const Parties = getCollection('Parties');
  const ColorSchemes = getCollection('ColorSchemes');
  const I18ns = getCollection('I18ns');
  const PartiesI18ns = getCollection('PartiesI18ns');
  const options = {header : {'Content-Type' : 'application/json; charset=UTF-8'}};

  const res = HTTP.get('https://raw.githubusercontent.com/Shielkwamm/shielkwamm-state/main/parties/data.json', options);
  const partiesData = JSON.parse(res.content);

  partiesData.forEach(party => {
    party.createdAt = new Date();
    let colorScheme = ColorSchemes.findOne({name: party.colorScheme});
    if(!colorScheme) {
      console.log('###party ' + party.colorScheme + ' not found ')
      return;
    }
    party.colorSchemeId = colorScheme._id;
    let partyId = Parties.insert(party);
    //m2m
    let standardSh = I18ns.findOne({name: 'shielkwamm_SH'});
    PartiesI18ns.insert({i18nId: standardSh._id, partyId: partyId});
    let i18ns = I18ns.find({name: {$in: party.i18ns}});
    i18ns.forEach(i18n => {
      PartiesI18ns.insert({i18nId: i18n._id, partyId: partyId, createdAt: new Date(), fluency: 0});
    });
  });
}

