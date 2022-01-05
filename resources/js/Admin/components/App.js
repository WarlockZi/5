import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Outlet, Link, Route, Routes, useLocation} from "react-router-dom";
import Statistics from "../../React/Statistics";

function App() {
  const {pathname} = useLocation();
  return (
    <>
      <div className="container">
        <a href="/">  На сайт </a>
        Текущий url: {pathname}<br/>

        <Link to='/admin'> Admin </Link>
        <Link to='/admin/statistics'> Stat </Link>
        <Link to='/admin/home'> home </Link>
        <Outlet/>
        <Routes>
          <Route path="/admin/*" >
            <Route exact path="statistics" element={<Statistics/>}/>
            <Route exact path="home" element={<Home/>}/>
          </Route>
        </Routes>


      </div>
    </>
  )

}

export default App;

const Home = () => {
  return (
    <>
      <br/>
      <br/>
      <div className="k">HOme Полюся пупся</div>
    </>
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
