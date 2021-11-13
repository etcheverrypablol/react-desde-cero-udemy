import React from 'react';

const Events = () => {
  const clickEvent = () => {
    console.log('You give me a click');
  };

  return (
    <>
      <h2>Events</h2>
      <button onClick={() => clickEvent()}>Click</button>
    </>
  );
};

export default Events;
