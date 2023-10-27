import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='app-container'>
        <Header />
      </div>
    </Router>
  );
}

export default App;
