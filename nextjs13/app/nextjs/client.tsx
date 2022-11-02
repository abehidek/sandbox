'use client';

import { use, useEffect, useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(undefined)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(res => res.json())
      .then(json => setData(json))
  })

  if (!data) return <div>Loading...</div>

  return (
    <div>
      <p>This component is being rendered on client</p>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      {JSON.stringify(data)}
    </div>
  );
}
