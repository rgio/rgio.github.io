import './App.css';
import Navbar from './components/Navbar.js';
import Bio from './components/Bio.js';
import Content from './components/Content.js';

function App() {
  return (
    <div className="App bg-gray-800 h-full">
      <Navbar/>
      <Bio/>
      <Content/>
    </div>
  );
}

export default App;
