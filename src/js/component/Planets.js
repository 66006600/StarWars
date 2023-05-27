import React from 'react';
import { Card, Grid } from 'semantic-ui-react';

export default function Planets( {data} ) {
    return (
        <>
        <h1> Planets</h1>
        <Grid columns={3}>
            {data.map((planets, i) => {
                return (
                    <Grid.Column key={i}>
                        <Card>
                            <Card.content>
                                <Card.Header> {planets.name}  </Card.Header>
                                <Card.Description>
                                    <strong>Climate</strong>
                                    <p>{people.climate}</p>
                                    <strong>Diameter</strong>
                                    <p>{people.diameter}</p>
                                    <strong>Population</strong>
                                    <p>{people.population}</p>
                                </Card.Description>

                            </Card.content>
                        </Card>
                    </Grid.Column>
                );
            })}
        </Grid>
    </>
    )
}