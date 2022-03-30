import React from "react";

class Loading extends React.Component {
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  render() {
    return <p>Cargando Loading...</p>;
  }
}

export { Loading };
