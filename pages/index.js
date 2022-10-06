import Head from 'next/head';
import Client from '../components/clients/Client';
import About from '../components/extaInfo/About';
import Footer from '../components/footer/Footer';
import Layout from '../components/Layout/Layout';
import Projects from '../components/projects/Projects';
import { getAllLogos } from '../lib/logos';

export async function getStaticProps() {
  const logos = await getAllLogos();
  return { props: { logos } };
}

export default function Home({ logos }) {
  return (
    <>
      <Layout>
        <Head>
          <title>JS</title>
          <meta charset='UTF-8' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
          <meta name='author' content='Nathan Mark' />
          <meta name='copyright' content='codewell.com' />
          <meta name='description' content='Portfolio project from Codewell' />
        </Head>
        <header className='md:w-1/2 space-y-4 mb-14 '>
          <h1 className='text-5xl font-serif'>
            Helping companies build better, scalable software.
          </h1>
          <p className='paragraphs'>
            Award-winning web developer and author, with over 154 years of
            working experience with Fortune 500 companies like Apple, Google,
            Facebook, and more.
          </p>
        </header>
        <Client logos={logos} />
        <Projects />
      </Layout>
      <About />
      <Footer />
    </>
  );
}
