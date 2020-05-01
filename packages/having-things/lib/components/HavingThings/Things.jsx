import React from 'react';
import { Components, registerComponent, withMulti2 } from 'meteor/vulcan:core';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

const EquipmentList = ({ loading, results }) => (
  <React.Fragment>
    <Grid container>
    {!loading && results.map(equipment => (
      <React.Fragment key={equipment._id}>
        <Grid item xs={6} sm={4} md={3}>
      <h2>{equipment.glyph} {equipment.name}</h2>
      <p><a href={equipment.wikiUrl}>wiki</a></p>
      <p>{equipment.description}</p>
      </Grid>
      </React.Fragment>
      )
    )}
    </Grid>
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
    <h2><Link to="/">⏎ </Link>Things</h2>
    <hr></hr>
    <Components.EquipmentList/>
  </React.Fragment>
);

registerComponent({ name: 'Things', component: Things});