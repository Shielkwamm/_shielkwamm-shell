import React from 'react';
import { Components, registerComponent, withMulti2 } from 'meteor/vulcan:core';

//import GlyphsList from '../../modules/collection.js';

const GlyphsList = ({ loading, results }) => (
  <React.Fragment>
    <h2 style={{textAlign: "center", left: 0, right: 0, position: "fixed", bottom: "0"}}>
      ☰ ☳ ☲ ☷ ☱ ☵ ☶ ☴ | ↑↓ |  ◯ ф | △ ▵ | ☸ 当 Ω | ✔ 🔬 💻 | △áìéïḱḿí△ △Ńń△  ▵ÖöÓóÒòÔôḱ▵ | Ⅹ Ⅰ Ⅱ Ⅲ Ⅳ Ⅴ Ⅵ Ⅶ Ⅷ Ⅸ
    </h2>
  </React.Fragment>
);

/*const options = {
  collection: Movies,
  // fragmentName: 'MovieFragment', // uncomment on #Step11
}*/

registerComponent({ name: 'GlyphsList', component: GlyphsList });
/*
<h2>◯ ф</h2>
    <h2>△ ▵</h2>
    <h2>↑↓</h2>
    <h2>Ⅹ Ⅰ Ⅱ Ⅲ Ⅳ Ⅴ Ⅵ Ⅶ Ⅷ Ⅸ</h2>
    <h2>✔ 🔬 💻</h2>
    <h2>☸ 当 Ω</h2>
    */

    //<h2> ◯ ф | △ ▵ | ☸ 当 Ω | ✔ 🔬 💻</h2>
//    <h2>△áìéïḱḿí△ △Ńń△  ▵ÖöÓóÒòÔôḱ▵</h2>