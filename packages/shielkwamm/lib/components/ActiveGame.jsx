import React from 'react';
import { Components, registerComponent, withSingle2 } from 'meteor/vulcan:core';
import { withRouter } from 'react-router';

const ActiveGame = ({ loading, document, match }) => (
  <div className="movies-list">
    {loading ? (
      null
    ) : (
      <div>
      <h3 >{document.name}<span style={{float: "right"}}> {document._sh_} : {document.bwam} </span></h3>
      <p>{document.currentExpPoints} / {document.totalExpPoints} △ | {document.level} / {document.maxLevel} ☸</p>
      <hr></hr>
        {match.params.slug}
      </div>
    )}
  </div>
);

const options = {
  collectionName: "Games",
  fragmentName: 'GamesFragment', // uncomment on #Step11
}

registerComponent({ name: 'ActiveGame', component: ActiveGame, hocs: [withRouter, [withSingle2, options]]});

//<Components.GameMessages document={match.slug} />

/*
     level
     maxLevel
     totalExpPoints
     bwam
     */