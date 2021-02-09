import React, { useReducer } from 'react';

const SHOW_BOX = 'SHOW_BOX';
const HIDE_BOX = 'HIDE_BOX';

const reducer = (state, action) => {
  switch (action.type) {
    case SHOW_BOX:
      return {
        ...state,
        visible: true,
        text: action.text
      }
    case HIDE_BOX:
      return {
        ...state,
        visible: false,
        text: action.text
      }
    default: return state
  }
}

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, {
    visible: false,
    text: ''
  });

  const show = () => dispatch({ type: SHOW_BOX, text: 'Показал' });

  const hide = () => dispatch({ type: HIDE_BOX, text: 'Скрыл' });

  return (
    <div className="box">
      {state.visible && <p>{state.text}</p>}
      <button onClick={show}>Показать</button>
      <button onClick={hide}>Скрыть</button>
    </div>
  )
}
