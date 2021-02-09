import React, { useEffect, useState, useCallback } from 'react';

const UseCallback = () => {
  const [count, setCount] = useState(1);
  const [color, setColor] = useState(false);

  const styles = {
    color: color ? 'red' : 'yellow'
  }

  // useCallback схож c useMemo только этот кэширует функцию
  // которая зависит от параметра count, useCallback возвращает
  // не значение как useMemo а саму функцию
  const generateItemsFromAPI = useCallback(() => {
    return new Array(count).fill('').map((_, i) => `Элемент ${i + 1}`)
  }, [count]);

  return (
    <>
      <h1 style={styles}>Количество элементов: {count}</h1>
      <button onClick={() => setCount(prevState => prevState + 1)}>Добавить</button>
      <button onClick={() => setColor(prevState => !prevState)}>Изменить</button>

      <ItemsList getItems={generateItemsFromAPI} />
    </>
  )
}

export default UseCallback;

function ItemsList({ getItems }) {
  const [items, setItems] = useState([]);

  // Каждый раз когда мы в компоненте UseCallback меняет состояние
  // color вызываеться и этот useEffect но он к этому состоянию не причастен
  // это из-за того что создаеться новая функция generateItemsFromAPI
  // при каждом новом рендере
  useEffect(() => {
    const newItems = getItems();
    setItems(newItems);

    console.log('render');
  }, [getItems])

  return (
    items.map(i => <li key={i}>{i}</li>)
  )
}
