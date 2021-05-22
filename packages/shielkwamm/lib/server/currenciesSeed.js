import { createMutator } from 'meteor/vulcan:core';
import { getCollection } from 'meteor/vulcan:lib';

export function addCurrencies() {
  const Currencies = getCollection('Currencies');
  const ColorSchemes = getCollection('ColorSchemes');
  const options = {header : {'Content-Type' : 'application/json; charset=UTF-8'}};

  const res = HTTP.get('https://raw.githubusercontent.com/Shielkwamm/shielkwamm-state/main/currencies/data.json', options);  
  const currenciesData = JSON.parse(res.content);

  currenciesData.forEach(currency => {
    let colorScheme = ColorSchemes.findOne({name: currency.colorScheme});
    if(!colorScheme) {
      console.log('###currency-colorscheme: ' + currency.colorScheme + ' not found ')
      return;
    }
    currency.colorSchemeId = colorScheme._id;
    currency.createdAt = new Date();
    Currencies.insert(currency);
  })
}