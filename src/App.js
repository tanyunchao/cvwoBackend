import NavigationBar from './NavigationBar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Threads from './Threads';

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <div className="mainpage">
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path='/threads' element={<Threads />} />
            </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
