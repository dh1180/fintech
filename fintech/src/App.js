import logo from './logo.svg';
import './App.css';
import Welcome from "./components/Welcome"
import InputComponents from './components/InputComponent';

function App() {
  return (
    <div className="App">
      <Welcome userName="유관우" userAge={35} userHeight={175}></Welcome>
      <InputComponents></InputComponents>
    
    </div>
  );
}

export default App;
