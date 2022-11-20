import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap';
import map from './images/map.png'
import PopUp from './PopUp'

function App() {
  return (
    <div className="App">
      <img src={map} id="map" height={600} width={1100} />
      <PopUp></PopUp>
    </div>
  );
}

export default App;
