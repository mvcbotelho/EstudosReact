import React from 'react'
import './style.css'

const Informations = props => (
  <div className="infoBox">
    <div>Nome = {props.name}</div>
    <div>Sobrenome = {props.lastName}</div>
    <div>Cidade = {props.location.city}</div>
    <div>Estado = {props.location.state}</div>
    <div>País = {props.location.country}</div>
  </div>
)

Informations.defaultProps = {
  name: 'Visitante',
  lastName: 'Desconhecido',
  location: {
    city: 'Não informada',
    state: 'Não informada',
    country: 'Não informada'
  }
}

export default Informations