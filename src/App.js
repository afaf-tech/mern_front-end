// import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import  'assets/scss/style.scss';
import LandingPage from 'elements/pages/LandingPage';
import Example from 'elements/pages/Example';
import Example2 from 'elements/pages/Example2';

function App() {
  return (
    <div className="App">
        <Router>
            <Route exact path="/" component={LandingPage}></Route>
            <Route exact path="/example" component={Example}></Route>
            <Route path="/example2" component={Example2}></Route>
        </Router>
    </div>
  );
}

export default App;
