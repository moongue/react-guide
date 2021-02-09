import React, { Component } from 'react';

export class Clock extends Component {
  state = {
    time: new Date(),
    count: 0,
    toggle: false,
    numbers: [1, 2, 3, 4, 5],
    inputValue: ''
  }

  // Вызывается когда элемент отрендерился в DOM
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({time: new Date()});

      // Если изменение состояние является асинхронным то лучше делать через колбэк
      /*
      this.setState((state) => ({
        timer: state.timer + 1
      }))
      */

    }, 1000);
  }

  // Вызывается когда элемент будет удален из DOM
  componentWillUnmount() {
    clearInterval(this.timer)
  }

  // Функция изменениея состояния
  setCount() {
   this.setState((state) => ({count: state.count++}));
  }

  logEvent(number, event) {
    console.log(number + ':' + event.target);
    console.log(event.target);
  }

  toggleLog() {
    if (this.state.toggle) {
      return <h2>Ну привет</h2>
    }
    return null; // Чтобы нечего не рендерить достаточно вернуть null
  }

  render() {
    return (
      <div>
        <h1>Привет мир</h1>
        <h2>Сейчас {this.state.time.toLocaleTimeString()}</h2>
        {/* 3 Варианта использования события*/}
        <button className="btn" onClick={() => this.setState((state) => ({count: state.count++}))}>Клик</button>
        <button className="btn" onClick={() => this.setCount()}>Клик</button>
        <button className="btn" onClick={this.setCount.bind(this)}>Клик</button>

        {/* Варианты передачи аргументов */}
        <button onClick={(e) => this.logEvent(10, e)}>Event</button>
        <button onClick={this.logEvent.bind(this, 10)}>Event</button>
        <div className="count">{this.state.count}</div>

        {/* Условный оператов в jsx */}
        <button onClick={() => this.setState((state) => ({toggle: !state.toggle}))}>Toggle</button>
        {this.state.toggle && <h2>Ну привет</h2>}
        {this.state.toggle ? <h2>Ну привет</h2> : null}
        {this.toggleLog()}

        {/* Списки */}
        <ul>
          {this.state.numbers.map((item, idx) => <li key={idx}>{item}</li>)}
        </ul>

        {/* Формы и управляемый компонент */}
        <form name="values" onSubmit={(e) => {
          console.log('Submitted')
          e.preventDefault();
        }}>
          <input
            type="text"
            onChange={(e) => this.setState({inputValue: e.target.value})}
            value={this.state.inputValue}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

