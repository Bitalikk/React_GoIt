import React from 'react';
import ProfileDetails from './ProfileDetails';

const Panel = ({ title, children }) => (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );


  export default Panel;