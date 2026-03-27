//todo)) understanding useEffect hook 🪝
//* -> It is used to perform side effects like API calls (backend URL)

import { useEffect, useState } from 'react';

function UseEffect() {
  // when app loads useEffect runs and the function inside the usEffect will run

  useEffect(() => {
    console.log('Component Loaded');
  }, []);
  // [] -> dependancy array

  // [] -> useEffect runs once

  const [count, setCount] = useState(0); // count = 0

  function increaseCount() {
    setCount(count + 1);
  }

  useEffect(() => {
    console.log('Count changed: ', count);
  }, [count]);
  // [count] -> whenever count variable will change useEffect will run that number of times

  return (
    <h1>
      <button onClick={increaseCount}>{count}</button>
    </h1>
  );
}

export default UseEffect;
