
import React { useState, useEffect } from "react";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Dimmer, Loader } from 'semantic-ui-react';

import Home2 from './components/Home2';
import Navbar from './js/component/Navbar';
import People from './component/People';
import Planets from './component/Planets';




function App() {
    const [people, setPeople] = useState([]);
    const [planets, setPlanets] = useState([]);
    const [loading, setLoading] = useState([]);

    useEffect(() => {
        async function fetchPeople() {
            let res = await fetch('    ');
            let data = await res.json();
            setPeople(data.results);
            setLoading(false);
        }

        async function fetchPlanets() {
            let res = await fetch('    ');
            let data = await res.json();
            setPlanets(data.results);
            setLoading(false);
        }
        fetchPeople();
        fetchPlanets();
        

    }, [])
    console.log('people', people);
    console.log('planets', planets);

    return (
        <>
            <Router>
                <Navbar />
                <Container>
                    {loading ? (
                        <Dimmer active inverted>
                            <Loader inverted> Loading </Loader>
                        </Dimmer>
                    ) : ()}
                    <Switch>
                        <Route excat path='/'> <Home2 /></Route>
                        <Route excat path='/people'>
                            <People data={people} />
                        </Route>
                        <Route excat path='/planets'> 
                        <Planets data={planets} />
                        </Route>
                    </Switch>
                </Container>

            </Router>



        </>
    )
}

export default App; 