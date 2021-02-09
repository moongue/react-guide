import React, { useState, useRef, useEffect } from 'react';

const UseRef = () => {
  const [value, setValue] = useState('initial');

  // Суть useRef в том что он сохраняет состояние между рендерами
  // грубо говоря его изменение не тригерит useEffect но при этом
  // эсли он меняется компонент перерендериватся
  const renderCount = useRef(1);

  // Второе применение это ссылка на DOM-элемент
  // элементу задаём ref={inputRef} и через inputRef.current
  // к нему обращаемся
  const inputRef = useRef(null);

  // Третье применение это сохранение предыдущего состояния
  const prevValue = useRef('');

  console.log(renderCount)

  useEffect(() => {
    // Был бы тут useState цикл был бы бесконечным изменение
    // состояние бы перендеривалось и тригерил useEffect
    // а он бы менял состояние и так по кругу
    renderCount.current++; // это объект и потэтому свойтво хранится в .current
  });

  // Реализация сохранения предыдущего состояния
  useEffect(() => {
    prevValue.current = value
  }, [value]);

  // Хранит ссылку на DOM-элемент
  const focus = () => inputRef.current.focus();

  return (
    <>
      <h1>{renderCount.current}</h1>
      <h1>{prevValue.current}</h1>
      <input
        type="text"
        ref={inputRef}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button type="button" onClick={focus}>Фокус</button>
    </>
  )
}

export default UseRef;
