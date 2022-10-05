export default function Client({ logos }) {
  return (
    <section className='flex justify-between items-center'>
      {logos.map((logo, i) => (
        <img key={i} src={`/Assets/Logos/${logo}`} alt='' className='w-24' />
      ))}
    </section>
  );
}
