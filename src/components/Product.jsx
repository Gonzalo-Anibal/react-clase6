import React from 'react'

export default function Product(props) {
  return (
    <div className='product'>
        <div className='content'>
            <p>{props.id}</p>
            <p>{props.name}</p>
            <p>{props.stock}</p>
            <p>{props.cost}</p>
            <p>{props.description}</p>
            <p>{props.capacity}</p>
            <img src={props.image} alt="No hay imagen" width='200px' height='250px' />
        </div>
    </div>
  )
}
