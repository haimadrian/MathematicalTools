import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import history from './common/history';
import EuclideanAlgorithmForm from './view/actions/euclidean-algorithm/index';
import GcdLcmForm from './view/actions/gcd-lcm-prime-factors/index';
import EulerForm from './view/actions/euler/index';
import ModularEquationsForm from './view/actions/modular-equations/index';

import './App.css';

function App() {
    return (
        <div className="App">
            <label>
                <header className="App-header">
                    <img src="./deadpool.png" className="App-logo" alt="logo"/>
                    Mathematical Tools Calculator
                </header>
            </label>

            <BrowserRouter history={history}>
                <Switch>
                    <Route exact path='/MathematicalTools/euclideanalgorithm' component={EuclideanAlgorithmForm}/>
                    <Route exact path='/MathematicalTools/gcdlcm' component={GcdLcmForm}/>
                    <Route exact path='/MathematicalTools/euler' component={EulerForm}/>
                    <Route exact path='/MathematicalTools/modularequations' component={ModularEquationsForm}/>
                </Switch>
                <Tabs>
                    <TabList>
                        <Tab>
                            <p>Euclid's Algorithm (Bezout)</p>
                        </Tab>
                        <Tab>
                            <p>GCD, LCM and Prime Factors</p>
                        </Tab>
                        <Tab>
                            <p>Euler Formula and Gauss Sum</p>
                        </Tab>
                        <Tab>
                            <p>Modular Equations</p>
                        </Tab>
                        <label className="copyright">© All Rights ... wtf lol © RickShvetz © 2020-2021 ©</label>
                    </TabList>

                    <TabPanel>
                        <div className="panel-content">
                            <EuclideanAlgorithmForm/>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="panel-content">
                            <GcdLcmForm/>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="panel-content">
                            <EulerForm/>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="panel-content">
                            <ModularEquationsForm/>
                        </div>
                    </TabPanel>
                </Tabs>
            </BrowserRouter>

        </div>
    );
}

export default App;
