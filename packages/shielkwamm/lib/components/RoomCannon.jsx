import React from 'react';
import { Components, registerComponent, withSingle2 } from 'meteor/vulcan:core';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

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
        <Components.SmartForm collectionName='Messages' fields={["text"]} prefilledProps={{roomId: document._id}}/>

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