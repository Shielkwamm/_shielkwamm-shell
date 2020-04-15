import I18ns from '../modules/i18n/collection.js';
import Rooms from '../modules/room/collection.js';
import I18nRooms from '../modules/i18nRoom/collection.js'

Meteor.startup(() => {
  if(I18nRooms.find().count() === 0) {
    i18nsRoomsSeed.forEach(ir => {
     let room = Rooms.findOne({name: ir.roomName});
     if(!room) {
       console.log("###ir " + ir.roomName + " not found ", ir)
       return;
     }
     ir.i18ns.forEach(i18n => {
      let i = I18ns.findOne({name: i18n.name})
      if(!i) {
        console.log("###irc " + i18n.name + " not found ", i18n);
        return
      }
      I18nRooms.insert({
        i18nId: i._id,
        roomId: room._id,
        //isMod: room.isMod,
        //isCannon: room.isCannon,
        //isDJ: room.isDJ,
        createdAt: new Date()
      })
     })
   })
  }
});

const i18nsRoomsSeed = [
{
  roomName: "△USA△",
  i18ns: [
    {name: "basic_US"},
    {name: "female_FM"},
    {name: "appropriate_HI"}
  ]
},
{
  roomName: "operat0r",
  i18ns: [
    {name: "basic_US"},
    {name: "admin_ME"}
  ]
}]