import Button from '../button/Button';
import Image from 'next/image';
import github from '../../public/Assets/Social_Icons/Github.svg';
import linkedIn from '../../public/Assets/Social_Icons/LinkedIn.svg';
import twitter from '../../public/Assets/Social_Icons/Twitter.svg';

export default function Footer() {
  return (
    <footer className='  pt-8 bg-black text-white '>
      <div className='mx-24 space-y-3 py-10'>
        <h2 className='text-2xl font-serif'>Interested in workin with me?</h2>
        <p className='paragraphs w-80 '>
          I&apos;m active on all social media platforms listed below, but you
          can also me an email and I will get back to you within 24-48 hours.
        </p>
        <Button />
      </div>
      <div className='bg-secondary flex justify-between py-3 px-24  '>
        <h2 className='font-serif text-base '>Johnathan Specter</h2>
        <div className='flex gap-4'>
          <Image src={github} alt='' />
          <Image src={linkedIn} alt='' />
          <Image src={twitter} alt='' />
        </div>
      </div>
    </footer>
  );
}
