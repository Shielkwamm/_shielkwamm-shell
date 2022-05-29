import Equipment from '../modules/equipment/collection.js';
import { createMutator } from 'meteor/vulcan:core';


export function addEquipment() {
  const options = {header : {'Content-Type' : 'application/json; charset=UTF-8'}};
  const res = HTTP.get('https://raw.githubusercontent.com/Shielkwamm/sh-things/main/equipments/data.json', options);  
  const equipmentData = JSON.parse(res.content);
  
  equipmentData.forEach(equipment => {
    equipment.createdAt = new Date();
    Equipment.insert(equipment);
  });
}