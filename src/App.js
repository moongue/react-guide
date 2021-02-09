import React from 'react';
import './App.css';
import { Clock } from './classes/Basic';
import Toolbar from './classes/Context';
import {ErrorBoundary, Counter} from './classes/ErrorBoundary';
import Info from './classes/Ref';
import UseState from './hooks/useState';
import UseEffect from './hooks/useEffect';
import UseRef from './hooks/useRef';
import UseMemo from './hooks/useMemo';
import UseCallback from './hooks/useCallback';
import UseContext from './hooks/useContext';
import UseReducer from './hooks/useReducer';
import UserHooks from './hooks/customHook';
import CustomHooks from './hooks/customHook';

export const ThemeContext = React.createContext('');

class App extends React.Component {
  state = {
    // For context
    theme: 'dark',
    setTheme: () => this.setState((state) => ({theme: state.theme === 'dark' ? 'light' : 'dark'}))
  }
  render() {
    return (
      // BASIC Classes
      // <Clock />

      // CONTEXT
      /*
      <ThemeContext.Provider value={this.state}>
        <Toolbar />
      </ThemeContext.Provider>
      */

      // ErrorBoundary отлов ошибок
      /*
      <ErrorBoundary>
        <Counter />
      </ErrorBoundary>
      */

      // Ref ссылка на dom-элемент
      // <Info />

      // Hooks
      // <UseState />
      // <UseEffect />
      <UseRef />
      // <UseMemo />
      // <UseCallback />
      // <UseContext />
      // <UseReducer />

      // <CustomHooks />
    );
  }
}

export default App;
