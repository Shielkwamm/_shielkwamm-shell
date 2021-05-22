import { createMutator } from 'meteor/vulcan:core';
import { getCollection } from 'meteor/vulcan:lib';

export function addColorSchemes() {
  const ColorSchemes = getCollection('ColorSchemes');
  //need headers because of non expect serving of json data
  const options = {header : {'Content-Type' : 'application/json; charset=UTF-8'}};
  //##OPS: how to put this root url in env variables
  const res = HTTP.get('https://raw.githubusercontent.com/Shielkwamm/shielkwamm-state/main/colorSchemes/data.json', options);//, (error, res) => {
    const colorSchemesData = JSON.parse(res.content);

    colorSchemesData.forEach(colorScheme => {
      colorScheme.createdAt = new Date();
      ColorSchemes.insert(colorScheme);
    });
  //});
}