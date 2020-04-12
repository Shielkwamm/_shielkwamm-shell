import React from 'react';
import { Components, registerComponent, withMulti2 } from 'meteor/vulcan:core';

const RoomMessagesInner = ({ loading, results }) => (
  <React.Fragment>
  {!loading && results.map(message =>
    <div key={message._id}>
      <p>{new Date(message.createdAt).toLocaleTimeString('en-US')}: {message.text}</p>
    </div>
  )}
  </React.Fragment>
)

const options = {
  collectionName: "Messages",
  fragmentName: 'MessagesFragment', // uncomment on #Step11
}

registerComponent({ name: 'RoomMessagesInner', component: RoomMessagesInner, hocs: [[withMulti2, options]]});

const RoomMessages = ({ roomId }) => (
  <Components.RoomMessagesInner input={{filter: {roomId: {_eq: roomId}}}}/>
);

registerComponent({ name: 'RoomMessages', component: RoomMessages});