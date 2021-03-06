import React, {Component} from 'react'
import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import HomePage from './components/HomePage'
import UserPage from './components/userComponents/UserPage'
import UserShow from './components/userComponents/UserShow'
import SubjectShow from './components/subjectComponents/SubjectShow'
import Review from './components/flashCardComponents/Review'

class App extends Component {

  render() {

    return (
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/users' component={UserPage}/>
          <Route exact path='/users/:userId' component={UserShow}/>
          <Route exact path='/users/:userId/subjects/:subjectId' component={SubjectShow} />
          <Route exact path='/users/:userId/subjects/:subjectId/review' component={Review} />
        </Switch>
      </Router>
    )
  }
}

export default App
