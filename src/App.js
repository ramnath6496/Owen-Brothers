import './App.css';
import Header from './components/header/Header';
import Navbar from './components/header/Navbar';
import TopPanel from './components/header/TopPanel';

function App() {
  return (
    <div>
      <TopPanel />
      <Header />
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Navbar />
    </div>
  );
}

export default App;
