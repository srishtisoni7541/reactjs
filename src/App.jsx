
import React from 'react';

const App = () => {
  return (
    <div>
      <h1 className='text-5xl font-bold'>Srishti Soni</h1>
      <h2>{import.meta.env.VITE_SECRET_KEY}</h2>
      <h3>hello</h3>
      <button className='p-2  rounded-md'>submit</button>

    </div>
  );
};

export default App;
