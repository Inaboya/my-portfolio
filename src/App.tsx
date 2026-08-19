import Nav from "./components/Nav";
import Ticker from "./components/Ticker";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Profile from "./components/Profile";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-ink font-body text-text">
      <Nav />
      <Ticker />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Profile />
      </main>
      <Footer />
    </div>
  );
}

export default App;
