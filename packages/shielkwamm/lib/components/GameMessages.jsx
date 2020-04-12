import React from 'react';
import { Components, registerComponent, withMulti2 } from 'meteor/vulcan:core';

const GameMessagesInner = ({ loading, results }) => (
  <React.Fragment>
  {!loading && results.map(message => 
    <div key={message._id}>{message.createdAt}: {message.text}</div>
  )}
  </React.Fragment>
)

const options = {
  collectionName: "Messages",
  fragmentName: 'MessagesFragment', // uncomment on #Step11
}

registerComponent({ name: 'GameMessagesInner', component: GameMessagesInner, hocs: [[withMulti2, options]]});

const GameMessages = ({ gameId }) => (
  <Components.GameMessagesInner input={{filter: {gameId: {_eq: gameId}}}}/>
);

registerComponent({ name: 'GameMessages', component: GameMessages});