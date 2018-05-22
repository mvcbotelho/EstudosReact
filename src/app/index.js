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
      </div>
    )
  }
}

export default App;
/*
*** O desestruturamento funciona perfeitamente no console, mas não em tela
*** Porque as informações de cidade, estado e país não são renderizadas?
*** Se eu retirar o defaultProps de Information, ele da erro. Mas porque?
*/