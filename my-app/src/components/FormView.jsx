import React, { useState } from 'react';

const FormView = () => {
  const [fruit, setFruit] = useState('');
  const [description, setDescription] = useState('');
  const [fruitLis, setFruitList] = useState([]);

  const saveData = (e) => {
    e.preventDefault();
    if (!fruit.trim()) {
      console.log('Fruit it is empty.');
      return;
    }
    if (!description.trim()) {
      console.log('Description it is empty.');
      return;
    }
    console.log('Procesing data...' + fruit + description);
    setFruitList([...fruitLis, { fruit, description }]);
    // Clean the inputs when insert data and press add button
    e.target.reset();
    setFruit('');
    setDescription('');
  };
  return (
    <div>
      <h2>Form</h2>
      <form onSubmit={saveData}>
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
        <ul>
          {fruitLis.map((fruit, index) => (
            <li key={index}>
              {fruit.fruit} - {fruit.description}
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
};

export default FormView;
