import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='app-container'>
        <Header />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
