import React from 'react';
import { Components, registerComponent, withMulti2 } from 'meteor/vulcan:core';

const LatestSh = ({ loading, results }) => (
  <React.Fragment>
    {!loading && results.map( sh => (
      <React.Fragment key={sh._id}>
        <Components.HeadTags title={sh.leftBumper + " " + sh.text + " " + sh.rightBumper}/>
        <Components.Sh sh={sh}/>
      </React.Fragment>
    ))}
    {!loading && results.length === 0 ? (
      <h1 style={{textAlign: "center"}}>=== Shielkwȃmm ===</h1>
    ): null}
  </React.Fragment>
)

const options = {
  collectionName: "Shs",
  fragmentName: 'ShBest',
  input: {sort: {createdAt: "desc"}, limit: 1}
}

registerComponent({ name: 'LatestSh', component: LatestSh, hocs: [[withMulti2, options]]});