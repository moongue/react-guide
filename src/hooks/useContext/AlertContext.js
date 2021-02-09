import React, { useContext, useState } from 'react';

// Такой подход позволяет хранить всю логику в одном файле
// и не загрзнять другие файлы
const AlertContext = React.createContext();

export const useAlert = () => {
  return useContext(AlertContext);
}

export default function ({ children }) {
  const [alert, setAlert] = useState(false);

  const toggle = () => setAlert(prevState => !prevState)

  return (
    <AlertContext.Provider value={{alert, toggle}}>
      {children}
    </AlertContext.Provider>
  )
}
