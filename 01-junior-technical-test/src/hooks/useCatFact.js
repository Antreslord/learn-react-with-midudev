import { useState, useEffect } from "react";
import { getRandomFact } from "../services/fact";

// custom Hook { useCatFact } => return { fact, getRandomFactAndUpdateState }
export function useCatFact(){
  const [fact, setFact] = useState();

  const refreshRandomFact = () => {
    getRandomFact().then(newFact => setFact(newFact));
  };

  // este useEffect recupera la primer palabra del facto
  useEffect(refreshRandomFact, []);

  return { fact, refreshRandomFact };
};