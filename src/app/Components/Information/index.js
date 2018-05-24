import React from 'react'
import './style.css'

const Informations = props => {
  console.log('Informação', props)
  return (
    <div className="infoBox">
      <div>Nome = {props.name}</div>
      <div>Nome = {props.data.name}</div>
      <div>Sobrenome = {props.lastName}</div>
      <div>Cidade = {props.city}</div>
      <div>Estado = {props.state}</div>
      <div>País = {props.country}</div>
    </div>
  )
}

Informations.defaultProps = {
  name: 'Visitante',
  lastName: 'Desconhecido',
  city: 'Não informada',
  state: 'Não informada',
  country: 'Não informada'
}

export default Informations