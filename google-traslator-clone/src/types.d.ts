import { type SUPPORTED_LANGUAJES, type AUTO_LANGUAJE } from "./constants"

// keyof <-- quiere decir que Languaje puede ser una de las propiedades o keys de SUPOORTED_LANGUAJES
export type Languaje = keyof typeof SUPPORTED_LANGUAJES 
export type AutoLanguaje = typeof AUTO_LANGUAJE
export type FromLanguaje = Languaje | AutoLanguaje // Opcion de detectar idioma


// define la estructura
export interface State {
    fromLanguaje: FromLanguaje,
    toLanguaje: Languaje,
    fromText: string,
    result: string,
    loading: boolean
}

// con esto podemos definir que tipo va a tener la action.payload
export type Action = 
    | { type: 'INTERCHANGE_LANGUAJES' }
    | { type: 'SET_FROM_LANGUAJE', payload: FromLanguaje }
    | { type: 'SET_TO_LANGUAJE', payload: Languaje }
    | { type: 'SET_FROM_TEXT', payload: string }
    | { type: 'SET_RESULT', payload: string }

// Los enum es una forma de evitar el uso de los strings
export enum SelectionTypes {
    From = 'from',
    To = 'to'
}
    