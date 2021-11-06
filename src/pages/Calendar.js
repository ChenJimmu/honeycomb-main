import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../styles/Sample.less';

function Sample() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
      />
    </div>
  );
}


export default Sample;