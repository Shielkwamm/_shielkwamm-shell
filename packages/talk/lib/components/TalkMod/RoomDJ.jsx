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
        <Components.SmartForm showRemove={false} collectionName="Rooms" documentId={document._id} fields={["areDJMessagesMuted"]}/>
        <Components.SmartForm showRemove={false} collectionName="Rooms" documentId={document._id} fields={["bwam"]}/>
        <Components.SmartForm showRemove={false} collectionName="Rooms" documentId={document._id} fields={["vibe"]}/>
        <Components.SmartForm showRemove={false} collectionName="Rooms" documentId={document._id} fields={["currentMusicUrl", "currentMusicTitle"]}/>
      </div>
    )}
  </React.Fragment>
)

const options = {
  collectionName: "Rooms",
  fragmentName: 'RoomBase',
}
//<Components.RoomHeader room={document}/>
registerComponent( {name: 'RoomDJInner', component: RoomDJInner, hocs: [[withSingle2, options]]})

const RoomDJ = ({ match }) => (
  <Components.RoomDJInner input={{selector: {slug: match.params.slug}}}/>
);

registerComponent({ name: 'RoomDJ', component: RoomDJ, hocs: [withRouter]});