import React, { Component } from "react";

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todot: [],
      inputVal: "",
    };
  }
  handleKeyUp = (e) => {
    if (e.key === "Enter") {
      this.setState((prevState) => ({
        todot: [...prevState.todot, prevState.inputVal],
        inputVal: "",
      }));
      e.preventDefault();
    }
  };

  handleChange = (e) => {
    this.setState({
      inputVal: e.target.value,
    });
    console.log(this.state.todot);
  };
  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            <li>Sacar la ropa</li>
            <li>Hacer la cama</li>
            <li>Leer un rato</li>
            {this.state.todot.map((element) => (
              <li>{element}</li>
            ))}
          </ul>
          <form>
            <input
              type="text"
              id="new-task"
              placeholder="Input todo"
              onKeyDown={this.handleKeyUp}
              onChange={this.handleChange}
              value={this.state.inputVal}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
