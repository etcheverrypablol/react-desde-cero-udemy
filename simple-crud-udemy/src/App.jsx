function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Simple CRUD</h1>
      <hr />
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Task list</h4>
          <ul className="list-group">
            <li className="list-group-item">
              <div className="row">
                <div className="col-4">
                  <span className="lead">Task name</span>
                </div>
                <div className="col-8 text-end">
                  <button className="btn btn-warning btn-sm mx-2">Edit</button>
                  <button className="btn btn-danger btn-sm">Delete</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-4">
          <h4 className="text-center">Form</h4>
        </div>
      </div>
    </div>
  );
}

export default App;
