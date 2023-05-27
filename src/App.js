import React { useState, useEffect } from "react";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Dimmer, Loader } from 'semantic-ui-react';

import Home2 from './components/Home2';
import Navbar from './js/component/Navbar';
import People from './component/People';
import Planets from './component/Planets';
import Vehicles from './component/Vehicles';

function App() {
    const [people, setPeople] = useState([]);
    const [planets, setPlanets] = useState([]);
    const [vehicles, setVehicles] = useState([]);

    const [loading, setLoading] = useState([]);

    useEffect(() => {
        async function fetchPeople() {
            let res = await fetch("https://www.swapi.tech/api/people");
            let data = await res.json();
            setPeople(data.results);
            setLoading(false);
        }

        async function fetchPlanets() {
            let res = await fetch("https://www.swapi.tech/api/planets");
            let data = await res.json();
            setPlanets(data.results);
            setLoading(false);
        }

        async function fetchVehicles() {
            let res = await fetch("https://www.swapi.tech/api/vehicles");
            let data = await res.json();
            setVehicles(data.results);
            setLoading(false);
        }
        fetchPeople();
        fetchPlanets();
        fetchVehicles()


    }, [])
    console.log('people', people);
    console.log('planets', planets);
    console.log('vehicles', vehicle);


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
                        <Route excat path='/vehicles'>
                            <Vehicles data={vehicles} />
                        </Route>
                    </Switch>
                </Container>
            </Router>
        </>
    )
}

export default App; 