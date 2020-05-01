import React from 'react';
import { Components, registerComponent, withMulti2 } from 'meteor/vulcan:core';

const RoomMessage = ({ message, linkColor, backgroundColor, color}) => {
  let timeStamp = new Date(message.createdAt);
  let style = {};
  //console.log(message);
  let display = "leftHighlighted";
  if(message.type === "_sh_") {
    display = "_sh_";
  }
  else if(message.type === "message") {
    display = "regular"
  }
  else if(message.type === "vibe") {
    display = "alert";
  }
  else if(message.type === "cannon") {
    display = "rightHighlighted";
  }
  else if(message.type === "zork") {
    display = "leftHighlighted";
  }
  style.margin = 0;
  if(display === "rightHighlighted"){
    style.color = linkColor;
    style.fontSize = "35px";
    style.verticalAlign = "-6px";
    //style.marginTop = "-23px";
    //style.marginBottom = "-8px";
    style.height = 0;
    style.textAlign = "right";
  }
  if(display === "leftHighlighted"){
    style.color = color;
    style.fontSize = "35px"
    style.lineHeight = "0";
    //style.marginTop = "-23px";
    //style.marginBottom = "-8px";
    style.textAlign = "left";
  }
  if(display === "alert" || display === "_sh_"){
    style.textAlign = "center";
    style.fontSize = "30px";
    style.verticalAlign = "-6px";
    style.color = linkColor;
    style.background = backgroundColor;
    //style.margin = "-4px";
    style.padding = "9px";
  }
  let timeStampF = timeStamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
  return (
    <React.Fragment>
      {display === "_sh_" && message._sh_? (
        <Components.Sh sh={message._sh_}/>
      ) : null }
      {display === "rightHighlighted" ? (
        <p style={style}>{message.text}</p>
      ) : null }
      {display === "regular" ? (
        <p>{timeStampF}: <span style={style}>{message.text}</span></p>
      ) : null }
      {display === "leftHighlighted" ? (
        <p>{timeStampF}: <span style={style}>{message.text}</span></p>
      ) : null }
      {display === "alert" ? (
        <p style={style}>{message.text}</p>
      ) : null }
    </React.Fragment>
  )
}

const RoomMessagesInner = ({ loading, results, linkColor, backgroundColor, color }) => (
  <React.Fragment>
  {!loading && results.map(message =>
    <div key={message._id}>
      <RoomMessage message={message} linkColor={linkColor} color={color} backgroundColor={backgroundColor}/>
    </div>
  )}
  </React.Fragment>
)

const options = {
  collectionName: "Messages",
  fragmentName: 'MessagesFragment', // uncomment on #Step11
  limit: 200
}

registerComponent({ name: 'RoomMessagesInner', component: RoomMessagesInner, hocs: [[withMulti2, options]]});

const RoomMessages = ({ roomId, linkColor, backgroundColor, color }) => (
  <Components.RoomMessagesInner linkColor={linkColor} color={color} backgroundColor={backgroundColor} input={{filter: {roomId: {_eq: roomId}}}}/>
);

registerComponent({ name: 'RoomMessages', component: RoomMessages});