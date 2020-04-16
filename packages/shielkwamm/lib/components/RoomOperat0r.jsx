import React from 'react';
import { Components, registerComponent, withSingle2 } from 'meteor/vulcan:core';
import { withRouter } from 'react-router';

//<h2 onClick={e => {console.log(ir.i18n.glyphSet.split(" "));console.log(e.target.textContent)}} key={ir._id}>{ir.i18n.glyphSet}</h2>

const RoomOperat0rInner = ({ loading, document }) => (
  <React.Fragment>
    {loading ? (
      null
    ) : (
      <div>
        {document.i18nRooms.map( ir => (
          <h2 key={ir.i18n._id}>
            {ir.i18n.glyphSet.split(" ").map((glyph, index) => (
              <span key={ir.i18n._id + "_" + index}>{glyph} </span>
            ))}
          </h2>
        ))}
        <hr></hr>
        <h2>△áìéïḱḿí△ △Ńń△ ▵ÖöÓóÒòÔôḱ▵</h2>
        <hr></hr>
        {document.roomHandles.map( rh => (
          <h2 key={rh._id}>{rh.handle.name}</h2>
        ))}
      </div>
    )}
  </React.Fragment>
)

//onClick={e => {console.log(e);e.currentTarget.select(); document.execCommand("copy")}}

const options = {
  collectionName: "Rooms",
  fragmentName: 'RoomOperat0r',
}

registerComponent( {name: 'RoomOperat0rInner', component: RoomOperat0rInner, hocs: [[withSingle2, options]]})

const RoomOperat0r = ({ match }) => (
  <Components.RoomOperat0rInner input={{selector: {slug: match.params.slug}}}/>
);

registerComponent({ name: 'RoomOperat0r', component: RoomOperat0r, hocs: [withRouter]});

/*
function copy() {
  var copyText = document.querySelector("#input");
  copyText.select();
  document.execCommand("copy");
}

document.querySelector("#copy").addEventListener("click", copy);
*/