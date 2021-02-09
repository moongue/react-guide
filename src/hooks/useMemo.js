import React, { useState, useMemo, useEffect } from 'react';

function complexNum(num) {
  console.log('complexNum')
  let i = 0;
  while (i < 1000000000) i++
  return num * 2;
}

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(false);

  // Каждый раз когда мы меняем состояние color компонент
  // перерендеривается и вызывает complexNum хотя его значение не меняется
  // и значение color меняется с задержкой
  // const computed = complexNum(count);

  // useMemo как бы кэширует значение и вычесляеться только
  // когда count меняется
  const computed = useMemo(() => complexNum(count), [count]); // count зависимость

  // Это решает проблему описанную ниже так как он сохраняет объект
  // на следущий рендер
  const styles = useMemo(() => ({
    color: color ? 'red' : 'yellow'
  }), [color]);

  // Такой код будет вызываться каждый раз при перерендере всего компонента
  // потому что реакт каждый раз будет создавать новый объект styles
  // и сравнивать его с предидущим хотя объекты сравниваются по ссылке
  useEffect(() => {
    console.log('Color changed');
  }, [styles]);

  return (
   <>
     <h1 style={styles}>Вычесляемое свойство: {computed}</h1>
     <button onClick={() => setCount(prevState => prevState + 1)}>+</button>
     <button onClick={() => setCount(prevState => prevState - 1)}>-</button>
     <button onClick={() => setColor(prevState => !prevState)}>Изменить</button>
   </>
  )
}

export default UseMemo;
