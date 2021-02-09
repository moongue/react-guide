import React from 'react';
import {ThemeContext} from '../App';

export default class Toolbar extends React.Component {
  render() {
    return (
    <ThemeContext.Consumer>
      {({theme, setTheme}) => <button className={theme} onClick={() => setTheme()}>{theme}</button>}
    </ThemeContext.Consumer>
    )
  }
}


