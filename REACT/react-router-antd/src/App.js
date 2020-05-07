import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import 'antd/dist/antd.css'
import PageLayout from './pages/layout'

function App() {
  return (
    <Router>
      {/* <PageLayout></PageLayout> */}
      <Route path='/' component={PageLayout}></Route>
    </Router>
  )
}

export default App