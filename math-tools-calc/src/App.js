import './App.css';
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import history from './common/history';
import EuclideanAlgorithmForm from './view/actions/euclidean-algorithm/index';
import GcdLcmForm from './view/actions/gcd-lcm-prime-factors/index';
import EulerForm from './view/actions/euler/index';
import ModularEquationsForm from './view/actions/modular-equations/index';

function App() {
    return (
        <div className="App">
            <Router history={history}>
                <Switch>
                    <Route exact path='/euclideanalgorithm' component={EuclideanAlgorithmForm}/>
                    <Route exact path='/gcdlcm' component={GcdLcmForm}/>
                    <Route exact path='/euler' component={EulerForm}/>
                    <Route exact path='/modularequations' component={ModularEquationsForm}/>
                </Switch>
            </Router>
            <header className="App-header">
                <img src="./deadpool.png" className="App-logo" alt="logo"/>
            </header>
            <body className="App-body">
                <a className="App-link" href="http://localhost:3000/" rel="noopener noreferrer">
                    Home
                </a>
                <a className="App-link" href="http://localhost:3000/euclideanalgorithm" rel="noopener noreferrer">
                    Extended Euclid's Algorithm (Bezout)
                </a>
                <a className="App-link" href="http://localhost:3000/gcdlcm" rel="noopener noreferrer">
                    GCD, LCM and Prime Factors
                </a>
                <a className="App-link" href="http://localhost:3000/euler" rel="noopener noreferrer">
                    Euler (Function and Formula) and Gauss Sum
                </a>
                <a className="App-link" href="http://localhost:3000/modularequations" rel="noopener noreferrer">
                    Modular Equations
                </a>
                <label className="copyright">© All Rights ... wtf lol © RickShvetz © 2020-2021 ©</label>
            </body>
        </div>
    );
}

export default App;
