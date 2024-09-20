
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Browse from './components/Browse';
import Login from './components/Login';
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Provider store={appStore}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/browse" element={<Browse />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
