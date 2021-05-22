import { getCollection } from 'meteor/vulcan:lib';
import { createMutator } from 'meteor/vulcan:core';
    
export function addHandles() {
  const Handles = getCollection('Handles');
  const Currencies = getCollection('Currencies')
  const CurrenciesActors = getCollection('CurrenciesActors');
  const Parties = getCollection('Parties');
  const PartiesHandles = getCollection('PartiesHandles');

  const options = {header : {'Content-Type' : 'application/json; charset=UTF-8'}};

  const res = HTTP.get('https://raw.githubusercontent.com/Shielkwamm/shielkwamm-state/main/handles/data.json', options);
  const handlesData = JSON.parse(res.content);
  
  handlesData.forEach(handle => {
    handle.createdAt = new Date();
    handle.inventory = handle.inventory || [];
    let handleCurrencies = handle.currencies;
    let handleParties = handle.parties;
    handle.currencies = [];
    handle.parties = [];
    let handleId = Handles.insert(handle);

    handleParties && handleParties.forEach(party => {
      let p = Parties.findOne({name: party.name})
      if(!p) {
        console.log('###hp party ' + party.name + ' not found ', party);
        return;
      }
      PartiesHandles.insert({
        partyId: p._id,
        handleId: handleId,
        isMod: !!party.isMod,
        createdAt: new Date()
      })
    })


    handleCurrencies && handleCurrencies.forEach(hc => {
      let currency = Currencies.findOne({glyph: hc.glyph});
      if(!currency) {
        console.log('====  Couldn\'t find currency', hc.glyph)
        return;
      }
      CurrenciesActors.insert({ 
        handleId: handleId,
        currencyId: currency._id,
        amount: hc.amount,
        mood: hc.mood,
        note: hc.note,
        label: hc.label,
        createdAt: new Date() 
      })
    })
  })
  
}