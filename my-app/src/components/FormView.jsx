import React from 'react';

const FormView = () => {
  return (
    <div>
      <h2>Form</h2>
      <form>
        <input type='text' placeholder='Insert fruit' className='form-control mb-2' />
        <input type='text' placeholder='Insert description' className='form-control mb-2' />
        <button className='btn btn-primary '>Add</button>
      </form>
    </div>
  );
};

export default FormView;
