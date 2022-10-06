import Footer from '../footer/Footer';
import Nav from '../nav/Nav';
export default function Layout({ children }) {
  return (
    <div className='bg-black text-white px-16 py-8 md:px-24 md:py-10 font-sans'>
      <Nav />
      <main>{children}</main>
    </div>
  );
}
