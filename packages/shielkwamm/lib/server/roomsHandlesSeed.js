import Handles from '../modules/handle/collection.js';
import { createMutator } from 'meteor/vulcan:core';
import Rooms from '../modules/room/collection.js';
import RoomHandles from '../modules/roomHandle/collection.js'

Meteor.startup(() => {
  if(RoomHandles.find().count() === 0) {
    roomsHandlesSeed.forEach(rh => {
     let handle = Handles.findOne({name: rh.name});
     if(!handle) {
       console.log("### " + rh.name + " not found ")
       return;
     }
     rh.rooms.forEach(room => {
      let r = Rooms.findOne({name: room.name})
      if(!r) {
        console.log("### " + room.name + " not found ");
      }
      RoomHandles.insert({
        roomId: r._id,
        handleId: handle._id,
        isMod: room.isMod,
        isCannon: room.isCannon,
        isDJ: room.isDJ,
        createdAt: new Date()
      })
     })
   })
  }
});

const roomsHandlesSeed = [
{
  handleName: "Arbitrat0r",
  rooms: [
    {name: "operat0r", isMod: true, isDJ: false, isCannon: true},
    {name: "△USA△", isMod: true, isDJ: false, isCannon: true}
  ],
},
{
  handleName: "Informati0n",
  rooms: [
    {name: "operat0r", isMod: false, isDJ: false, isCannon: true},
    {name: "△USA△", isMod: false, isDJ: false, isCannon: true}
  ]
},
{
  handleName: "chatb0t",
  rooms: [
    {name: "operat0r", isMod: false, isDJ: false, isCannon: true},
    {name: "△USA△", isMod: false, isDJ: false, isCannon: true}
  ]
},
{
  handleName: "Admin",
  rooms: [
    {name: "operat0r", isMod: true, isDJ: true, isCannon: true},
    {name: "△USA△", isMod: true, isDJ: true, isCannon: true}
  ]
}
]