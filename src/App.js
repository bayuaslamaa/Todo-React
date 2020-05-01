import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Home from './containers/Home'
import Todo from './containers/Todo'
import DetailTodo from './containers/DetailTodo'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/list-todo">
                ListTodo
            </Link>
            </li>
          </ul>
          <hr />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/list-todo">
              <Todo />
            </Route>
            <Route path="/list-todo/:id" children={<DetailTodo />} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
