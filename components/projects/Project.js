import Image from 'next/image';

Image;
export default function Project({ src, projectName, description }) {
  return (
    <div className='space-y-3 group'>
      <div className='relative w-full aspect-video '>
        <Image
          className=' group-hover:scale-105 transition-all md:grayscale group-hover:grayscale-0 bg-cover '
          src={src}
          layout='fill'
          alt=''
          objectFit='conta'
        />
      </div>
      <h2 className='text-2xl font-serif'>
        {projectName}
        <span className='inline-block group-hover:translate-x-4 transition-all'>
          →
        </span>
      </h2>
      <p className='font-thin text-sm'>{description}</p>
    </div>
  );
}
