import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { BrowserRouter as Router} from 'react-router-dom';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Main/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
