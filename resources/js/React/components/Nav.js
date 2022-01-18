import React from 'react';
import {Link, useLocation} from "react-router-dom";

export default function Nav (){

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
        {/*<Link style={a} to='/admin'> Admin </Link>*/}
        <Link style={a} to='/admin/statistics'> Stat </Link>
        <Link style={a} to='/admin/home'> home </Link>
        <Link style={a} to='/admin/test'> test </Link>
        <Link style={a} to='/admin/acc'> acc </Link>
      </div>

      <div style={content}>Текущий url: {pathname}</div>

    </>
  )

}

