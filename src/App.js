import NavigationBar from './NavigationBar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Threads from './Threads';
import Welcome from './Welcome';
import Post from './Post';

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <div className="mainpage">
            <Routes>
                <Route path='/' element={<Welcome />} />
                <Route path='/threads' element={<Threads />} />
                <Route path="/home" element={<Home />} />
                <Route path="posts">
                  <Route path=":postId" element={<Post />} />
                </Route>
                <Route path="*" element={<Navigate to="/home" replace/>} />
            </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
