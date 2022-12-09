import './App.css';
import { Route, Routes, BrowserRouter as Router} from "react-router-dom";
import Home from './pages/Home';
import Maps from './pages/Maps';
import Search from './pages/Search';

function App() {
  return (
    <Router>
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route  path="/maps" element={<Maps/>} />
        <Route  path="/buscar" element={<Search/>} />


        </Routes>
      </Router>
  );
}

export default App;
