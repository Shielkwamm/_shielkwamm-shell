import React from 'react';
import { Components, registerComponent, withSingle2 } from 'meteor/vulcan:core';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

const RoomModInner = ({ loading, document }) => (
  <React.Fragment>
    {!loading && document ? (
      <React.Fragment>
        <Components.RoomHeader room={document}/>
        <Components.SmartForm showRemove={false} collectionName="Rooms" documentId={document._id} fields={["name"]}/>
        <Components.SmartForm collectionName='Messages' fields={["text"]} prefilledProps={{roomId: document._id}}/>
        <Components.SmartForm showRemove={false} collectionName="Rooms" documentId={document._id} fields={["currentExpPoints", "level"]}/>
        <Components.SmartForm showRemove={false} collectionName="Rooms" documentId={document._id} fields={["zork"]}/>
        <Components.SmartForm showRemove={false} collectionName="Rooms" documentId={document._id} fields={["bwam"]}/>
        <Components.SmartForm showRemove={false} collectionName="Rooms" documentId={document._id} fields={["_sh_"]}/>
        <Components.SmartForm showRemove={false} collectionName="Rooms" documentId={document._id} fields={["vibe"]}/>
        <Components.SmartForm showRemove={false} collectionName="Rooms" documentId={document._id} fields={["currentMusicUrl", "currentMusicTitle"]}/>
      </React.Fragment>
    ): null}
  </React.Fragment>
)

const options = {
  collectionName: "Rooms",
  fragmentName: 'RoomsList',
}

registerComponent( {name: 'RoomModInner', component: RoomModInner, hocs: [[withSingle2, options]]})

const RoomMod = ({ match }) => (
  <Components.RoomModInner input={{selector: {slug: match.params.slug}}}/>
);

registerComponent({ name: 'RoomMod', component: RoomMod, hocs: [withRouter]});