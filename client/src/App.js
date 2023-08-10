import './App.css';
import Banner from './components/Banner/Banner';
import LaunchePad from './components/LaunchePad/LaunchePad';
import Vehicles from './components/Vehicles/Vehicles';
import Timeline from './components/Timeline/Timeline';
import Recent from './components/Recent/Recent';
import Footer from './components/Footer/Footer';
import Launches from './components/Launches/Launches';
import AuthPage from './components/AuthPage/AuthPage';

function App() {
  return (
    <div>
      <AuthPage />
      <Banner />
      <LaunchePad />
      <Vehicles />
      <Timeline />
      <Recent />
      <Launches />
      <Footer />
    </div>
  );
}

export default App;
