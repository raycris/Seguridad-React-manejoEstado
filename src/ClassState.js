import React from "react";
import { Loading } from "./Loading";

const SECURITY_CODE = "PARADIGMA";

class ClassState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      error: false,
      loading: false,
    };
  }
  componentDidCatch() {
    console.log("componentDidCatch");
  }

  UNSAFE_componentDidMount() {
    console.log("componentDidMount");
  }
  // UNSAFE_componentWillMount() {
  //   console.log("componentWillMount");
  // }

  componentDidUpdate() {
    console.log("Actualizacion");
    if (this.state.loading) {
      setTimeout(() => {
        console.log("Haciendo la validacion");
        if (this.state.value === SECURITY_CODE) {
          this.setState({ error: true, loading: false });
        } else {
          this.setState({ error: true, loading: false });
        }

        console.log("Terminando la validacion");
      }, 3000);
    }
  }

  render() {
    return (
      <div>
        <h2>Eliminar {this.props.name}</h2>
        <p>Por favor, escriba el código de seguridad.</p>
        {(this.state.error && !this.state.loading) && <p>Error: El codigo es incorrecto</p>}
        {this.state.loading && <Loading />}
        <input
          type="text"
          placeholder="código de seguridad"
          value={this.state.value}
          onChange={(event) => {
            this.setState({ value: event.target.value });
          }}
        />
        <button
          // onClick={() => this.setState({ error: !this.state.error })}
          onClick={() => this.setState({ loading: true })}
        >
          Comprobar
        </button>
      </div>
    );
  }
}

export { ClassState };
