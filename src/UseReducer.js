import React, { useEffect, useReducer, Fragment } from "react";

const SECURITY_CODE = "paradigma";

function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onWrite = (event) =>
    dispatch({ type: actionTypes.white, payload: event });
  const onError = () => dispatch({ type: actionTypes.error });
  const onCheck = () => dispatch({ type: actionTypes.check });
  const onReset = () => dispatch({ type: actionTypes.reset });
  const onDelete = () => dispatch({ type: actionTypes.delete });
  const onConfirm = () => dispatch({ type: actionTypes.confirm });

  useEffect(() => {
    if (state.loading) {
      setTimeout(() => {
        if (state.value === SECURITY_CODE) {
          onConfirm();
        } else {
          onError();
        }
      }, 1000);
    }
  }, [state.loading]);

  if (!state.deleted && !state.confirmed) {
    return (
      <div>
        <h2>Eliminar UseReducer</h2>
        <p>Por favor, escriba el código de seguridad.</p>
        {state.loading ? "Cargando..." : state.error ? "ERROR :(" : null}
        <br />
        <input
          type="text"
          placeholder="código de seguridad"
          value={state.value}
          onChange={
            (ev) => onWrite(ev.target.value)
            // dispatch({ type: actionTypes.white, payload: ev.target.value })
          }
        />
        <button
          onClick={() => {
            onCheck();
          }}
        >
          Comprobar
        </button>
      </div>
    );
  } else if (!state.deleted && state.confirmed) {
    return (
      <Fragment>
        <p>Pedimos confirmación. ¿Tas seguro?</p>
        <button onClick={onDelete}>Si, eliminar</button>
        <button onClick={onReset}>No, me arrepentí</button>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <p>Eliminado con éxito</p>
        <button onClick={onReset}>Regresar</button>
      </Fragment>
    );
  }
}

const initialState = {
  value: "",
  loading: false,
  error: false,
  deleted: false,
  confirmed: false,
};

const actionTypes = {
  error: "ERROR",
  confirm: "CONFRIM",
  white: "WRITE",
  check: "CHECK",
  delete: "DELETE",
  reset: "RESET",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.error:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case actionTypes.confirm:
      return {
        ...state,
        loading: false,
        error: false,
        confirmed: true,
      };
    case actionTypes.white:
      return {
        ...state,
        value: action.payload,
      };
    case actionTypes.check:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case actionTypes.delete:
      return {
        ...state,
        deleted: true,
      };
    case actionTypes.reset:
      return {
        ...state,
        value: "",
        confirmed: false,
        deleted: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export { UseReducer };
