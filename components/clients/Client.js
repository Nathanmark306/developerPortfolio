export default function Client({ logos }) {
  return (
    <section className='flex flex-wrap w-1/2 gap-4 mx-auto  md:justify-between md:items-center md:w-full mb-14 md:gap-0'>
      {logos.map((logo, i) => (
        <img key={i} src={`/Assets/Logos/${logo}`} alt='' className='w-24' />
      ))}
    </section>
  );
}
