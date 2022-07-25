// dispacher da arquitetura Flux fica com a parte principal da Logica, e é o que faremos neste componente

import { useReducer } from "react";

// para não iniciar a aplicação com estado vazio, sera aplicado esse estado inicial com a string vazia 
const STATE_INICIAL = {
    resultado: ''
}


const somaReducer = ( state = STATE_INICIAL, action) => {
    console.log('action executada' , JSON.stringify(action)) 
    switch( action.type ){
        case 'SUBTRAÇÃO':
        case 'SOMA':
            return {...state, resultado: action.payload }
        default:
            return state;    
    }
}

// abaixo criando um Hook a partir de outro Hook 
// o useReducer recebe dois parametros, o primeiro que é reducer que sera tratado, o segundo o estado, que neste caso é o inicial
// o useStore sera utilizado noc componentes que queiram ser utilizados como parametro o reducer

const useStore = () => useReducer(somaReducer, STATE_INICIAL)
export default useStore