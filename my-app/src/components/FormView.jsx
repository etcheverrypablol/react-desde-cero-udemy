import React, { useState } from 'react';

const FormView = () => {
  const [fruit, setFruit] = useState('');
  const [description, setDescription] = useState('');
  return (
    <div>
      <h2>Form</h2>
      <form>
        <input
          type='text'
          placeholder='Insert fruit'
          className='form-control mb-2'
          onChange={(e) => setFruit(e.target.value)}
        />
        <input
          type='text'
          placeholder='Insert description'
          className='form-control mb-2'
          onChange={(e) => setDescription(e.target.value)}
        />

        <button className='w-100 btn btn-primary '>Add</button>
      </form>
    </div>
  );
};

export default FormView;
