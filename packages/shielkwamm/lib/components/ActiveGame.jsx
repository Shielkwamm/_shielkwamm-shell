import React from 'react';
import { Components, registerComponent, withSingle2 } from 'meteor/vulcan:core';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

const ActiveGameInner = ({ loading, document }) => (
  <React.Fragment>
    {loading ? (
      null
    ) : (
      <div>
      <h3 >{document.name}<span style={{float: "right"}}> <Link to="/">{document.zork}</Link> : <Link to="/">{document._sh_}</Link> : <Link to="/">{document.bwam}</Link> </span></h3>
      <p>{document.currentExpPoints} / {document.totalExpPoints} △ | {document.level} / {document.maxLevel} ☸ <a href={document.currentMusicUrl} target={"_blank"}><span style={{float: "right"}}>{document.currentMusicName}</span></a></p>
      <hr></hr>
        <Components.SmartForm collectionName='Messages' fields={["text"]} prefilledProps={{gameId: document._id}}/>
        <Components.GameMessages gameId={document._id}/>
      </div>
    )}
  </React.Fragment>
)

const options = {
  collectionName: "Games",
  fragmentName: 'GamesFragment', // uncomment on #Step11
}

registerComponent( {name: 'ActiveGameInner', component: ActiveGameInner, hocs: [[withSingle2, options]]})

const ActiveGame = ({ match }) => (
  <Components.ActiveGameInner input={{selector: {slug: match.params.slug}}}/>
);


//<Components.CryptoMarketPairsInner input={{filter: {left: {_eq: crypto.exchangeSymbol}}, sort: {[filterColumn]: filterDir}}} showIn={showIn}/>

registerComponent({ name: 'ActiveGame', component: ActiveGame, hocs: [withRouter]});



//<Components.GameMessages document={match.slug} />

/*
     level
     maxLevel
     totalExpPoints
     bwam
     */