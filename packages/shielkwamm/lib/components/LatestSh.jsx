import React from 'react';
import { Components, registerComponent, withSingle2 } from 'meteor/vulcan:core';
import { Link } from 'react-router-dom';

const LatestSh = ({ loading, document }) => (
  <React.Fragment>
    {!loading ? (
      <React.Fragment>
        <Components.HeadTags title={document.leftBumper + " " + document.text + " " + document.rightBumper}/>
        <Components.Sh sh={document}/>
      </React.Fragment>
    ) : null}
  </React.Fragment>
)

const options = {
  collectionName: "Shs",
  fragmentName: 'best_sh_',
  input: {sort: {createdAt: "desc"}}
}

registerComponent({ name: 'LatestSh', component: LatestSh, hocs: [[withSingle2, options]]});