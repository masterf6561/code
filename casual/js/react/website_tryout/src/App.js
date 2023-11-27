import './App.css';
import {Navbar} from "./components/Navbar";
import {Route, Routes} from "react-router-dom";
import {About} from "./pages/About";
import {Home} from "./pages/Home";
import {Photography} from "./pages/Photography";
  
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/photography" element={<Photography/>}/>
      </Routes>
    </>
  );
}

export default App;
