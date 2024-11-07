import React from 'react'
const products = [
    { id: 1, name: '노트북', price: 55000 },
    { id: 2, name: '마우스', price: 15000 },
    { id: 3, name: '키보드', price: 45000 },
    { id: 4, name: '마우스패드', price: 8000 },
    { id: 5, name: '모니터', price: 150000 }
  ];

  const mapproducts = products.map((products) =>{
    if(products.price >= 30000) {
      return <div>id:&nbsp;&nbsp;{products.id},&nbsp;&nbsp;
      name:&nbsp;&nbsp;{products.name},&nbsp;&nbsp;{products.price}
      </div>
    }
  })
export default function Products() {
  return (
    <div>{mapproducts}</div>
  )
}
