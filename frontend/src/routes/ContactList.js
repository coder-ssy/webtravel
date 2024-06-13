import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutImg from '../assets/contact.jpg';
import Footer from '../components/Footer';
import ContactListForm from '../components/ContactList';

function ContactList() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="ContactList"
        btnClass="hide"
      />
      <ContactListForm />
      <Footer />
    </>
  );
}

export default ContactList;
