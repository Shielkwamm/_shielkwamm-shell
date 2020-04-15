import React from 'react';
import { Components, registerComponent, withSingle2 } from 'meteor/vulcan:core';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

const RoomDJInner = ({ loading, document }) => (
  <React.Fragment>
    {loading ? (
      null
    ) : (
      <div>
        <Components.HeadTags title={`⬤⬤⬤: ${document.name}`}/>
        <Components.RoomHeader room={document}/>
        <Components.SmartForm showRemove={false} collectionName="Rooms" documentId={document._id} fields={["areDJMessagesMuted"]}/>
        <Components.SmartForm showRemove={false} collectionName="Rooms" documentId={document._id} fields={["bwam"]}/>
        <Components.SmartForm showRemove={false} collectionName="Rooms" documentId={document._id} fields={["vibe"]}/>
        <Components.SmartForm showRemove={false} collectionName="Rooms" documentId={document._id} fields={["currentMusicUrl", "currentMusicTitle"]}/>
        <Components.SmartForm showRemove={false} collectionName="Rooms" documentId={document._id} fields={["color", "backgroundColor", "linkColor"]}/>
      </div>
    )}
  </React.Fragment>
)

const options = {
  collectionName: "Rooms",
  fragmentName: 'RoomsFragment', // uncomment on #Step11
}

registerComponent( {name: 'RoomDJInner', component: RoomDJInner, hocs: [[withSingle2, options]]})

const RoomDJ = ({ match }) => (
  <Components.RoomDJInner input={{selector: {slug: match.params.slug}}}/>
);

registerComponent({ name: 'RoomDJ', component: RoomDJ, hocs: [withRouter]});