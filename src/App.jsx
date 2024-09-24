
import React from 'react';
import Home from './assets/components/Home';
import Nav from './assets/components/Nav';
import Card from './assets/components/Card';
import About from './assets/components/About';
import { useState } from 'react';
import './index.css';
const App = () => {
  let [counter, setCounter] = useState(0);
  const Addvalue = () => {
    setCounter(counter++);
  }

  const RemoveValue = () => {
    setCounter(counter--);
  }
  let data = "Counter";
  let subjects = ['maths', 'sst', 'hindi'];
  let profile = {
    name: 'srishti',
    age: 19,
    email: 's@s.com',
  };
//HOW TO RENDER A ARRAY ON REACT
  // let users = [
  //   {
  //     name: 'srishti',
  //     age: 19,
  //   },
  //   {
  //     name: 'srishti',
  //     age: 19,
  //   },
  //   {
  //     name: 'srishti',
  //     age: 19,
  //   },
  // ];
  //using the map method in react.
  // let r = users.map((u) =>
  //   <>
  //     <h1>{u.name}</h1>
  //     <h1>{u.age}</h1></>
  // );


  const getinfo = () => {
    console.log('hello from srishti!');
  }
  const takeinfo = (info) => {
    console.log(info);
  }

  const [color,setColor]=useState('pink');

  return (

    <div className=' h-screen w-full'>
      <div className="page1 h-screen w-full text-center gap-3  flex items-center justify-center p-12 bg-gray-400">
        <Nav />

        <button onClick={getinfo} className='py-2 px-4 rounded bg-red-200'>click me</button>
        <button onClick={() => takeinfo('hello')} className='py-2 px-4 rounded bg-red-200'>press me</button>
        <div className="container flex flex-col gap-3 items-center justify-center">
          {/* {r} */}
          <h1 className='text-5xl font-bold'>{data}</h1>

          <h1 className='text-3xl font-bold text-red-400'>{counter}</h1>
          <button onClick={Addvalue} className='p-2 rounded-md bg-blue-500 text-white hover:bg-blue-700'>Addvalue</button>
          <button onClick={RemoveValue} className='p-2 rounded-md bg-red-500 text-white hover:bg-red-700'>Removevalue</button>
        </div>
        <Card username="srishti" btntext='click me' />
        <Card />
      </div>
      <div className="page2 p-2 h-screen w-full duration-200" style={{backgroundColor:color}}>
        <div className="colorbar h-[90vh] w-[4vw] ml-4 mt-4  rounded-full bg-white flex flex-col items-center justify-center gap-6 shadow-lg">
          <div className="redcircle h-[3vw] w-[3vw] rounded-full hover:scale-75  bg-red-600 " onClick={()=>setColor('red')}></div>
          <div className="bluecircle h-[3vw] w-[3vw] rounded-full bg-blue-600   hover:scale-75 " onClick={()=>setColor('blue')}></div>
          <div className="yellowcircle h-[3vw] w-[3vw] rounded-full bg-yellow-600  hover:scale-75  " onClick={()=>setColor('yellow')}></div>
          <div className="purplecircle h-[3vw] w-[3vw] rounded-full bg-purple-600  hover:scale-75  " onClick={()=>setColor('purple')}></div>
          <div className="greencircle h-[3vw] w-[3vw] rounded-full bg-green-600  hover:scale-75  " onClick={()=>setColor('green')}></div>
        </div>
      </div>



    </div>
  );
};

export default App;
