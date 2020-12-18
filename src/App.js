// import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import  'assets/scss/style.scss';
import LandingPage from 'elements/pages/LandingPage';
import Example from 'elements/pages/Example';

function App() {
  return (
    <div className="App">
        <Router>
            <Route exact path="/" component={LandingPage}></Route>
            <Route path="/example" component={Example}></Route>
        </Router>
    </div>
  );
}

export default App;
