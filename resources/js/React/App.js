import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Outlet, Link, Route, Routes, useLocation} from "react-router-dom/index";
import Statistics from "./Statistics";

function App() {
  const container = {
    color: 'green',
    padding: '10px',
    margin: '0 auto',
    display: 'flex',
    flexFlow: 'column',
  }

  const a = {
    color: 'grey',
    padding: '10px',
  }

  return (
    <>
      <Nav/>
      <Routes>
        <Route path="admin" element={<Admin/>}>
          <Route path="statistics" element={<Statistics/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="test" element={<Test/>}>
            <Route path="test/" element={<Test/>}/>
            <Route path="edit" element={<TestEdit/>}/>
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App;


const Nav = () => {
  const {pathname} = useLocation();

  const nav = {
    color: 'white',
    padding: '10px',
    background: 'grey',
    display: 'flex'
  }
  const a = {
    color: 'white',
    padding: '10px'
  }
  const content = {
    color: 'grey',
    padding: '10px'
  }

  return (
    <>
      <div style={nav}>
        <a href="/" style={a}> На сайт </a>
        <Link style={a} to='/admin'> Admin </Link>
        <Link style={a} to='/admin/statistics'> Stat </Link>
        <Link style={a} to='/admin/home'> home </Link>
        <Link style={a} to='/admin/test'> test </Link>
      </div>

      <div style={content}>Текущий url: {pathname}</div>

    </>
  )
}
const TestEdit = () => {
  const stat = {
    color: 'blue',
    padding: '10px'
  }
  return (
    <>
      <div>test edit</div>
    </>
  )
}

const Test = () => {
  const stat = {
    color: 'blue',
    padding: '10px'
  }
  return (
    <>
      <div>test</div>
      <Link style={stat} to='/admin/test/edit'> test eidt</Link>
      <Outlet/>
    </>
  )
}
const Admin = () => {
  const stat = {
    color: 'red',
    padding: '10px'
  }
  return (
    <>
      <Outlet/>
    </>
  )
}
const Home = () => {
  const stat = {
    color: 'red',
    padding: '10px'
  }
  return (
    <div style={stat}>HOme Полюся пупся</div>
  )
}


if (document.getElementById('root')) {
  ReactDOM.render((
      <Router>
        <App/>
      </Router>
    )
    , document.getElementById('root'));
}
