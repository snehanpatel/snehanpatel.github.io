import './App.css';
import Home from './components/Home';
import About from './components/About';
import Experiences from './components/Experiences';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Experiences />
      {/* <Skills />
      <Contact /> */}
      <div className="SkillsAndContact">
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
