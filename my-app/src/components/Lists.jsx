import React, { useState } from 'react';

const Lists = () => {
  const initialState = [
    { id: 1, text: 'Task 1' },
    { id: 2, text: 'Task 2' },
    { id: 3, text: 'Task 3' },
  ];
  const [list, setList] = useState(initialState);

  const addElement = () => {
    setList([...list, { id: 4, text: 'Task 4' }]);
  };
  return (
    <div>
      <h2>Lists</h2>
      {list.map((elemnt, index) => (
        <h4 key={index}>{elemnt.text}</h4>
      ))}
      <button onClick={() => addElement()}> Add </button>
    </div>
  );
};

export default Lists;
