import { FC } from "react";
import Particles from "react-tsparticles";
import { Typography, Box, Avatar, Grid, Container } from '@mui/material';
import { Button } from 'antd'
import Typist from 'react-typist';
const Cover:FC = () => {
    return (
        <Box flex={1} width='100%'>
            <Box style={{ position: 'relative', width: '100%'}}>
                <Particles
                    height='750px'
                    options={{
                    background: {
                        color: {
                            value: "#F9F9FF",
                        },
                    },
                    fpsLimit: 60,
                    interactivity: {
                        detectsOn: "canvas",
                        events: {
                            onHover: {
                                enable: true,
                                mode: 'connect'
                            },
                            resize: true,
                        },
                    },
                    particles: {
                        color: {
                            value: "#D6D6DB",
                        },
                        links: {
                            color: "#D6D6DB",
                            distance: 150,
                            enable: true,
                            opacity: 0.1,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: false,
                            speed: 1,
                            straight: true,
                        },
                        number: {
                            density: {
                                enable: true,
                                value_area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            random: true,
                            value: 5,
                        },
                    },
                        detectRetina: true,
                    }}
                />
                <Box position='absolute' width='100%' top='25%' flex={1} alignItems='center' justifyContent='center' padding={5}>
                    <Container maxWidth='xl'>
                        <Grid item container spacing={1} alignItems='center' >
                            <Grid item md={6} lg={6} xl={6} sm={12} xs={12} >
                                <Box sx={{ textAlign: { sm: 'center', xs: 'center', md: 'left', lg: 'left' } }}>
                                    <Typography className='text-gray-500'>Hi, We are</Typography>
                                    <Typography component='h2' style={{ fontWeight: 'bolder' }} variant='h2' className='text-gray-700 dark:text-white'>
                                        <Typist cursor={{ hideWhenDone: true }}>Freelancers By Night</Typist>
                                    </Typography>
                                    <Typography variant='subtitle1' className='text-gray-500'>A group of software developers.</Typography>
                                    <Box mt={2}>
                                        <Button type='primary'>GITHUB</Button>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item md={6} lg={6} xl={6} sm={12} xs={12}>
                                <img src={process.env.PUBLIC_URL + '/images/programmer.svg'} className='w-3/5 h-3/5 hidden m-0 m-auto md:block' />
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </Box>
    )
}

export default Cover;