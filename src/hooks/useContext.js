import React from 'react';
import Alert from './useContext/Alert';
import Main from './useContext/Main';
import AlertContext from './useContext/AlertContext';

export default function UseContext() {
  return (
    <AlertContext>
      <div>
        <Alert />
        <h1>Салют</h1>
        <Main />
      </div>
    </AlertContext>
  )
}

