import Handles from '../modules/handle/collection.js';
import { createMutator } from 'meteor/vulcan:core';
import Rooms from '../modules/room/collection.js';
import RoomHandles from '../modules/roomHandle/collection.js'

Meteor.startup(() => {
  if(RoomHandles.find().count() === 0) {
    roomsHandlesSeed.forEach(rh => {
     let handle = Handles.findOne({name: rh.handleName});
     if(!handle) {
       console.log("###rh handle " + rh.name + " not found ", rh)
       return;
     }
     rh.rooms.forEach(room => {
      let r = Rooms.findOne({name: room.name})
      if(!r) {
        console.log("###rh room " + room.name + " not found ", room);
        return;
      }
      RoomHandles.insert({
        roomId: r._id,
        handleId: handle._id,
        isMod: !!room.isMod,
        isCannon: !!room.isCannon,
        isDJ: !!room.isDJ,
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
    {name: "operat0r"},
    {name: "△USA△"}
  ],
},
{
  handleName: "Inf0rmation",
  rooms: [
    {name: "operat0r"},
    {name: "△USA△"}
  ]
},
{
  handleName: "chatb0t",
  rooms: [
    {name: "operat0r"},
    {name: "△USA△"}
  ]
},
{
  handleName: "Admin",
  rooms: [
    {name: "operat0r"},
    {name: "△USA△"}
  ]
},
{
  handleName: "MrPeanut",
  rooms: [
    {name: "△USA△", isMod: true}
  ]
},
{
  handleName: "FishyFishy",
  rooms: [
    {name: 'operat0r'} 
  ]
},
{
  handleName: "Slipurrrrs",
  rooms: [
    {name: "△USA△", isMod: true, isDJ: true }
  ]
},
{
  handleName: "Truss BaVeriphi",
  rooms: [
    {name: "△USA△" }
  ]
},
{
  handleName: "MrHanky",
  rooms: [
    {name: "△USA△", isCannon: true, isDJ: true}
  ]
},
{
  handleName: "SandStorm",
  rooms: [
    {name: "operat0r", isDJ: true}
  ]
}
]