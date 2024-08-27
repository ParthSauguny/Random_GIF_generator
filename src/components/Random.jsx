import React, { useState } from 'react'

function Random() {
    const [gif , setGif] = useState('');

    function clickHandler(){

    }

  return (
    <div className='flex flex-col bg-orange-600 border-4 border-green-500 items-center py-2 gap-y-1'>
        <h1>RANDOM GIFS</h1>
        <img src={gif} width="450"/>

        <button onClick={clickHandler}
        className='bg-white rounded-lg px-2 py-1'>
            Generate
        </button>
    </div>
  )
}

export default Random