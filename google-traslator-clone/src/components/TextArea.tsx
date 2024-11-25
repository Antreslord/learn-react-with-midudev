import { Form } from "react-bootstrap"
import { SelectionTypes } from "../types.d"

interface Props {
    type: SelectionTypes
    loading?: boolean
    onChange: (value: string) => void
    value: string
}

const commonStyles = { border: 0, height: '200px' }

const getPlaceHolder = ({ type, loading } : { type: SelectionTypes, loading?: boolean }) =>{
    if(type === SelectionTypes.From) return 'Introducir texto'
    if(loading === true) return 'Cargando'
    return 'Traducción'
}

export const TextArea = ({ type, loading, value, onChange }: Props) => {
    
    const styles = type === SelectionTypes.From ? commonStyles : {...commonStyles, backGroundColor: '#f5f5f5'}
    
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange(event.target.value)
    }

    return(
        <Form.Control
            as='textarea'
            autoFocus={type === SelectionTypes.From}
            placeholder={getPlaceHolder({ type, loading })}
            style={styles}
            value={value}
            onChange={handleChange}
        />
    )
}