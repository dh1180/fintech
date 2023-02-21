import './App.css';
import Welcome from "./components/Welcome"
import InputComponents from './components/InputComponent';
import ListComponents from './components/ListComponents';
import StyleldComponent from './components/StyleldComponent';
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Welcome />}></Route>
      <Route path='/input' element={<InputComponents />}></Route>
      <Route path='/list' element={<ListComponents />}></Route>
    </Routes>
    </BrowserRouter>


  )
}

export default App;
