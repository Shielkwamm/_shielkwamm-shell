import { createMutator } from 'meteor/vulcan:core';
import { getCollection } from 'meteor/vulcan:lib';

export function addRooms() {
  const Rooms = getCollection('Rooms');
  const ColorSchemes = getCollection('ColorSchemes');
  const Handles = getCollection('Handles');
  const RoomsHandles = getCollection('RoomsHandles');
  const RoomsI18ns = getCollection('RoomsI18ns');
  const I18ns = getCollection('I18ns');
  const options = {header : {'Content-Type' : 'application/json; charset=UTF-8'}};
  
  const res = HTTP.get('https://raw.githubusercontent.com/Shielkwamm/shielkwamm-state/main/rooms/data.json', options);
  const roomsData = JSON.parse(res.content);
  //console.log(roomsData)
  roomsData.forEach(room => {
    room.createdAt = new Date();
    let colorScheme = ColorSchemes.findOne({name: room.colorScheme});
    room.colorSchemeId = colorScheme._id;
    let roomId = Rooms.insert(room);
    room.i18ns.forEach(ir => {
      let i = I18ns.findOne({name: ir.name})
      if(!i) {
        console.log('###irc ' + ir.name + ' not found ');
        return;
      }
      RoomsI18ns.insert({
        i18nId: i._id,
        roomId: roomId,
        createdAt: new Date()
      });
    });

    room.handles.forEach(h => {

    let handle = Handles.findOne({name: h.name});
    if(!handle) {
      console.log('###rh handle ' + h.name + ' not found ', h)
      return;
    }
    
    RoomsHandles.insert({
      roomId: roomId,
      handleId: handle._id,
      isMod: !!h.isMod,
      isCannon: !!h.isCannon,
      isDJ: !!h.isDJ,
      createdAt: new Date()
    });
    });
  });
}

