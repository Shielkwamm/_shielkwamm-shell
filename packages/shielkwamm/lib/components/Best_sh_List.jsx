import React from 'react';
import { Components, registerComponent, withMulti2 } from 'meteor/vulcan:core';
import { Link } from 'react-router-dom';

const Best_sh_List = ({ loading, results }) => (
  <div className="movies-list">
    <h2 style={{textAlign: "right"}}>△ Historic</h2>
    <hr></hr>
    {!loading && results.map(_sh_ => (
      <h1 style={{textAlign: "center"}} key={_sh_._id}>{_sh_.text}</h1>
    ))}
    <hr></hr>
  </div>
);

const options = {
  collectionName: "ShS",
  fragmentName: 'best_sh_', // uncomment on #Step11
}

registerComponent({ name: 'Best_sh_List', component: Best_sh_List, hocs: [[withMulti2, options]]});
