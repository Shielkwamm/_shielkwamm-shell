import React from 'react';
import { Components, registerComponent, withSingle2, withMulti2 } from 'meteor/vulcan:core';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

const RoomCannonMessagesInner = ({ loading, results, linkColor, backgroundColor, color }) => (
  <React.Fragment>
  {!loading && results.map(message =>
    <div key={message._id}>
       <p><span style={{color: linkColor}}>edit</span> {new Date(message.createdAt).toLocaleTimeString()}: {message.text}</p>
    </div>
  )}
  </React.Fragment>
);

const messagesOptions = {
  collectionName: "Messages",
  fragmentName: 'MessagesFragment', // uncomment on #Step11
  pollInterval: .1
}

registerComponent({ name: 'RoomCannonMessagesInner', component: RoomCannonMessagesInner, hocs: [[withMulti2, messagesOptions]]});

const RoomCannonMessages = ({ roomId, linkColor, backgroundColor, color }) => (
  <Components.RoomCannonMessagesInner linkColor={linkColor} color={color} backgroundColor={backgroundColor} input={{filter: {roomId: {_eq: roomId}}}}/>
);

registerComponent({ name: 'RoomCannonMessages', component: RoomCannonMessages});

const RoomCannonInner = ({ loading, document }) => (
  <React.Fragment>
    {loading ? (
      null
    ) : (
      <div>
        <Components.RoomHeader room={document}/>
        <Components.HeadTags title={`Cannon: ${document.name}`}/>
        <Components.SmartForm collectionName="Rooms" documentId={document._id} fields={["_sh_"]}/>
        <Components.SmartForm collectionName="Rooms" documentId={document._id} fields={["zork"]}/>
        <Components.SmartForm collectionName="Rooms" documentId={document._id} fields={["currentExpPoints", "level"]}/>
        <hr></hr>
        <Components.SmartForm collectionName='Messages' fields={["text"]} prefilledProps={{roomId: document._id}}/>
        <Components.RoomCannonMessages roomId={document._id} linkColor={document.linkColor} color={document.color} backgroundColor={document.color}/>
      </div>
    )}
  </React.Fragment>
)

const options = {
  collectionName: "Rooms",
  fragmentName: 'RoomsFragment', // uncomment on #Step11
}

registerComponent( {name: 'RoomCannonInner', component: RoomCannonInner, hocs: [[withSingle2, options]]})

const RoomCannon = ({ match }) => (
  <Components.RoomCannonInner input={{selector: {slug: match.params.slug}}}/>
);

registerComponent({ name: 'RoomCannon', component: RoomCannon, hocs: [withRouter]});