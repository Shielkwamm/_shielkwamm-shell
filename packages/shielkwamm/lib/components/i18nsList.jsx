import React from 'react';
import { Components, registerComponent, withMulti2 } from 'meteor/vulcan:core';
import { Link } from 'react-router-dom';

const i18nsList = ({ loading, results }) => (
  <div className="movies-list">
    <h2><Link to="/">⏎ </Link>i18n</h2>
    <hr></hr>
    {!loading && results.map(i18n => (
      <div key={i18n._id}>
        <h3>{i18n.name}</h3>
        <p>{i18n.description}</p>
        <p>{i18n.glyphSet}</p>
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