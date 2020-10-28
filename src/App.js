import React from "react"
import {BrowserRouter as Router} from 'react-router-dom'

import Routes from 'routes'
import TopBar from 'components/topBar'
import {CurrentUserProvider} from 'context/currentUser'
import CurrentUserChecker from 'components/currentUserChecker'

const App = () => {
  return (
    <CurrentUserProvider>
      <CurrentUserChecker>
        <Router>
          <TopBar />
          <Routes />
        </Router>
      </CurrentUserChecker>
    </CurrentUserProvider>
  )
}

export default App