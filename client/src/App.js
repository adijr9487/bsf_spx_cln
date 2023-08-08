import './App.css';
import Banner from './components/Banner/Banner';
import Launches from './components/Launches/Launches';
import Vehicles from './components/Vehicles/Vehicles';
import Timeline from './components/Timeline/Timeline';

function App() {
  return (
    <div>
      <Banner />
      <Launches />
      <Vehicles />
      <Timeline />
    </div>
  );
}

export default App;
