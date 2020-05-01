import React from 'react';
import { Components, registerComponent, withMulti2 } from 'meteor/vulcan:core';
import { Link } from 'react-router-dom';

const i18nsList = ({ loading, results }) => (
  <div className="movies-list">
    <Components.HeadTags title={`i18n`}/>
    <h2><Link to="/">⏎ </Link>i18n <span style={{float: "right"}}>count [ {results && results.length} / 17 ]</span></h2>
    <hr></hr>
    {!loading && results.map(i18n => (
      <div key={i18n._id}>
        <h3>{i18n.name} - <span style={{fontWeight: "normal"}}>{i18n.description}</span></h3>
        <h1>{i18n.glyphSet}</h1>
        <p><a href={i18n.wikiUrl} target="_blank">Wiki</a></p>
        <hr></hr>
      </div>
    ))}
  </div>
);

const options = {
  collectionName: "i18ns",
  fragmentName: 'I18nsFragment', // uncomment on #Step11
}

registerComponent({ name: 'i18nsList', component: i18nsList, hocs: [[withMulti2, options]]});