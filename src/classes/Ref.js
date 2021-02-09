import React from 'react';

export default class Info extends React.Component {
  /* Второй вариант создания референции
  constructor(props) {
    super(props);
    this.inputRef = React.createRef()
  }
  */

  state = {
    info: [{
      date: '06.09.2019',
      text: 'I go out'
    }, {
      date: '01.05.2020',
      text: 'I am back'
    }, {
      date: '04.05.2020',
      text: 'I go sleep'
    }]
  }

  componentDidMount() {
    this.inputRef.value = 'Salom';
    this.inputRef.focus();

    // this.inputRef.current.focus()
  }

 /* ref={this.inputRef} */

  render() {
    return (
      <ul>
        {this.state.info.map((item, idx) => (
          <li key={idx}>
            <p>{item.date}</p>
            <input type="text"
                   ref={idx === 1 ? inputRef => this.inputRef = inputRef : null}
                   value={item.text}
            />
          </li>
        ))}
      </ul>
    )
  }
}
