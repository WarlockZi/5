import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Outlet, Route, Routes, useLocation} from "react-router-dom/index";
// import AccordionList from './components/AccordionList'

import {TextField, Autocomplete, Button} from '@mui/material';

import Nav from "./components/Nav";
import Statistics from "./components/Statistics";
import Home from "./components/Home";
import Acc from "./components/Acc";

export default function App() {
  return (
    <>
      <Nav/>

      {/*<AccordionList/>*/}

      {/*<Accordion/>*/}

      <Routes>
        <Route path="admin" element={<Admin/>}>
          <Route path="statistics" element={<Statistics/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="test" element={<Test/>}>
            <Route path="test/" element={<Test/>}/>
            <Route path="edit" element={<TestEdit/>}/>
          </Route>
          <Route path="acc" element={<Acc/>}/>
        </Route>
      </Routes>
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

// const Home = () => {
//   const stat = {
//     color: 'red',
//     padding: '10px'
//   }
//   return (
//     <div style={stat}>HOme Полюся пупся</div>
//   )
// }


if (document.getElementById('root')) {
  ReactDOM.render((
      <Router>
        <App/>
      </Router>
    )
    , document.getElementById('root'));
}
