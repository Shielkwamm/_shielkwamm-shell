import React from 'react';
import { Components, registerComponent, withMulti2 } from 'meteor/vulcan:core';

const GameMessages = ({ loading, results, gameId}) => (
  <div className="movies-list">
    <Components.SmartForm collectionName='Messages' fields={["text"]}/>
    {!loading && results.map(message => 
      <div>Rest of messages</div>
    )}
  </div>
);

const options = {
  collectionName: "Messages",
  fragmentName: 'MessagesFragment', // uncomment on #Step11
}

registerComponent({ name: 'GameMessages', component: GameMessages, hocs: [[withMulti2, options]]});