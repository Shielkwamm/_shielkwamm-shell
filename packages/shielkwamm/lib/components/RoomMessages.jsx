import React from 'react';
import { Components, registerComponent, withMulti2 } from 'meteor/vulcan:core';

const RoomMessage = ({ message, linkColor, backgroundColor }) => {
  let timeStamp = new Date(message.createdAt);
  let _zr_ = /^.*:.*$/;
  //let _sh_ = /.*:.*/;
  let _vb_ = /^.*⬤.*$/;
  let _ng_ = /^.*🔬.*$/;
  let style = {};
  let _vb_Match = false;
  let _zr_Match = false;
  let _ng_Match = false;
  if(message.text.match(_ng_)){
    style.color = linkColor;
    style.fontSize = "35px";
    style.verticalAlign = "-6px";
    style.marginTop = "-23px";
    style.marginBottom = "-8px";
    style.textAlign = "right";
    _ng_Match = true;
  }
  if(!_ng_Match && !message.text.match(_zr_)){
    style.color = linkColor;
    style.fontSize = "35px";
    style.verticalAlign = "-6px";
    style.marginTop = "-23px";
    style.marginBottom = "-8px";
    style.textAlign = "left";
    _zr_Match = true;
  }
  if(message.text.match(_vb_)){
    _vb_Match = true;
    style.textAlign = "center";
    style.fontSize = "30px";
    style.verticalAlign = "-6px";
    style.color = linkColor;
    style.backgroundColor = backgroundColor;
    style.margin = "-4px";
    style.padding = "9px";
  }
  return (
    <React.Fragment>
      {_ng_Match ? (
        <p style={style}>{message.text}</p>
      ) : null }
      {!_ng_Match && _zr_Match ? (
        <p>{timeStamp.toLocaleTimeString()}: <span style={style}>{message.text}</span></p>
      ) : null }
      {!_zr_Match && !_vb_Match && !_ng_Match ? (
        <p>{timeStamp.toLocaleTimeString()} {message.text}</p>
      ) : null }

      {_vb_Match ? (
        <p style={style}>{message.text}</p>
      ) : null }
    </React.Fragment>
  )
}

const RoomMessagesInner = ({ loading, results, linkColor, backgroundColor }) => (
  <React.Fragment>
  {!loading && results.map(message =>
    <div key={message._id}>
      <RoomMessage message={message} linkColor={linkColor}  backgroundColor={backgroundColor}/>
    </div>
  )}
  </React.Fragment>
)

const options = {
  collectionName: "Messages",
  fragmentName: 'MessagesFragment', // uncomment on #Step11
}

registerComponent({ name: 'RoomMessagesInner', component: RoomMessagesInner, hocs: [[withMulti2, options]]});

const RoomMessages = ({ roomId, linkColor, backgroundColor }) => (
  <Components.RoomMessagesInner linkColor={linkColor} backgroundColor={backgroundColor} input={{filter: {roomId: {_eq: roomId}}}}/>
);

registerComponent({ name: 'RoomMessages', component: RoomMessages});