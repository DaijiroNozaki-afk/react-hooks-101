import React, { useState } from 'react';

const App = () => {
  const [count, setCount ] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  const increment2 = () => setCount(previousCount => previousCount + 1)
  const decrement2 = () => setCount(previousCount => previousCount - 1)

  const reset = () => setCount(0)
  const multiple2 = () => setCount(count * 2)
  const divisionIf3 = () => setCount((count%3 === 0) ? count / 3:count)

  return (
    <React.Fragment>
    <div>count: {count}</div>
    <div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
    <div>
      <button onClick={increment2}>+1</button>
      <button onClick={decrement2}>-1</button>
    </div>
    <div>
      <button onClick={reset}>Reset</button>
      <button onClick={multiple2}>x2</button>
      <button onClick={divisionIf3}>3の倍数の時だけ3で割る</button>
    </div>
    </React.Fragment>
  );
}

export default App;
