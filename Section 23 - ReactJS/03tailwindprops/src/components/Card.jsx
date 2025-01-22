import React from 'react'

function Card({username = "UH",post = "Not assigned Yet",src = "https://plus.unsplash.com/premium_photo-1700325233358-617e383c946f?q=80&w=2615&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",object_passed = {name:'Umang',surname:'not found'}}) {
    // console.log(props)
  return (
    <div>
        <img src={src} alt="no image found" />
        <h1 className='text-2xl bg-green-600 p-3 rounded'>{post}</h1>
        <p>{username}</p>
        <p>{object_passed.name}</p>
        <p>{object_passed.surname}</p>
    </div>
  )
}

export default Card