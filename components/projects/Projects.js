import Image from 'next/image';
import Yelp from '../../public/YelpCamp.png';
import Spense from '../../public/Spense.png';

import Project from './Project';
export default function Projects() {
  return (
    <section
      id='projects'
      className=' space-y-8 md:space-y-0 flex flex-col md:flex-row md:gap-20'
    >
      {/* YelpCamp */}
      <Project
        src={Yelp}
        projectName={'YelpCamp'}
        description={`Allowing backpack travelers to perfectly plan their trip
through an open-source platform similar to TripAdvisor. With
over 1m MAU, YelpCamp has been the crowd's favorite in
2021.`}
      />
      {/* Spense */}
      <Project
        src={Spense}
        projectName={'Spense'}
        description={`Rethinking the way writers get paid, an open-source platform
designed to help writers focus more on writing, and less on
when and how they'll get paid. Project in collaboration with
Codewell.cc`}
      />
    </section>
  );
}
