import { useState } from 'react';
import Random from './components/Random';
import Tagwale from './components/Tagwale';
import './index.css';

function App() {

  return (
    <div className='flex flex-col bg-zinc-700 h-screen items-center'>
      <div className='bg-slate-200 text-blue-700 py-2 text-center font-bold text-3xl my-4 mx-auto rounded-xl'>
        <h1>A RANDOM GIF</h1>
      </div>
      <div className='flex flex-col my-10 w-1/2'>
        <Random/>
        <Tagwale/>
      </div>
    </div>
  )
}

export default App
