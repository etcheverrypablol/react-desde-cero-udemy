import React from 'react';

const Greeting = ({ name, age }) => {
  return (
    <div>
      <h2>
        {' '}
        Greeting {name} {age}{' '}
      </h2>
    </div>
  );
};

export default Greeting;
