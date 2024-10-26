import { useCatImage } from "../hooks/useCatImage"

function Otro( { imgStyle} ){
    const { imageURL } = useCatImage( {fact: 'cat'} )

    return(
        <>
            {imageURL && <img src={imageURL} style={imgStyle} alt="img-extraction-of-first-word" />}
        </>
    )
}

export default Otro