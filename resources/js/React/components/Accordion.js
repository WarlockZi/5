import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {palette, spacing} from '@mui/system';
import NoSsr from '@mui/base/NoSsr';

export default function Accordion(props) {

  const Test = (props) => {

    return (
      <div data-level={props.ind}></div>
    )
  }

  const StyledTest = styled.div`
  ${palette}
  ${spacing}
  font-size: .8rem;
  border: blue 1px solid;
  color:white;
  padding:10px;
  max-width:300px;
`
  ;
  const Path = styled.div`
  ${palette}
  ${spacing}
  font-size: .8rem;
  border: blue 1px solid;
  color:white;
  padding:10px;
  max-width:300px;
`;


  const pathClick = (e) => {
    let parent = e.target.parentNode.tagName
    alert(parent)
  }

  const [tests, setTests] = useState([]);
  const [api, setApi] = useState([]);

  const apiFetch = async () => {

    const res = await window.axios.get('https://jsonplaceholder.typicode.com/posts')
    await setTests(res.data.json())
    console.log(res.data.json())

    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(response => response.json())
    //   .then(
    //     json => {
    //       setApi(json)
    //     }
    //   )
  }


  const fetchData = async () => {
    let url = 'http://localhost:8000/api/v1/tests-tree';
    const res = await window.axios.get(url)
    await setTests(res.data)


  }
  useEffect(() => {
    fetchData()
    apiFetch()
  }, [])

  const userList = tests.map((i, ind) => {
      return i.isTest
        ? <Test key={i.id} bgcolor={'blue'} ind={ind}>{i.test_name}</Test>
        : <Path
          onclick='pathClick'
          key={i.id}
          bgcolor={'red'}>{i.test_name}</Path>
    }
  )

  return (

    userList
  )

}






