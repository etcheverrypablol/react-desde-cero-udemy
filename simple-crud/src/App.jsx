import { useState } from 'react';
import { nanoid } from 'nanoid';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [id, setId] = useState('');
  const [error, setError] = useState(null);

  const addTask = (e) => {
    e.preventDefault();
    if (!task.trim()) {
      console.log('Empty element');
      setError('Type someting please');
      return;
    }
    console.log(task);
    setTasks([...tasks, { id: nanoid(10), task: task }]);
    setTask('');
    setError(null);
  };

  const deleteTask = (id) => {
    console.log(id);
    const arrayWithOutTask = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(arrayWithOutTask);
  };

  const editForm = (task) => {
    setEditMode(true);
    setTask(task.task);
    setId(task.id);
  };

  const editTask = (e) => {
    e.preventDefault();
    if (!task.trim()) {
      console.log('Empty element');
      setError('Type someting please');
      return;
    }
    console.log(task);

    const editedArray = tasks.map((item) => (item.id === id ? { id, task } : item));
    console.log('EDITED ARRAY: ', editedArray);

    setTasks(editedArray);
    setEditMode(false);
    setTask('');
    setId('');
    setError(null);
  };

  return (
    <div className='container'>
      <h1 className='text-center mt-4'>Simple CRUD</h1>
      <hr />
      <div className='row'>
        <div className='col-8'>
          <h4 className='text-center'> Tasks list</h4>
          <ul className='list-group'>
            {tasks.length === 0 ? (
              <li className='list-group-item'>There aren't tasks</li>
            ) : (
              tasks.map((task) => {
                return (
                  <li key={task.id} className='list-group-item'>
                    <div className='row'>
                      <div className='col-8'>
                        <span className='lead'>{task.task}</span>
                      </div>
                      <div className='col-4'>
                        <button
                          className='btn btn-warning btn-sm float-right'
                          onClick={() => editForm(task)}
                        >
                          Edit
                        </button>
                        <button
                          className='btn btn-danger btn-sm float-right mx-2'
                          onClick={() => deleteTask(task.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })
            )}
          </ul>
        </div>
        <div className='col-4'>
          <h4 className='text-center'>{editMode ? 'Edit mode' : 'Add task'}</h4>
          <form onSubmit={editMode ? editTask : addTask}>
            {error ? <span className='text-danger'>{error}</span> : null}
            <input
              type='text'
              className='from-control mb-2 w-100'
              placeholder='Insert task'
              onChange={(e) => setTask(e.target.value)}
              value={task}
            />
            {editMode ? (
              <button className='btn btn-warning w-100' type='submit'>
                Edit
              </button>
            ) : (
              <button className='btn btn-dark w-100' type='submit'>
                Add
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
