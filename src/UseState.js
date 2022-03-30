import React, { useState, useEffect } from "react";

const SECURITY_CODE = "PARADIGMA";

function UseState(props) {
  const [state, setState] = useState({
    value: "",
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
  });

  // const [value, setValue] = useState("");
  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(false);

  const onConfirm = () => {
    setState({ ...state, loading: false, error: false, confirmed: true });
  };

  const onError = () => {
    setState({ ...state, error: true, loading: false });
  };
  const onWrite = (event) => {
    setState({ ...state, value: event });
  };
  const onCheck = () => {
    setState({ ...state, loading: true });
  };
  const onDelete = () => {
    setState({ ...state, deleted: true });
  };
 
  const onReset = () => {
    setState({ ...state, confirmed: false, deleted: false, value: "" });
  };

  useEffect(() => {
    console.log("Empezando perfecto");
    if (state.loading) {
      // setError(false);
      setState({ ...state, error: false });
      setTimeout(() => {
        console.log("Haciendo la validacion");
        if (state.value === SECURITY_CODE) {
          onConfirm();
        } else {
          onError();
        }
        console.log("Terminando la validacion");
      }, 3000);
    }
    console.log("terminando perfecto");
  }, [state.loading]);

  if (!state.deleted && !state.confirmed) {
    return (
      <div>
        <h2>Eliminar {props.name}</h2>
        <p>Por favor, escriba el código de seguridad.</p>
        {/* {(error && !loading) && <p>Error: El codigo es incorrecto</p>} */}
        {state.error && <p>Error: El codigo es incorrecto</p>}
        {state.loading && <p>Cargando...</p>}
        <input
          type="text"
          placeholder="código de seguridad"
          value={state.value}
          onChange={(event) => {
            onWrite(event.target.value);
          }}
        />
        <button onClick={() => onCheck()}>Comprobar</button>
      </div>
    );
  } else if (state.confirmed && !state.deleted) {
    return (
      <React.Fragment>
        <p>Pedimos confirmación, Estas seguro?</p>
        <button
          onClick={() => {
            onDelete();
          }}
        >
          Eliminar
        </button>
        <button
          onClick={() => {
            onReset();
          }}
        >
          Cancelar
        </button>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h1>Eliminado con exito</h1>
        <button
          onClick={() => {
            onReset();
          }}
        >
          Volver atras
        </button>
      </React.Fragment>
    );
  }
}

export { UseState };
