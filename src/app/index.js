import React, { Component } from 'react'
import './App.css'

import Welcome from './Components/Welcome'
import Informations from './Components/Information'

const dados = {
  name: 'Marcus',
  lastName: 'Botelho',
  location: {
    city: 'Fortaleza',
    state: 'Ceará',
    country: 'Brasil'
  }
}

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      text: 'Teste'
    }
  }
  render() {
    const { name, lastName, location: { city, state, country }} = dados
    console.log(dados)
    console.log(dados.location)
    console.log(city)
    return (
      <div>
        <Welcome name="Marcus"/>
        <Informations /> 
        <Informations 
          name={name} 
          lastName={lastName} 
          city={city}
          state={state}
          country={country} /> 
          <div>
            <h2>Teste com estado</h2>
            <h3>{this.state.text}</h3>
            <button 
              onClick={() => {this.setState(
                { text: 'Clicado' }
              )}} >Clique aqui!!!</button>
          </div>
      </div>
    )
  }
}

export default App;
/*
*** O desestruturamento funciona perfeitamente no console, mas não em tela
*** Porque as informações de cidade, estado e país não são renderizadas?
*** Se eu retirar o defaultProps de Information, ele da erro. Mas porque?
*** Sempre que ocorre uma mudança de estado o render é chamado novamente, como posso
chamar apenas a função que foi modificada, sem renderizar tudo em tela?
*/