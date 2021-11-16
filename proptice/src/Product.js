import React from 'react'
import ItemDescription from "./ItemDescription"
import Price from "./Price"

export default function Product({name, description, price}) {
return (
<div> 
<ItemDescription name={name} description={description}/>
<Price price={price} />
  </div>

)


}