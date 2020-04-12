import React from 'react';
import { Components, registerComponent, withMulti2 } from 'meteor/vulcan:core';

const GameMessages = ({ loading, results }) => (
  <div className="movies-list">
    {!loading && results.map(message) (
      <div>one message here</div>
    )}
  </div>
);

const options = {
  collectionName: "Messages",
  fragmentName: 'MessagesFragment', // uncomment on #Step11
}

registerComponent({ name: 'GameMessages', component: GameMessages, hocs: [[withMulti2, options]]});