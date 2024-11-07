import React from 'react'

const imgUrls = [
    "https://images.dog.ceo/breeds/gaddi-indian/Gaddi.jpg",
    "https://images.dog.ceo/breeds/terrier-westhighland/n02098286_3154.jpg",
    "https://images.dog.ceo/breeds/malamute/n02110063_16752.jpg",
    "https://images.dog.ceo/breeds/bulldog-english/jager-2.jpg",
  ];

  const mapimg = imgUrls.map((img) =>{
    return <img src={img} style={{width:"200px"}}></img>
  })

export default function Imgurls() {
  return (
    <div>{mapimg}</div>
  )
}
