import React from 'react';
import { Card, Grid } from 'semantic-ui-react';


export default function Vehicle({ data }) {
    return (
        <>
            <h1> Vehicle</h1>
            <Grid columns={3}>
                {data.map((vehicle, i) => {
                    return (
                        <Grid.Column key={i}>
                            <Card>
                                <Card.content>
                                    <Card.Header> {vehicle.name}  </Card.Header>
                                    <Card.Description>
                                        <strong>Model</strong>
                                        <p>{vehicle.model}</p>
                                        <strong>Name</strong>
                                        <p>{vehicle.name}</p>
                                        <strong>Passangers</strong>
                                        <p>{vehicle.passangers}</p>
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