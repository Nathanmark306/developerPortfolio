import Footer from '../footer/Footer';
import Nav from '../nav/Nav';
export default function Layout({ children }) {
  return (
    <div className='bg-black text-white px-24 py-8 font-sans'>
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
