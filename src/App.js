import NavigationBar from './NavigationBar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <div className="mainpage">
            <Routes>
                <Route path="/" element={<Home/>} />
            </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
