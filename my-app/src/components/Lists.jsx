import React, { useState } from 'react';

const Lists = () => {
  const initialState = [1, 2, 3, 4, 5];
  const [list, setList] = useState(initialState);

  return (
    <div>
      <h2>Lists</h2>
      {list.map((elemnt, index) => (
        <h4 key={index}>{elemnt}</h4>
      ))}
    </div>
  );
};

export default Lists;
