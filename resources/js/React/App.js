import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Outlet, Route, Routes, useLocation} from "react-router-dom/index";
import Statistics from "./Statistics";

import { TextField,Autocomplete,Button} from '@mui/material';
import Accordion from './components/Accordion'

function App() {

  const options = [
    { label: 'The Godfather', id: 1 },
    { label: 'Pulp Fiction', id: 2 },
  ];


  return (
    <>
      <Nav/>
      <Button variant="contained">Hello World</Button>
      <Accordion/>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={options}
        sx={{ m: 2, width: 300 }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />

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
  return (
      <div>test edit</div>
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
  return (
      <Outlet/>
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
