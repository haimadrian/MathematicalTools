import './App.css';
import {BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import history from './common/history';
import EuclideanAlgorithmForm from './view/actions/euclidean-algorithm/index';
import GcdLcmForm from './view/actions/gcd-lcm-prime-factors/index';
import EulerForm from './view/actions/euler/index';
import ModularEquationsForm from './view/actions/modular-equations/index';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src="./deadpool.png" className="App-logo" alt="logo"/>
            </header>
            <BrowserRouter history={history}>
                <Switch>
                    <Route exact path='/MathematicalTools/euclideanalgorithm' component={EuclideanAlgorithmForm}/>
                    <Route exact path='/MathematicalTools/gcdlcm' component={GcdLcmForm}/>
                    <Route exact path='/MathematicalTools/euler' component={EulerForm}/>
                    <Route exact path='/MathematicalTools/modularequations' component={ModularEquationsForm}/>
                </Switch>
                <body className="App-body">
                    <Link to="/MathematicalTools" className="App-link">Home</Link>
                    <Link to="/MathematicalTools/euclideanalgorithm" className="App-link">Extended Euclid's Algorithm (Bezout)</Link>
                    <Link to="/MathematicalTools/gcdlcm" className="App-link">GCD, LCM and Prime Factors</Link>
                    <Link to="/MathematicalTools/euler" className="App-link">Euler (Function and Formula) and Gauss Sum</Link>
                    <Link to="/MathematicalTools/modularequations" className="App-link">Modular Equations</Link>
                    <label className="copyright">© All Rights ... wtf lol © RickShvetz © 2020-2021 ©</label>
                </body>
            </BrowserRouter>
        </div>
    );
}

export default App;
