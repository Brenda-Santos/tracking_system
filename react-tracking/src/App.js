import React from 'react';

function App() {

  const submitHandler =(event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    fetch(`http://localhost:3001/tracking=${data.tracking}`)
      .then(response => response.json())
      .then(console.log)
      .catch(console.error);
  };

  return (
    <div className="container">
      <h1>React Tracking</h1>

      <form onSubmit={submitHandler}>
        <div className="form-group">
          <input type="text" name="tracking" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary"> Track</button>
      </form>
    </div>
  );
}

export default App;

