import React from 'react';
import { Components, registerComponent, withSingle2 } from 'meteor/vulcan:core';
import { withRouter } from 'react-router';

const RoomInformationInner = ({ loading, document }) => (
  <React.Fragment>
    {loading ? (
      null
    ) : (
      <div>
        <h2>△áìéïḱḿí△ △Ńń△ ▵ÖöÓóÒòÔôḱ▵</h2>
        <hr></hr>
        <h3>i18ns here</h3>
        {document.i18nRooms.map( ir => (
          <h2 key={ir._id}>{ir.i18n.name}</h2>
        ))}
        <hr></hr>
        <h3>handles here</h3>
        {document.roomHandles.map( rh => (
          <h2 key={rh._id}>{rh.handle.name}</h2>
        ))}
      </div>
    )}
  </React.Fragment>
)

const options = {
  collectionName: "Rooms",
  fragmentName: 'RoomsFragment',
}

registerComponent( {name: 'RoomInformationInner', component: RoomInformationInner, hocs: [[withSingle2, options]]})

const RoomInformation = ({ match }) => (
  <Components.RoomInformationInner input={{selector: {slug: match.params.slug}}}/>
);

registerComponent({ name: 'RoomInformation', component: RoomInformation, hocs: [withRouter]});