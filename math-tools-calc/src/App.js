import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import EuclideanAlgorithmForm from './view/actions/euclidean-algorithm/index';
import GcdLcmForm from './view/actions/gcd-lcm-prime-factors/index';
import EulerForm from './view/actions/euler/index';
import ModularEquationsForm from './view/actions/modular-equations/index';
import RecursionForm from './view/actions/recursion/index';
import ExponentialModForm from './view/actions/exponential-mod/index';

import './App.css';

function App() {
    return (
        <div className="App">
            <div className="App-header">
                <img src="./deadpool.png" className="App-logo" alt="logo"/>
                <label className='header-title'>Math Tools Calculator</label>
            </div>
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
                    <Tab>
                        <p>Recursion</p>
                    </Tab>
                    <Tab>
                        <p>b<sup>e</sup>(𝑚𝑜𝑑 m)</p>
                    </Tab>
                </TabList>

                <TabPanel>
                    <div className="panel-content">
                        <EuclideanAlgorithmForm/>
                        <label className="copyright"><br/>© All Rights ... wtf lol © RickShvetz © 2020-2021 ©</label>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="panel-content">
                        <GcdLcmForm/>
                        <label className="copyright"><br/>© All Rights ... wtf lol © RickShvetz © 2020-2021 ©</label>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="panel-content">
                        <EulerForm/>
                        <label className="copyright"><br/>© All Rights ... wtf lol © RickShvetz © 2020-2021 ©</label>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="panel-content">
                        <ModularEquationsForm/>
                        <label className="copyright"><br/>© All Rights ... wtf lol © RickShvetz © 2020-2021 ©</label>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="panel-content">
                        <RecursionForm/>
                        <label className="copyright"><br/>© All Rights ... wtf lol © RickShvetz © 2020-2021 ©</label>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="panel-content">
                        <ExponentialModForm/>
                        <label className="copyright"><br/>© All Rights ... wtf lol © RickShvetz © 2020-2021 ©</label>
                    </div>
                </TabPanel>
            </Tabs>

        </div>
    );
}

export default App;
