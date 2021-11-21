import Home from './pages/home/Home';
import Topbar from './components/topbar/Topbar';
import SinglePage from './pages/single/SinglePage';
import Write from './pages/write/Write';
import Setting from './pages/settings/Setting';
import Auth from './Auth';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    //components to display after user authentication
    // <div className="App">
    //   {/* <Auth/> */}
    //   {/* <Topbar />
    //   <Setting /> */}
    // </div>
    <Router>
      <Topbar/>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Home />} />
        <Route path="/setting" element={<Setting/>}/>
        <Route path="/post"  element={<SinglePage />}/>
      </Routes>
    </Router>
  );
}

export default App;
