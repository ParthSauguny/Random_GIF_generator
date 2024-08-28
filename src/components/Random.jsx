import React, { useEffect, useState } from 'react';
import axios from 'axios';
const API_KEY = '32BHKkhfbMPRFy5FzUQ5KgPWHEuQmHCq';

function Random() {
    const [gif , setGif] = useState('');
    const API_URL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

    async function fetchData(){
      const {data} = await axios.get(API_URL);
      const url = data.data.images.downsized_large.url;
      setGif(url);
    }

    useEffect(() =>{
      fetchData();
    },[])

    function clickHandler(){
      fetchData();
    }

  return (
    <div className='flex flex-col bg-fuchsia-800 border-4 border-blue-500 items-center py-2 gap-y-1 my-4'>
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