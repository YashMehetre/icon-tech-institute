import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Courses from "./sections/Courses";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import PopupForm from "./components/PopupForm";

const App = () => {
  return (
    <div>
      <Navbar />
      <section id="home"><Home /></section>
      <section id="courses"><Courses /></section>
      <section id="about"><About /></section>
      <section id="contact"><Contact /></section>
      <PopupForm />
      <Footer />
    </div>
  );
};

export default App;
