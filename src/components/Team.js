import React from 'react';
import { Typography, Grid, Card, CardContent, CardMedia, Container } from '@mui/material';
import cat from '../cat.jpg';

const Team = () => (
    <div style={{ padding: '20px' }}>
        <Container>
            <Typography variant="h3">Our Team</Typography>
            <Typography variant="body1" style={{ fontSize: '1.2rem' }}>
            "Welcome to the heart of our initiative – the dedicated team that drives our vision forward with passion and expertise. Comprised of diverse talents and backgrounds, our team embodies a commitment to excellence in every aspect of our work. From seasoned developers crafting seamless user experiences to creative minds shaping our brand identity, each member brings unique skills and perspectives to the table. Together, we foster a culture of collaboration and innovation, united by a shared goal to deliver impactful solutions. Meet the faces behind our mission, where every individual contributes their utmost dedication and creativity to propel us towards success."
            </Typography>
        </Container>
        <br/>
        <Grid container spacing={2}>
            <Grid item xs={10} sm={4}>
                <Card>
                    <CardMedia
                        component="img"
                        height="300"
                        image={cat}
                        alt="Murshid"
                    />
                    <CardContent align="center">
                        <Typography variant="subtitle1" style={{ fontSize: '2.5rem' }}>Murshid</Typography>
                        <Typography variant="body2" style={{ fontSize: '2rem' }}>Manager</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Card>
                    <CardMedia
                        component="img"
                        height="300"
                        image={cat}
                        alt="Amjad"
                    />
                    <CardContent align="center">
                        <Typography variant="subtitle1" style={{ fontSize: '2.5rem' }}>Amjad</Typography>
                        <Typography variant="body2" style={{ fontSize: '2rem' }}>CEO</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Card>
                    <CardMedia
                        component="img"
                        height="300"
                        image={cat}
                        alt="Akram"
                    />
                    <CardContent align="center">
                        <Typography variant="subtitle1" style={{ fontSize: '2.5rem' }}>Akram</Typography>
                        <Typography variant="body2" style={{ fontSize: '2rem' }}>Director</Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </div>
);

export default Team;
