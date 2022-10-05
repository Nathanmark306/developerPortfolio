import Client from '../components/clients/Client';
import Layout from '../components/Layout/Layout';
import Projects from '../components/projects/Projects';
import { getAllLogos } from '../lib/logos';

export async function getStaticProps() {
  const logos = await getAllLogos();
  return { props: { logos } };
}

export default function Home({ logos }) {
  return (
    <Layout>
      <header className='w-1/2 space-y-4 mb-20'>
        <h1 className='text-5xl font-serif'>
          Helping companies build better, scalable software.
        </h1>
        <p className='font-thin text-sm'>
          Award-winning web developer and author, with over 154 years of working
          experience with Fortune 500 companies like Apple, Google, Facebook,
          and more.
        </p>
      </header>
      <Client logos={logos} />
      <Projects />
    </Layout>
  );
}
