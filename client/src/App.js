import './App.css';
import Banner from './components/Banner/Banner';
import Launches from './components/Launches/Launches';
import Vehicles from './components/Vehicles/Vehicles';
import Timeline from './components/Timeline/Timeline';
import Recent from './components/Recent/Recent';

function App() {
  return (
    <div>
      <Banner />
      <Launches />
      <Vehicles />
      <Timeline />
      <Recent />
    </div>
  );
}

export default App;
