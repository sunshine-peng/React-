import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'

/**
 * react router其中包含三种类型：1、路由组件 2、路由匹配组件 3、导航组件
 * 路由组件：BrowserRouter, HashRouter
 * 路由匹配组件：Route, Switch
 * 导航组件：Link
 */

  function Home(){
    return <h1>Home</h1>
  }

  function About(){
    return <h1>About</h1>
  }
  
  function Topic({match}) {
    console.log(match.params.id)
  return <h3>Request Param: {match.params.id}</h3>
  }

  function Topics(props){
    console.log(props)
    const {match} = props
    return (
      <div>
        <h1>topics</h1>
        <ul>
          <li>
            <Link to={`${match.url}/components`} >Components</Link>
          </li>
          <li>
            <Link to={`${match.url}/props-v-state`}>Props- v -state</Link>
          </li>
        </ul>
        <Route path={`${match.path}/:id`}  component={Topic} />
        <Route 
        path={match.path}
        exact
        render={() => <h3>please select a Topic</h3>}
        />
      </div>
    )
  }

  function Header() {
    return (
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/topics'>topics</Link>
        </li>
      </ul>
    )
  }

  function App() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/topics' component={Topics}/>
        </div>
      </Router>
    )
  }

  export default App