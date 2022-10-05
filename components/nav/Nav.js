export default function Nav() {
  return (
    <nav className=' text-white flex items-center justify-between mb-14'>
      <h2 className='font-serif text-base '>Johnathan Specter</h2>
      <div className='space-x-8 text-sm font-thin'>
        <span>Article</span>
        <span>Chats</span>
        <span>Awards</span>
        <span>About</span>
      </div>
      <button className='font-serif text-base bg-button px-6 py-2 text-black'>
        Get in touch
      </button>
    </nav>
  );
}
