import React from 'react';
import { Components, registerComponent, withSingle2 } from 'meteor/vulcan:core';
import { Link } from 'react-router-dom';

const Overview = ({ loading, document }) => (
  <div className="movies-list">
    <Components.HeadTags title={"==== Shielkwámḿ ====||"}/>
    <p style={{paddingLeft: "16px"}}><i>Welcome weary adventurers to...</i></p>
    <h1 style={{textAlign: "center", fontSize: "50px"}}> ==== Shielkwámḿ ====||</h1>
    {!loading && document? (
      <Components.Room room={document}/>
    ): <h1>We are experiencing high call volume... please call back...</h1> }
    <hr></hr>
    <h2 style={{textAlign: "center"}}><Link to="/rooms">Rooms</Link> | <Link to="/handles">Handles</Link> | <Link to="/parties">Parties</Link></h2>
    <h2 style={{textAlign: "center"}}><Link to="/having-things">Having Things</Link> | <Link to="/things">Things</Link> | <a href="https://github.com/Shielkwamm/one_Z-rk/wiki" target="_blank">Wiki</a></h2>
    <h2 style={{textAlign: "center"}}><Link to="/best_sh_">_sh_</Link> | <Link to="/i18n">i18n</Link> | <Link to="/color-schemes">Color</Link></h2>
    <hr></hr>
  </div>
)

const options = {
  collectionName: "Rooms",
  fragmentName: 'RoomsListFragment',
  input: {filter: {isFeatured: {_eq: true}}}
}

registerComponent({ name: 'Overview', component: Overview, hocs: [[withSingle2, options]]});