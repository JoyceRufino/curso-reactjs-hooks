import React, { useState } from 'react';
import useStore from './somaReducer';

function ReducerHook() {
  const [ numero, setNumero] = useState('')
  const  [ segundoNumero, setSegundoNumero ] = useState('')
  
  // store representa o state, dispacher objeto que despacha as ações 
  
  const [store, dispatch] = useStore()

    //para atualizar o store precisa despachar a action para que seja ativado
    // a action passada no somaReducer.js recebe um type e um payload 
  const somar = () => {
        const numeroInt = parseInt(numero)
        const segNumeroInt = parseInt(segundoNumero)
        
        console.log('dispachando a action')
        dispatch({
            type: 'SOMA',
            payload: numeroInt + segNumeroInt
        })

    }
    const subtrair = () => {
        const numeroInt = parseInt(numero)
        const segNumeroInt = parseInt(segundoNumero)
        
        dispatch({
            type: 'SUBTRAÇÃO',
            payload: numeroInt - segNumeroInt
        })

    }

  return (
    <div className="App">
      Numero 1:<br />
      <input type="text" value={numero} onChange={e => setNumero(e.target.value)}/> <br />
      Numero 2:<br />
      <input type="text" value={segundoNumero} onChange={e => setSegundoNumero(e.target.value)} /><br />
      <button onClick={somar}>Somar</button>
      <button onClick={subtrair}>Subtrair</button><br />
      Resultado: <br />
      <input type="text" value={store.resultado} /><br />
    </div>
  );
}

export default ReducerHook;

