import './App.css';
import Intro from './Intro';
import Intro2 from './Intro2';
import Nav from './Nav';
import Rule from './Rule';
import Timeline from './Timeline';

function App() {
  return (
    <div className="App">
     <Nav />
     <Intro/>
     <Intro2/>
     <Rule/>
     <Timeline />
    </div>
  );
}

export default App;
