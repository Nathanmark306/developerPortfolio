import Image from 'next/image';

export default function Projects() {
  return (
    <section id='projects'>
      <div>
        <div className='relative w-28'>
          <Image src='/YelpCamp.png' layout='fill' alt='' objectFit='contain' />
        </div>
        <h2>Spense.com →</h2>
        <p>
          {`Rethinking the way writers get paid, an open-source p latform designed
          to help writers focus more on writing, and less on when and how
          they'll get paid. Project in collaboration with Codewell.cc`}
        </p>
      </div>
      {/* <div>
        <Image />
        <h2>Spense.com →</h2>
        <p>
          Rethinking the way writers get paid, an open-source platform designed
          to help writers focus more on writing, and less on when and how
          they'll get paid. Project in collaboration with Codewell.cc
        </p>
      </div> */}
    </section>
  );
}
