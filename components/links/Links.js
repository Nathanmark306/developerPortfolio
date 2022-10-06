export default function Links({ name, ...others }) {
  return (
    <a
      {...others}
      className='text-accent relative group hover:text-white transition-all text-sm font-light'
    >
      {name}
      <span className=' w-full  bg-accent scale-x-0 group-hover:scale-x-100 transition-all absolute h-[2px] translate-y-2  bottom-0 left-0'></span>
    </a>
  );
}
