import Image from 'next/image';
import { useState } from 'react';
import Button from '../button/Button';
import Links from '../links/Links';

export default function Nav() {
  const [clicked, setClicked] = useState(false);
  return (
    <nav className=' text-white flex items-center justify-between mb-14 '>
      <h2 className='font-serif text-base '>Johnathan Specter</h2>
      <div className=' hidden md:block space-x-8'>
        <Links name='Article' href='#' />
        <Links name='Chats' href='#' />
        <Links name='Awards' href='#' />
        <Links name='About' href='#' />
      </div>
      <div className='hidden md:block'>
        <Button />
      </div>
      <div className='md:hidden' onClick={() => setClicked(!clicked)}>
        <Image src='/Assets/Hamburger_Menu.svg' width={24} height={20} alt='' />
      </div>
      <div
        className={`${
          clicked ? 'translate-x-0' : 'translate-x-full'
        } transition-all md:hidden w-1/2 z-50 h-screen bg-black absolute top-0 right-0 px-16 py-8 space-y-10`}
      >
        <div className='flex justify-end' onClick={() => setClicked(!clicked)}>
          <Image
            src='/Assets/Hamburger_Menu.svg'
            width={24}
            height={20}
            alt=''
          />
        </div>
        <div className='flex flex-col text-2xl font-thin space-y-5'>
          <span>Article</span>
          <span>Chats</span>
          <span>Awards</span>
          <span>About</span>
        </div>
        <Button />
      </div>
    </nav>
  );
}
