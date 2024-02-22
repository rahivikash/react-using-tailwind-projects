import React, { useState } from 'react';
import './App.css';

function App() {
  const [showMenu, setShowMenu] = useState(0);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <>
      <div className='flex justify-between items-center px-4'>
        <div>
          <img src="/public/brand_logo.png" alt="logo" />
        </div>
        <nav className='hidden md:block'>
          <ul className='flex flex-row space-x-6'>
            <li className='hover:cursor-pointer font-semibold'>MENU</li>
            <li className='hover:cursor-pointer font-semibold'>LOCATION</li>
            <li className='hover:cursor-pointer font-semibold'>ABOUT</li>
            <li className='hover:cursor-pointer font-semibold'>CONTACT</li>
          </ul>
        </nav>
        <div className="md:hidden ml-80" onClick={toggleMenu}>
          <a className="text-4xl" href="#">&#8801;</a>
        </div>
        <div>
          <button style={{ backgroundColor: 'rgb(208, 28, 40)' }} className='pl-3 pr-3 pt-0.5 pb-1.5 text-white font-semibold hidden md:block'>Login</button>
        </div>
      </div>

      <div id="mobileNav" className={`md:hidden ${showMenu ? '' : 'hidden'}`}>
        <ul className='flex flex-col space-y-4'>
          <li className='hover:cursor-pointer font-semibold'>MENU</li>
          <li className='hover:cursor-pointer font-semibold'>LOCATION</li>
          <li className='hover:cursor-pointer font-semibold'>ABOUT</li>
          <li className='hover:cursor-pointer font-semibold'>CONTACT</li>
        </ul>
      </div>

      <div >
        <div className='flex flex-col-reverse justify-between md:flex md:flex-row md:justify-between mt-14 ml-20 mr-24 mb-24 bg-white'>
          <div className="w-1/2 mr-14 text-left">

            <h1 className='text-6xl font-extrabold mb-8'>YOUR FEET DESERVE THE BEST</h1>

            <p className='mb-8'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

            <button style={{ backgroundColor: 'rgb(208, 28, 40)' }} className='pl-3 pr-3 pt-0.5 pb-1.5 text-white font-semibold mb-6'>Shop Now</button>

            <button className='pl-3 pr-3 pt-0.5 pb-1.5 text-gray-600 bg-white font-semibold border border-solid border-black md:ml-8 ml-1 mb-4'>Category</button>

            <div>
              <p className='mb-4'>Also Available On</p>
              <div className='flex flex-row space-x-4'>
                <img src="/public/flipkart.png" alt="shop_logo" />
                <img src="/public/amazon.png" alt="shop_logo" />
              </div>
            </div>
          </div>

          <div className="md:w-1/2 ">
            <img src="/public/shoe_image.png" alt="shoe_image" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
