import React from 'react';
import { Components, registerComponent} from 'meteor/vulcan:core';

const RoomCurrencies = ({ room }) => {
  //get all currencies
  const currenciesList = []
  room.roomHandles.forEach(roomHandle => {
    roomHandle.handle.handleCurrencies.forEach( handleCurrencies => {
      let amount = handleCurrencies.amount;
      let name = handleCurrencies.currency.name;
      let glyph = handleCurrencies.currency.glyph;
      let foundIndex;
      let currentC = currenciesList.find( ( cl, index ) => {foundIndex = index; return cl.name === name});
      if(currentC) {
        currentC.amount += amount;
        
      }
      else {
        currenciesList.push({name: name, glyph: glyph, amount: amount})
      }
    })
  })
  return (
    <React.Fragment>
    {currenciesList.map(cl => (
      <p key={cl.name}><span style={{color: room.colorScheme.linkColor}}>{cl.glyph}</span>  {cl.name}: <span style={{color: room.colorScheme.linkColor}}>{cl.amount}</span></p>
    ))}
    </React.Fragment>
  )
};

registerComponent({ name: 'RoomCurrencies', component: RoomCurrencies});