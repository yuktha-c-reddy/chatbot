import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Screen from './components/Screen/Screen';
import Screen1 from './components/Screen1/Screen1';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Screen/>}/>
          <Route path='/login' element={<Screen1/>}/>
       
        </Routes>
      </Router>
    </div>
  );
}

export default App;
