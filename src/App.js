import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
     <div className="App">
     <nav>
        <a class="mee" href="./"><br></br>NISHITHAA PALANI <br></br><br></br></a> 
        <a class="mee" href="./About">About</a>
        <a class="mee" href="./Contact">Contact</a>
     </nav> 
      <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/About'  component={About}/>
      <Route path='/Contact' component={Contact}/>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
