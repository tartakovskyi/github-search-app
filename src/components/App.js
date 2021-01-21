import React, { useState, useEffect }  from 'react';
import Search from './Search';
import ReposList from './ReposList';
import { searchRepos } from '../api';

export const AppContext = React.createContext();

const App = () => {

  const [repos, setRepos] = useState([]);
  const [term, setTerm] = useState('');

  useEffect(() => {
    if (term) {
      searchRepos(term)
      .then(response => {
        setRepos(response.data);
      })
      .catch(error => {
        console.log(error);
        setRepos([]);
      })
    } else {
      setRepos([]);
    }
  },[term]);

  const updateTerm = ({ target }) => {
    setTerm(target.value);
  }

  return (
    <AppContext.Provider value={{ setTerm: setTerm }} >
      <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
        <div className="container">
          <a aria-current="page" className="navbar-brand active" href="/">Github Search App</a>
        </div>
      </nav>
      <main>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-3 mb-4">
            <Search term={term} handleChange={updateTerm} />          
          </div>
          <div className="col-md-8">
            <h1>Found repositories</h1>
            {repos.length > 0 ? <ReposList repos={repos} /> : <p>No repositories found</p>}         
          </div>
        </div>
      </div>
      </main>
    </AppContext.Provider>
  )
}

export default App;
