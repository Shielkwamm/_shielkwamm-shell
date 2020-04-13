import React from 'react';
import { Components, registerComponent, withSingle2 } from 'meteor/vulcan:core';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

const RoomRoomInner = ({ loading, document }) => (
  <React.Fragment>
    {loading ? (
      null
    ) : (
      <div>
        <Components.SmartForm collectionName='Messages' fields={["text"]} prefilledProps={{roomId: document._id}}/>
        <Components.SmartForm collectionName="Rooms" documentId={document._id} fields={["currentExpPoints", "level"]}/>
        <Components.SmartForm collectionName="Rooms" documentId={document._id} fields={["zork"]}/>
        <Components.SmartForm collectionName="Rooms" documentId={document._id} fields={["bwam"]}/>
        <Components.SmartForm collectionName="Rooms" documentId={document._id} fields={["_sh_"]}/>
        <Components.SmartForm collectionName="Rooms" documentId={document._id} fields={["vibe"]}/>
        <Components.SmartForm collectionName="Rooms" documentId={document._id} fields={["currentMusicUrl", "currentMusicTitle"]}/>
      </div>
    )}
  </React.Fragment>
)

const options = {
  collectionName: "Rooms",
  fragmentName: 'RoomsFragment', // uncomment on #Step11
}

registerComponent( {name: 'RoomRoomInner', component: RoomRoomInner, hocs: [[withSingle2, options]]})

const RoomRoom = ({ match }) => (
  <Components.RoomRoomInner input={{selector: {slug: match.params.slug}}}/>
);

registerComponent({ name: 'RoomRoom', component: RoomRoom, hocs: [withRouter]});