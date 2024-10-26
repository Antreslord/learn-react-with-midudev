// url del facto random
const FACTS_FIRTS_WORD_RANDOM = "https://catfact.ninja/fact";

// funcion que recupera la primer palabra del facto
// Sin ASYNC - AWAIT
/*export const getRandomFact = () => {
  // obtener la primera palabra del facto
  return fetch(FACTS_FIRTS_WORD_RANDOM)
    .then((res) => res.json())
    .then((data) => {
      const { fact } = data;

      return fact;
    });
};*/


// con ASYNC - AWAIT
export const getRandomFact = async () => {
  //obtener la primera palabra del facto
  const res = await fetch(FACTS_FIRTS_WORD_RANDOM);
  const data = await res.json();
  const { fact } = data;
  return fact;
};
