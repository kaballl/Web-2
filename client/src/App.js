
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Success from './pages/Success';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/register"element={<Register/>}/>
        <Route path="/login"element={<Login/>}/>
        <Route path="/success"element={<Success/>}/>
      </Routes>
    </div>

  );
}

export default App;
