import React from 'react';
import { Components, registerComponent, withMulti2 } from 'meteor/vulcan:core';
import { Link } from 'react-router-dom';

const EquipmentList = ({ loading, results }) => (
  <React.Fragment>
    {!loading && results.map(equipment => (
      <React.Fragment>
      <h2>{equipment.glyph} {equipment.name}</h2>
      <p><a href={equipment.wikiUrl}>wiki</a></p>
      <p>{equipment.description}</p>
      </React.Fragment>
      )
    )}
  </React.Fragment>
)

const equipmentOptions = {
  collectionName: "Equipment",
  fragmentName: 'EquipmentFragment',
  limit: 11
}

registerComponent({ name: "EquipmentList", component: EquipmentList, hocs: [[withMulti2, equipmentOptions]] });

const Things = () => (
  <React.Fragment>
    <Components.HeadTags title={"Things"} />
    <Link to="/">⏎ </Link>Things
    <hr></hr>
    <Components.EquipmentList/>
  </React.Fragment>
);

registerComponent({ name: 'Things', component: Things});