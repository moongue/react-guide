import React, { useContext } from 'react';
import { useAlert } from './AlertContext';

export default function Main() {
  const alert = useAlert();

  return (
    <>
      <h1>Нажми кнопку</h1>
      <button onClick={() => alert.toggle()}>Кнопка</button>
    </>
  )
}
