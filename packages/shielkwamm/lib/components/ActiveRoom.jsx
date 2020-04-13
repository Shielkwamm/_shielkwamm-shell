import React from 'react';
import { Components, registerComponent, withSingle2 } from 'meteor/vulcan:core';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

const ActiveRoomInner = ({ loading, document }) => (
  <React.Fragment>
    {loading ? (
      null
    ) : (
      <div>
      <Components.HeadTags title={`${document.zork} : ${document._sh_} : ${document.bwam}`}/>
      <h3><Link to="/rooms">⏎</Link> {document.name}<span style={{float: "right"}}>{document.currentExpPoints} / {document.totalExpPoints} △ | {document.level} / {document.maxLevel} ☸</span></h3>
      <p> <a href={document.currentMusicUrl} target={"_blank"}>{document.currentMusicTitle}</a></p>
      <hr></hr>
        <Components.RoomMessages roomId={document._id}/>
      </div>
    )}
  </React.Fragment>
)

const options = {
  collectionName: "Rooms",
  fragmentName: 'RoomsFragment', // uncomment on #Step11
}

registerComponent( {name: 'ActiveRoomInner', component: ActiveRoomInner, hocs: [[withSingle2, options]]})

const ActiveRoom = ({ match }) => (
  <Components.ActiveRoomInner input={{selector: {slug: match.params.slug}}}/>
);


//<Components.CryptoMarketPairsInner input={{filter: {left: {_eq: crypto.exchangeSymbol}}, sort: {[filterColumn]: filterDir}}} showIn={showIn}/>

registerComponent({ name: 'ActiveRoom', component: ActiveRoom, hocs: [withRouter]});



//<Components.RoomMessages document={match.slug} />

/*
     level
     maxLevel
     totalExpPoints
     bwam
     */