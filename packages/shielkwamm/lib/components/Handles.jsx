import React from 'react';
import { Components, registerComponent, withMulti2 } from 'meteor/vulcan:core';

//import GlyphsList from '../../modules/collection.js';

const Handles = () => (
  <React.Fragment>
    <div style={{backgroundColor: "white", textAlign: "center", left: 0, right: 0, position: "fixed", bottom: "0"}}>
    <hr></hr>
    <h2>☰ ☳ ☲ ☷ ☱ ☵ ☶ ☴ | ↑↓ |  ◯ ⬤ ф | △ ▵ | ☸ 当 Ω | ✔ 🔬 💻 | △áìéïḱḿí△ △Ńń△  ▵ÖöÓóÒòÔôḱ▵ | Ⅹ Ⅰ Ⅱ Ⅲ Ⅳ Ⅴ Ⅵ Ⅶ Ⅷ Ⅸ</h2>
    </div>
  </React.Fragment>
);


registerComponent({ name: 'Handles', component: Handles });