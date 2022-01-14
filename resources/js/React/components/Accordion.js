import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {palette, spacing} from '@mui/system';
import NoSsr from '@mui/base/NoSsr';

export default function Accordion(props) {

  let Test = (props) => {
    return (
      <div data-test data-level={props.ind}>
        {props.test.test_name}
      </div>
    )
  }

  let Path = (props) => {
    return (
      <div data-path data-level={props.ind}>
        {props.test.test_name}
      </div>
    )
  }

  Test = styled.div`
  ${palette}
  ${spacing}
  font-size: .8rem;
  border: blue 1px solid;
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
    var time = performance.now();
    const res = await window.axios.get('http://localhost:8000/api/v1/tests-tree')
    time = performance.now() - time;
    console.log('Время выполнения api = ', time);
    time = performance.now();

    await setTests(res.data)
    time = performance.now() - time;
    console.log('Время выполнения setApi = ', time);
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


  return (
    <div style={{'width': '250px'}}>
      {testTree}
    </div>

  )

}






