
import './App.css';
import {Routes,Route} from "react-router-dom"
import Home from './pages/Home';
import Login from './pages/Login';
import Register from "./pages/Register"
import LoadingScreen from './components/LoadingScreen./LoadingScreen';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='' element={<Home/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/load' element={<LoadingScreen/>}/>
      </Routes>
    </div>
  );
}

export default App;
