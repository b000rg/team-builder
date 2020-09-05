import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PeopleList from './components/PeopleList';
import Person from './components/Person';
import Form from './components/Form';
import people from './data/people';

function App() {
  const [list, setList] = useState(people);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Form list={list} setList={setList} />
          <PeopleList people={list} />
        </Route>
        <Route exact path="/people/:id">
          <Person people={list} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
