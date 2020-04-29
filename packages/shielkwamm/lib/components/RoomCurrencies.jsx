import React from 'react';
import { Components, registerComponent} from 'meteor/vulcan:core';

const RoomCurrencies = ({ room }) => {
  //get all currencies
  const currenciesList = []
  room.roomHandles.forEach(rh => {
    rh.handle.currencies.forEach( currency => {
      let amount = currency.amount;
      let name = currency.currency.name;
      let glyph = currency.currency.glyph;
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
      <p key={cl.name}>{cl.glyph} {cl.name}: {cl.amount}</p>
    ))}
    </React.Fragment>
  )
};

registerComponent({ name: 'RoomCurrencies', component: RoomCurrencies});