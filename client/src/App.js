import './App.css';
import "./styles/app.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"


import Nav from './components/utility/Nav';
import Home from './components/user/Home';


function App() {
  return (
    <div className='App'>
      <Router>
        <AuthProvider>
          <Nav />
          <Routes>


            <Route path="/" element={<Home/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </AuthProvider>
      </Router>
      <Footer></Footer>

    </div>
  );
}

export default App;
