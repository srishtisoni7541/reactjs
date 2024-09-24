import React from 'react'

const Card = ({username='soni',btntext='hover me'}) => {
    return (
        <div className="card h-[25vw] w-[20vw] bg-red-400 flex flex-col gap-2 items-center justify-between" >
            <img className='h-[50%] w-full object-cover' src="https://plus.unsplash.com/premium_photo-1677546888854-a41b94bcf6f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FkYnVyeXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
            <h1 className='font-bold text-2xl'>{username}</h1>
            <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae minima accusamus ex at? Omnis, ipsa!</p>
            <button className='p-2 bg-blue-600 rounded-md mb-2'>{btntext}</button>
        </div>


    )
}

export default Card
