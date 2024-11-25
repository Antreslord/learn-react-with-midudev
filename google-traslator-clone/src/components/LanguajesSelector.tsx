import { Form } from "react-bootstrap"
import { AUTO_LANGUAJE, SUPPORTED_LANGUAJES } from "../constants"
import { SelectionTypes, type FromLanguaje, type Languaje } from "../types.d"

type Props = 
    | { type: SelectionTypes.From, value: FromLanguaje, onChange: (languaje: FromLanguaje) => void}
    | { type: SelectionTypes.To, value: Languaje, onChange: (languaje: Languaje) => void}

export const LanguajesSelector = ({ onChange, type, value }: Props) => {

    // tambien se debe tipar los elementos
    const handleChange = ( event: React.ChangeEvent<HTMLSelectElement> ) => {
        onChange(event.target.value as Languaje )
    }

    return(
        <Form.Select 
            aria-label="Selecciona un idioma" 
            onChange={handleChange}
            value={value}
        >
            { type === SelectionTypes.From && <option value={AUTO_LANGUAJE}>Detectar idioma</option>}
            {
                Object.entries(SUPPORTED_LANGUAJES).map(([ key, literal ]) => (
                    <option key={key} value={key}>
                        { literal }
                    </option>
                ))
            }
        </Form.Select>
    )
}