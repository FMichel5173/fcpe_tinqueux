import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import ContactInfo from "./components/ContactInfo";
import Team from "./components/Team";
import About from "./components/About";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='app-container'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<ContactInfo />} />
          <Route path='/team' element={<Team />} />
          <Route path='/about' element={<About />} />
          <Route path='/news' element={<News />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
