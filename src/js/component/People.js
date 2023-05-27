import React from 'react';
import { Card, Grid } from 'semantic-ui-react';


export default function People({ data }) {
    return (
        <>
            <h1> People</h1>
            <Grid columns={3}>
                {data.map((people, i) => {
                    return (
                        <Grid.Column key={i}>
                            <Card>
                                <Card.content>
                                    <Card.Header> {people.name}  </Card.Header>
                                    <Card.Description>
                                        <strong>Height</strong>
                                        <p>{people.height}</p>
                                        <strong>Mass</strong>
                                        <p>{people.mass}</p>
                                        <strong>Gender</strong>
                                        <p>{people.gender}</p>
                                        
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