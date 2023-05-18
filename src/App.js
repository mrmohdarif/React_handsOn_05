import logo from './logo.svg';
import './App.css';
import PureComponent from './PureComponent';
import HigherO from './Hoc/HigherO';


function App() {
  return (
    <div className="App">
     <PureComponent/>
     <HigherO/>
    </div>
  );
}

export default App;
