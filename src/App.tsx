import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Maincomponent/Home";
import Navbar from "./component/Internalcomponent/Nav";
import Shop from "./component/Maincomponent/Shop";
import Footer from "./component/Internalcomponent/Footer";
import Artisian from "./component/Maincomponent/Artisian";
import Register from "./component/Maincomponent/Register";
import Login from "./component/Maincomponent/Login";
import Khanepani from "./component/Maincomponent/Khanepani";
import Dashboard from "./component/Maincomponent/Dashboard";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/artisian" element={<Artisian />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/khanepani" element={<Khanepani />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
