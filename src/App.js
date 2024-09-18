import Body from "./components/Body";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Browse from './components/Browse';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Body/>
      <Router>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/browse" element={<Browse/>}/>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
