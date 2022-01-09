import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {palette, spacing} from '@mui/system';
import NoSsr from '@mui/base/NoSsr';

export default function Accordion(props) {

  const Test = (props)=>{
    onclick = pathClick
    return(
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



  const pathClick =(e)=>{
    let parent = e.target.parentNode.tagName
    alert(parent)
  }

  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    let url = 'http://localhost:8000/api/v1/tests-tree';
    const restult = await window.axios.get(url)
    await setUsers(restult.data)
  }
  useEffect(() => {
    fetchData()
  }, [])

  const userList = users.map((i,ind) => {
      return i.isTest
        ?<Test key={i.id} bgcolor={'blue'} ind = {ind}>{i.test_name}</Test>
        :<Path
          onclick = 'pathClick'
          key={i.id}
          bgcolor={'red'}>{i.test_name}</Path>
    }
  )

  return (
    userList
  )

}






