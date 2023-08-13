import "./App.css";
import Banner from "./components/Banner/Banner";
import LaunchePad from "./components/LaunchePad/LaunchePad";
import Vehicles from "./components/Vehicles/Vehicles";
import Timeline from "./components/Timeline/Timeline";
import Footer from "./components/Footer/Footer";
import Launches from "./components/Launches/Launches";
import AuthPage from "./components/AuthPage/AuthPage";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./context/UserContext";
import { NotifyContext } from "./context/NotifyContext";
import Notify from "./Utility/helper-component/Notify/Notify";
import axios from "axios";

function App() {
  const { user, setUser } = useContext(UserContext);
  const { notify, setNotify } = useContext(NotifyContext);
  const [showModel, setShowModel] = useState(false);

  const fetchUser = () => {
    axios
      .post(
        "http://localhost:5000/api/auth/user",
        {},
        { withCredentials: true }
      )
      .then((res) => {
        if (res.status == 200) {
          setNotify({
            color: "bg-green-700",
            message: "Welcome back!",
          });
          setUser(() => {
            return {
              ...res.data,
              id: res.data.id,
            };
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    if (notify) {
      setTimeout(() => {
        setNotify(null);
      }, 3000);
    }
  }, [notify]);

  return (
    <div>
      {notify && <Notify color={notify.color}>{notify.message}</Notify>}
      {!user && showModel && (
        <AuthPage closeModel={() => setShowModel(false)} />
      )}
      <Banner viewModel={()=>setShowModel(true)}/>
      <LaunchePad />
      <Vehicles />
      <Timeline />
      <Launches />
      <Footer />
    </div>
  );
}

export default App;
