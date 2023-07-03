import React from 'react'

const Card = (props) => {
  return (
   <>
    <img src={props.url} alt={props.name} />
    <p style={{"color":"Orange","fontWeight":"bold"}}>{props.name}</p>
    <p>Rank : {props.rank}</p>
    <p>Price :  {props.price}</p>
    <p>marketCap : {props.marketCap}</p>
   </>
  )
}

export default Card
