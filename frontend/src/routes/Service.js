import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutImg from '../assets/service.jpg';
import Footer from '../components/Footer';
import Trip from '../components/Trip';
import KakaoMap from '../components/KakaoMap';

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Service"
        btnClass="hide"
      />
      <Trip />
      <KakaoMap/>
      <Footer />
    </>
  );
}

export default Service;
