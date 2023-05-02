import React from 'react';
import * as Icons from 'react-icons/io5';

/* Your icon name from database data can now be passed as prop */
const Io5Icon = ({ name }) => {
  const IconComponent = Icons[name];

  if (!IconComponent) {
    // Return a default one
    return <Icons.IoAlarm />;
  }

  return <IconComponent />;
};

export default Io5Icon;
