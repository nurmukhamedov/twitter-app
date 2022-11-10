import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss'
import Home from './components/home/Home';
import LeftSide from './components/leftSide/LeftSide';
import RightSide from './components/rightSide/RightSide';


const App = () => {
  return (
     <Router>
        <div className="app">
          <LeftSide/>
          <Routes>
            <Route path='/' element= {<Home/>} /> 
          </Routes> 
          <RightSide/>
        </div>
     </Router>
  )
}

export default App;
