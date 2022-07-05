import './App.css';
import {BrowserRouter} from "react-router-dom"
import Views from './views';
import Header from './common/header/header'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Header />
      <Views />
    </div>
    </BrowserRouter>
    
  );
}

export default App;
