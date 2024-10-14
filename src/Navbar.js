import React from 'react';

function Navbar() {
  return (
    <div className='bg-white text-white'>
      <nav className='flex bg-black  items-center justify-between p-4 fixed   w-full z-10 '>
        <h1 className='text-red-600 text-3xl font-bold cursor-pointer'>
          NETFLIX
        </h1>
        <div>
          <button className='text-white text-sm font-semibold pr-4'>
            Sign In
          </button>
          <button className='bg-red-600 px-6 py-2 rounded text-white font-semibold text-sm'>
            Sign Up
          </button>
        </div>
      </nav>
      <div className='pt-16'>
        {/* Your other content goes here */}
      </div>
    </div>
  );
}

export default Navbar;
