import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {palette, spacing} from '@mui/system';

export default function Accordion(props) {

  const Load = () => {
    const centered = 'display:flex; alignItems:center;'
    return (<div className={centered}>Loading...</div>)
  }
  const [loading, setLoading] = useState(true)


  let Test = (props) => {
    return (
      <div dataTest data-level={props.ind}>
        {props.test.test_name}
      </div>
    )
  }

  let Path = (props) => {
    return (
      <div dataPath data-level={props.ind}>
        {props.test.test_name}
      </div>
    )
  }

  Test = styled.div`
  ${palette}
  ${spacing}
  font-size: .8rem;
  border: red 1px solid;
  color:white;
  padding:10px;
  max-width:300px;
`;

  Path = styled.div`
  ${palette}
  ${spacing}
  font-size: .8rem;
  border: blue 1px solid;
  color:white;
  padding:10px;
  max-width:300px;
`;

  const [tests, setTests] = useState([]);

  const fetchData = async () => {
    const res = await window.axios.get('http://localhost:8000/api/v1/tests-tree')
    await setTests(res.data)
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const testTree = tests.map((i, ind) => {
      return i.isTest
        ? <Test
          key={i.id}
          bgcolor={'blue'}
          ind={ind}
          test={i}
        >
          {i.test_name}
        </Test>
        : <Path
          onclick='pathClick'
          key={i.id}
          bgcolor={'red'}>
          {i.test_name}
        </Path>
    }
  )


  return (loading ? <Load/> : (<div style={{'width': '250px'}}>
      {testTree}
    </div>
  ))

}






