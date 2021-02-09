import React, { useState } from 'react';

function initialRandomNumber() {
  console.log('Some calculation...');
  return Math.trunc(Math.random() * 20);
}

const UseState = () => {
  // useState асинхронное событие
  // const [count, setCount] = useState(0);

  // Каждый раз при изменении состояния функция initialRandomNumber будет вызываться
  // const [count, setCount] = useState(initialRandomNumber());

  // Такой подход нужно использовать если значие вычесляемое
  // и тогда она функция вызовется всего один раз
  const [count, setCount] = useState(() => initialRandomNumber());

  const [info, setInfo] = useState({
    title: 'Сегодня',
    date: Date.now()
  });

  function increment() {
    // Это работать не будет так как при изменени состояния срзу будет перерендер
    // setCount(count + 1)
    // setCount(count + 1)

    setCount(prevState => prevState + 1);
    setCount(prevState => prevState + 1);
  }

  function decrement() {
    setCount(count - 1)
  }

  function updateInfo() {
    // Изменение состояния когда мы используем объекты
    setInfo(prevState => ({
      ...prevState,
      title: 'Завтра'
    }));
  }

  return (
    <>
      <h1>Счетчик</h1>
      <h2>{count}</h2>
      <button type="button" onClick={increment}>+</button>
      <button type="button" onClick={decrement}>-</button>

      <button type="button" onClick={updateInfo}>Изменить</button>
      <p>
        {JSON.stringify(info, null, 2)}
      </p>
    </>
  )
}

export default UseState;
