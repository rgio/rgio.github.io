import './App.css';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';

function App() {
  return (
    <div className="App bg-white h-full">
      <Hero/>
      <Projects/>
    </div>
  );
}

//TODO: Add box shadow on projects, fix column spacing
export default App;
