import React, { useState , useEffect } from 'react';
import axios from 'axios';
const API_KEY = '32BHKkhfbMPRFy5FzUQ5KgPWHEuQmHCq';

function Tagwale() {
  const [tag , setTag] = useState('');

  const changeHandler = (event) => {
    setTag(event.target.value);
  }

  const [gif , setGif] = useState('');
  const API_URL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

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
    <div className='flex flex-col bg-orange-600 border-4 border-green-500 items-center py-2 gap-y-1 my-4'>
        <h1>SEARCH FOR GIFS</h1>
        <img src="" width="450"/>

        <input type="text" className='bg-black bg-opacity-20' onChange={changeHandler}/>


        <button onClick={clickHandler}
        className='bg-white rounded-lg px-2 py-1'>
            Generate
        </button>
    </div>
  )
}

export default Tagwale