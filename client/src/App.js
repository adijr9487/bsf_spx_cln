import './App.css';
import Banner from './components/Banner/Banner';
import Launches from './components/Launches/Launches';
import Vehicles from './components/Vehicles/Vehicles';
import Timeline from './components/Timeline/Timeline';
import Recent from './components/Recent/Recent';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Banner />
      <Launches />
      <Vehicles />
      <Timeline />
      <Recent />
      <Footer />
    </div>
  );
}

export default App;
