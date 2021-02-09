import React, { useState } from 'react';

function useInput(initialState) {
  const [value, setValue] = useState(initialState);

  const onChange = e => setValue(e.target.value);

  const clear = () => setValue('');

  return {
    bind: {value, onChange},
    value,
    clear,
  }
}

export default function CustomHooks() {
  const input = useInput('')

  return (
    <>
      <input type="text" {...input.bind} />
      <button onClick={input.clear}>Очистить</button>
      <hr />
      <h1>{input.value}</h1>
    </>
  )
}
