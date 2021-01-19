import React  from 'react';
import Search from './Search';


const App = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
        <div className="container">
          <a aria-current="page" className="navbar-brand active" href="/">Github Search App</a>
        </div>
      </nav>
      <main>
      <div className="container text-center">
        <div className="row">
          <div className="col-md-3">
            <Search />          
          </div>
          <div className="col-md-9">
          
          </div>
        </div>
      </div>
      </main>
    </>
  )
}

export default App;
