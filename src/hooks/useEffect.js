import React, { useState, useEffect } from 'react';

const UseEffect = () => {
  const [type, setType] = useState('users');
  const [data, setData] = useState(null);
  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0,
  })

  // Вызывается каждый раз когда компонент перерендериваеться
  useEffect(() => {
    console.log('render');
  });

  // Вызывается только когда type изменяется
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
    .then(response => response.json())
    .then(json => setData(json))

    return () => {
      console.log('clear type');
    }
  }, [type])

  const mousePosHandler = (e) => {
    return setMousePos({
      x: e.clientX,
      y: e.clientY
    })
  }

  // Эквивалент ComponentDidMount вызоветься всего
  // 1 раз когда компонент впервые зарендерится
  useEffect(() => {
    console.log('ComponentDidMount');

    window.addEventListener('mousemove', mousePosHandler)

    // Когда элемент будет размонтирован мы очистим слушатель
    // эквивалент ComponentWillUnmount
    return () => {
      window.removeEventListener('mousemove', mousePosHandler)
    }

  }, [])

  return (
    <>
      <h1>Ресурсы: {type}</h1>
      <button onClick={setType.bind(this, 'users')}>Пользователи</button>
      <button onClick={setType.bind(this, 'todos')}>Todos</button>
      <button onClick={setType.bind(this, 'posts')}>Посты</button>

      {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
      <pre>{JSON.stringify(mousePos, null, 2)}</pre>
    </>
  )
}

export default UseEffect;
