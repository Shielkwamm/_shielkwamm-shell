import React from 'react';
import { Components, registerComponent, withSingle2 } from 'meteor/vulcan:core';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet'

const ActiveRoomInner = ({ loading, document }) => (
  <React.Fragment>
    {!loading && document ? (
      <div>
        <Helmet><link rel="stylesheet" type="text/css" href="/usa.css"/></Helmet>
      <Components.HeadTags title={`${document.name} ▵△${document.currentExpPoints} / ${document.totalExpPoints}△▵  ☸${document.level} / ${document.maxLevel}☸`}/>
        <Components.RoomHeader room={document}/>
        <Components.RoomMessages roomId={document._id} color={document.colorScheme.color} backgroundColor={document.colorScheme.backgroundColor} linkColor={document.colorScheme.linkColor}/>
      </div>
    ): null }
  </React.Fragment>
)

const options = {
  collectionName: "Rooms",
  fragmentName: 'RoomsList',
}

registerComponent( {name: 'ActiveRoomInner', component: ActiveRoomInner, hocs: [[withSingle2, options]]})

const ActiveRoom = ({ match }) => (
  <Components.ActiveRoomInner input={{selector: {slug: match.params.slug}}}/>
);

registerComponent({ name: 'ActiveRoom', component: ActiveRoom, hocs: [withRouter]});