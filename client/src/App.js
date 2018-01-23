import React, {Component} from 'react'
import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import axios from 'axios'

import HomePage from './components/HomePage'
import UserPage from './components/UserPage'
import UserShow from './components/UserShow'

class App extends Component {

  state = {
    users: []
  }

  async componentWillMount() {
    const response = await axios.get('/api/users')
    this.setState({users: response.data})
  }

  render() {

    const UserPageComponent = () => (<UserPage users={this.state.users} {...this.props}/>)
    // const UserShowComponent = () => (<UserShow/>)
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/users' render={UserPageComponent}/>
          <Route exact path='/users/:userId' component={UserShow}/>
        </Switch>
      </Router>
    )
  }
}

export default App
