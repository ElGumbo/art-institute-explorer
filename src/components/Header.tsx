import React from "react";
import { Link } from "react-router";

export default function Header() {
  return (
    <div className='navbar bg-base-100 border-b border-base-300 px-6'>
      <div className='flex-1'>
        <Link to='/' className='flex flex-col leading-tight'>
          <span className='text-xs uppercase tracking-widest text-error font-medium'>
            Art Institute of Chicago
          </span>
          <span className='font-serif text-xl font-normal text-base-content'>
            Collection Explorer
          </span>
        </Link>
      </div>
      <div className='flex gap-6'>
        <Link
          to='/'
          className='text-sm text-base-content/60 hover:text-base-content transition-colors'
        >
          Home
        </Link>
        <Link
          to='/gallery'
          className='text-sm text-base-content/60 hover:text-base-content transition-colors'
        >
          Gallery
        </Link>
      </div>
    </div>
  );
}
