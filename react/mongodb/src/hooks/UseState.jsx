function UseState() {
  // todo)) When I click a button the count should increase and reflect on web page

  let count = 0;

  function increaseCount() {
    count = count + 1;
    console.log(count);
  }

  return (  
    <>
      <p>{count}</p>
      <button onClick={increaseCount}>Increase</button>
    </>
  );
}

export default UseState;
