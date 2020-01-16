import React, { useState } from 'react';


export default function StateExample() {
  
  // Assim criamos um estado na nossa aplicação.
  const [ counter, setCounter ] = useState(0);

  // Funções próprias de um componente, a gente cria no próprio componente
  function incrementCounter() {
    //imutabilidade: React sempre irá criar um novo counter
    setCounter(counter + 1);
  }

  return (
    <>
      <h3>Contador: {counter}</h3>
      <button onClick={incrementCounter}>Incrementar</button>
    </>
  );
}
