import React from 'react';
import { Components, registerComponent, withSingle2 } from 'meteor/vulcan:core';
import { withRouter } from 'react-router';

const RoomInformationInner = ({ loading, document }) => (
  <React.Fragment>
    {loading ? (
      null
    ) : (
      <div>
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
  fragmentName: 'RoomsFragment', // uncomment on #Step11
}

registerComponent( {name: 'RoomInformationInner', component: RoomInformationInner, hocs: [[withSingle2, options]]})

const RoomInformation = ({ match }) => (
  <Components.RoomInformationInner input={{selector: {slug: match.params.slug}}}/>
);


//<Components.CryptoMarketPairsInner input={{filter: {left: {_eq: crypto.exchangeSymbol}}, sort: {[filterColumn]: filterDir}}} showIn={showIn}/>

registerComponent({ name: 'RoomInformation', component: RoomInformation, hocs: [withRouter]});



//<Components.RoomMessages document={match.slug} />

/*
     level
     maxLevel
     totalExpPoints
     bwam
     */