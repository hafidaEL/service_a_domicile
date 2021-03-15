import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import ServicesDomicile from './components/ServicesDomicile'
import ListePersonnes from './components/ListePersonnes/ListePersonnes'
import Personne from './components/Personne/Personne'


const App = () => {
      return (
        <Router>
          <Switch>
              <Route path='/' component={ServicesDomicile} exact/>
              <Route path='/services/:id/:title' component={ListePersonnes} />
              <Route path='/personne/:uuid' component={Personne} />
          </Switch>
        </Router>
      )
}

export default App;
