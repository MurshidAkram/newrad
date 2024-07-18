import React from 'react';
import { Container, Grid, Typography, Card, CardContent, CardMedia } from '@mui/material';
import Team from './Team'; 

const About = () => {
    return (
        <Container>
            <Grid container spacing={4} alignItems="center">
                <Grid item xs={12}>
                    <Typography variant="h2" align="center" gutterBottom>About Us</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardMedia
                            height="240"
                            alt="About Us"
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h4" gutterBottom>Our History</Typography>
                            <Typography variant="body1">
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h4" gutterBottom>Our Mission</Typography>
                            <Typography variant="body1">
                                Sed ultricies urna eget orci efficitur, non lobortis odio blandit. Sed non efficitur arcu. Nulla vestibulum ultricies velit, sed molestie leo efficitur at.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h4" gutterBottom>Our Team</Typography>
                            <Typography variant="body1">
                                Meet our team members:
                            </Typography>
                            <Team />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h4" gutterBottom>Our Values</Typography>
                            <Typography variant="body1">
                                Proin vel odio bibendum, faucibus turpis eu, fermentum urna. Aenean et fermentum velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec rhoncus, turpis eu ullamcorper elementum, dui libero pharetra est, id laoreet tellus mi eget nisi.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default About;
