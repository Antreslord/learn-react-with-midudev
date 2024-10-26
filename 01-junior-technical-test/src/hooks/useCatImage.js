import { useState, useEffect } from "react"

// crear un CUSTOM HOOK
// recuperar la imagen del gato
export function useCatImage ({fact}) {
    const [ imageURL, setImageURL ] = useState()
  
    //este useEffect recupera la imagen del facto
    useEffect(()=>{
      if(!fact) return
  
      // dividir el facto por palabras y obtener la primera palabra 
      const firstWord = fact.split(' ')[0]
      
      // obtener la imagen con la primera palabra
      fetch(`https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red`)
      .then(response => {
        const { url } = response
        setImageURL(url)
      })
    },[fact])
  
    return { imageURL }
  }