import { AUTO_LANGUAJE } from '../constants';
import { Action, FromLanguaje, Languaje, type State } from '../types';
import { useReducer } from 'react';


// Cumplimiento de requisitos
// STEP 1: create initialState
const initialState: State = {
  fromLanguaje: "auto",
  toLanguaje: "en",
  fromText: "",
  result: "",
  loading: false,
};

// STEP 2: create function reducer()
function reducer(state: State, action: Action) {
  const { type } = action;

  if (type === "INTERCHANGE_LANGUAJES") {

    if(state.fromLanguaje == AUTO_LANGUAJE) return state

    return {
      ...state,
      fromLanguaje: state.toLanguaje,
      toLanguaje: state.fromLanguaje,
    };
  }

  if (type === "SET_FROM_LANGUAJE") {
    return {
      ...state,
      fromLanguaje: action.payload,
    };
  }

  if (type === "SET_TO_LANGUAJE") {
    return {
      ...state,
      toLanguaje: action.payload,
    };
  }

  if (type === "SET_FROM_TEXT") {
    return {
      ...state,
      loading: true,
      fromText: action.payload,
      result: "",
    };
  }

  if (type === "SET_RESULT") {
    return {
      ...state,
      loading: false,
      result: action.payload,
    };
  }

  return state;
}

export function useStore ( ){
    //STEP 3: use useReducer
    const [ state, dispatch ] = useReducer( reducer, initialState )

    console.log(state.fromLanguaje)

    // Pasar los dispatch 
    const interchangeLanguajes = () => {
        dispatch({  type: 'INTERCHANGE_LANGUAJES' })
    }

    const setFromLanguajes = ( payload: FromLanguaje) => {
        dispatch({ type: 'SET_FROM_LANGUAJE', payload })
    }

    const setToLanguajes = ( payload: Languaje ) => {
        dispatch({ type: 'SET_TO_LANGUAJE', payload})
    }

    const setFromText = ( payload: string ) => {
        dispatch({ type: 'SET_FROM_TEXT', payload})
    }

    const setResult = ( payload: string ) => {
        dispatch({ type: 'SET_RESULT', payload})
    }

    return { 
        state, 
        interchangeLanguajes,
        setFromLanguajes,
        setToLanguajes,
        setFromText,
        setResult
    }
}
