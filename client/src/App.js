import './App.css';
import Banner from './components/Banner/Banner';
import LaunchePad from './components/LaunchePad/LaunchePad';
import Vehicles from './components/Vehicles/Vehicles';
import Timeline from './components/Timeline/Timeline';
import Recent from './components/Recent/Recent';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Banner />
      <LaunchePad />
      <Vehicles />
      <Timeline />
      <Recent />
      <Footer />
    </div>
  );
}

export default App;
