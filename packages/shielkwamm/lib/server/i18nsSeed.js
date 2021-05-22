import { getCollection } from 'meteor/vulcan:lib';

export function addI18ns() {
  const I18ns = getCollection('I18ns');
  const options = {header : {'Content-Type' : 'application/json; charset=UTF-8'}};
  const res = HTTP.get('https://raw.githubusercontent.com/Shielkwamm/shielkwamm-state/main/i18ns/data.json', options);
  const i18nsData = JSON.parse(res.content);

  i18nsData.forEach(i18n => {
    i18n.createdAt = new Date();
    I18ns.insert(i18n);
  });
}