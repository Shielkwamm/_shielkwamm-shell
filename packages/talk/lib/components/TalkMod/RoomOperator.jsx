import React from 'react';
import { Components, registerComponent, withSingle2 } from 'meteor/vulcan:core';
import { withRouter } from 'react-router';

//## HACKY - hidden input field but using for copy to clip board

const RoomOperatorInner = ({ loading, document }) => (
  <React.Fragment>
    {loading ? (
      null
    ) : (
      <div>
        <Components.HeadTags title={`operat0r`}/>
        {document.roomI18ns.map( roomI18n => (
          <h1 key={roomI18n.i18n._id}>
            {roomI18n.i18n.glyphSet.split(" ").map((glyph, index) => (
              <span onClick={e => {window.document.querySelector("#z" + roomI18n.i18n._id + "_" + index).select(), window.document.execCommand("copy")}} key={roomI18n.i18n._id + "_" + index}>{glyph} <input style={{position: "absolute", top: "-200px", left: "-200px"}} id={"z" + roomI18n.i18n._id + "_" + index} defaultValue={glyph}/></span>
            ))}
          </h1>
        ))}
        <hr></hr>
        <h2>△áìéïḱḿí△ △Ńń△ ▵ÖöÓóÒòÔôḱ▵</h2>
        <hr></hr>
        {document.roomHandles.map((roomHandle, index) => (
          <React.Fragment key={roomHandle._id}>
          <h2 onClick={e => {window.document.querySelector("#z" + roomHandle._id + "_" + index).select();window.document.execCommand("copy")}}>{roomHandle.handle.name}</h2>
          <input style={{position: "absolute", top: "-200px", left: "-200px"}} id={"z" + roomHandle._id + "_" + index} defaultValue={roomHandle.handle.name}/>
          {roomHandle.handle.handleCurrencies.map( handleCurrency => (
            <p key={handleCurrency._id}>{handleCurrency.currency.glyph} {handleCurrency.amount}</p>
          ))}
          </React.Fragment>
        ))}
      </div>
    )}
  </React.Fragment>
)
//console.log(rh.handle) && rh.handle.currencies && 
const options = {
  collectionName: "Rooms",
  fragmentName: 'RoomOperator',
}

registerComponent( {name: 'RoomOperatorInner', component: RoomOperatorInner, hocs: [[withSingle2, options]]})

const RoomOperator = ({ match }) => (
  <Components.RoomOperatorInner input={{selector: {slug: match.params.slug}}}/>
);

registerComponent({ name: 'RoomOperator', component: RoomOperator, hocs: [withRouter]});

/*
function copy() {
  var copyText = document.querySelector("#input");
  copyText.select();
  document.execCommand("copy");
}

document.querySelector("#copy").addEventListener("click", copy);
*/