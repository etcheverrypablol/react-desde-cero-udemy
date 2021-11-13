import React, { useState } from 'react';

const Lists = () => {
  const initialState = [
    { id: 1, text: 'Task 1' },
    { id: 2, text: 'Task 2' },
    { id: 3, text: 'Task 3' },
  ];
  const [list, setList] = useState(initialState);

  return (
    <div>
      <h2>Lists</h2>
      {list.map((elemnt, index) => (
        <h4 key={index}>{elemnt.text}</h4>
      ))}
    </div>
  );
};

export default Lists;
