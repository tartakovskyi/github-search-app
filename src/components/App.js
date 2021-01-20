import React, { useState }  from 'react';
import Search from './Search';
import ReposList from './ReposList';


const App = () => {

  const [repos, setRepos] = useState([])


  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
        <div className="container">
          <a aria-current="page" className="navbar-brand active" href="/">Github Search App</a>
        </div>
      </nav>
      <main>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-3 mb-4">
            <Search setRepos={setRepos} />          
          </div>
          <div className="col-md-8">
            <h1>Found repositories</h1>
            {repos.length > 0 ? <ReposList repos={repos} /> : <p>No repositories found</p>}         
          </div>
        </div>
      </div>
      </main>
    </>
  )
}

export default App;
