import React, { useState } from 'react';


function App() {
  const [ numero, setNumero] = useState()
  const  [ segundoNumero, setSegundoNumero ] = useState()
  const [ resultado, setResultado ] = useState()

  const somar = () => {
    const numeroInt = parseInt(numero)
    const segNumeroInt = parseInt(segundoNumero)
    setResultado(numeroInt + segNumeroInt)
  }

  return (
    <div className="App">
      Numero 1:<br />
      <input type="text" value={numero} onChange={e => setNumero(e.target.value)}/> <br />
      Numero 2:<br />
      <input type="text" value={segundoNumero} onChange={e => setSegundoNumero(e.target.value)} /><br />
      Resultado:<br />
      <button onClick={somar}>Somar</button><br />
      Resultado: <br />
      <input type="text" value={resultado} /><br />
    </div>
  );
}

export default App;


/*
Pode ser declado da seguinte forma, tambem:
const [state, setState] = useState({
  numero: 0,
  segundoNumero: 0,
  resultado: 0
})
*/ 