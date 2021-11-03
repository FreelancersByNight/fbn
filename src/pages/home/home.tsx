import { Typography, Box, AppBar, Container, Grid, Avatar } from '@mui/material';
import React, { FC, useEffect } from 'react'
import { Header, Cover, Footer } from '../../components';
import { motion } from 'framer-motion'
import style from "./style.module.css";
import { List, Button } from "antd";
import services from "../../services.json";
import teams from "../../team.json";
import * as ReactIcon from 'react-icons/all';
import { Element, Events } from 'react-scroll';
const Home:FC = () =>  {
    const icons = [
        // <ReactIcon.MdOutlineDesignServices fontSize={30} />,
        // <ReactIcon.SiWebmoney fontSize={30} />,
        // <ReactIcon.MdImportantDevices fontSize={30} />,
        // <ReactIcon.FaMobileAlt fontSize={30} />
        <img src={process.env.PUBLIC_URL + '/images/design.svg'} className='w-2/5 h-3/5 block m-0 m-auto' />,
        <img src={process.env.PUBLIC_URL + '/images/responsive.svg'} className='w-2/5 h-3/5 block m-0 m-auto' />,
        <img src={process.env.PUBLIC_URL + '/images/website.svg'} className='w-2/5 h-3/5 block m-0 m-auto' />,
        <img src={process.env.PUBLIC_URL + '/images/mobile.svg'} className='w-2/5 h-3/5 block m-0 m-auto' />
    ];

    const images = [
        process.env.PUBLIC_URL + '/images/joemar.jfif',
        process.env.PUBLIC_URL + '/images/angelo.jfif'
    ]

    const links = [
        {
            title: 'Home',
            scrollTo: 'home'
        },
        {
            title: 'Services',
            scrollTo: 'services'
        },
        {
            title: 'Our Team',
            scrollTo: 'team'
        },
        {
            title: 'Projects',
            scrollTo: 'projects'
        },
        {
            title: 'Skills',
            scrollTo: 'skills'
        },
        {
            title: 'Contact',
            scrollTo: ''
        }
    ]

    return (
        <Box flex={1}>
            <Element name='home'>
                <Header title="Freelancers By Night" links={links} />
                <Cover />
            </Element>

            <Element name='services'>
                <Container maxWidth='xl'>
                    <Box sx={{ height: { md: '100vh', lg: '100vh', xxl: '100vh'} }} mt={5} display='flex' justifyContent='center' alignItems='center'>
                        <Box mt={4}>
                            <Typography component='h1' fontWeight='600' variant='h4' className='text-gray-800 text-center'>What We Can Do?</Typography> 
                            <Box mt={4}>
                                <List 
                                    grid={{
                                        gutter: 15,
                                        xs: 1,
                                        sm: 1,
                                        md: 2,
                                        lg: 2,
                                        xl: 2,
                                        xxl: 2,
                                    }}
                                    dataSource={services}
                                    renderItem={(item, index) => (
                                    <List.Item>
                                            <Box padding={10} className={style.services}>
                                                <Grid item container spacing={2} alignItems='center'>
                                                    <Grid item md={6} lg={6} xl={6} sm={12} xs={12}>
                                                        <Box display='flex' flex={1} flexDirection='column' justifyContent='center' alignItems='center'>
                                                            <Typography textAlign='center' >{ icons[index] }</Typography>
                                                            <Box mt={2}>
                                                                <Typography variant='h6' fontWeight='600'>{ item.title }</Typography>
                                                            </Box>
                                                        </Box>
                                                    </Grid>
                                                    <Grid item md={6} lg={6} xl={6} sm={12} xs={12}>
                                                        <Typography className='text-justify' >{ item.description }</Typography>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                    </List.Item>
                                    )}
                                />
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Element>

            <Element name='team'>
                <Box sx={{ height: { md: '100vh', lg: '100vh', xxl: '100vh'} }} bgcolor='#F9F9FF' height='100vh' mt={5} p={5} display='flex' justifyContent='center' alignItems='center'>
                    <Container maxWidth='xl'>
                            <Box mt={4}>
                                <Typography component='h1' fontWeight='600' variant='h4' className='text-gray-800 text-center after:bg-blue-500 after:bottom-[-15px]'>Our Team</Typography> 
                                <Box display='flex' justifyContent='center'>
                                    <Box></Box>
                                </Box>
                                <Box mt={4}>
                                    <List 
                                        grid={{
                                            gutter: 15,
                                            xs: 1,
                                            sm: 1,
                                            md: 2,
                                            lg: 2,
                                            xl: 2,
                                            xxl: 2,
                                        }}
                                        dataSource={teams}
                                        renderItem={(item, index) => (
                                        <List.Item>
                                                <Box padding={5}>
                                                    <Grid item container spacing={2} alignItems='center'>
                                                        <Grid item md={6} lg={6} xl={6} sm={12} xs={12} justifyContent='space-between' alignItems='center'>
                                                            <Avatar src={images[index]} variant='circular' sx={{ width: '40%', height: '40%', display: 'block', margin:'0 auto' }} />
                                                            <Box mt={2} justifyContent='center' display='flex'>
                                                                <Button type='primary' className='mr-2'>Github</Button>
                                                                <Button >Download CV</Button>
                                                            </Box>
                                                        </Grid>
                                                        <Grid item md={6} lg={6} xl={6} sm={12} xs={12} justifyContent='space-between' alignItems='center'>
                                                            <Box mt={2}>
                                                                <Typography variant='h6' fontWeight='600'>{ item.name }</Typography>
                                                                <Typography component='h6' className='text-gray-400' variant='subtitle2'>{item.position}</Typography>
                                                            </Box>
                                                            <Box mt={3}>
                                                                <Typography className='text-justify' component='h6' variant='subtitle2'>{ item.description }</Typography>
                                                            </Box>
                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                        </List.Item>
                                        )}
                                    />
                                </Box>
                            </Box>
                        </Container>
                    </Box>
            </Element>

            <Element name='projects'>
                <Container maxWidth='xl'>
                    <Box sx={{ height: { md: '100vh', lg: '100vh', xxl: '100vh'} }} mt={5} display='flex' justifyContent='center' alignItems='center'>
                        <Box mt={4}>
                            <Typography component='h1' fontWeight='600' variant='h4' className='text-gray-800 text-center'>Projects</Typography> 
                            <Box mt={4}>
                                <List 
                                    grid={{
                                        gutter: 15,
                                        xs: 1,
                                        sm: 1,
                                        md: 2,
                                        lg: 2,
                                        xl: 2,
                                        xxl: 2,
                                    }}
                                    dataSource={services}
                                    renderItem={(item, index) => (
                                    <List.Item>
                                            <Box padding={10} className={style.services}>
                                                <Grid item container spacing={2} alignItems='center'>
                                                    <Grid item md={6} lg={6} xl={6} sm={12} xs={12}>
                                                        <Box display='flex' flex={1} flexDirection='column' justifyContent='center' alignItems='center'>
                                                            <Typography textAlign='center' >{ icons[index] }</Typography>
                                                            <Box mt={2}>
                                                                <Typography variant='h6' fontWeight='600'>{ item.title }</Typography>
                                                            </Box>
                                                        </Box>
                                                    </Grid>
                                                    <Grid item md={6} lg={6} xl={6} sm={12} xs={12}>
                                                        <Typography className='text-justify' >{ item.description }</Typography>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                    </List.Item>
                                    )}
                                />
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Element>

            <Element name='skills'>
                <Box sx={{ height: { md: '100vh', lg: '100vh', xxl: '100vh'} }} bgcolor='#F9F9FF' height='100vh' mt={5} p={5} display='flex' justifyContent='center' alignItems='center'>
                    <Container maxWidth='xl'>
                            <Box mt={4}>
                                <Typography component='h1' fontWeight='600' variant='h4' className='text-gray-800 text-center after:bg-blue-500 after:bottom-[-15px]'>Our Team</Typography> 
                                <Box display='flex' justifyContent='center'>
                                    <Box></Box>
                                </Box>
                                <Box mt={4}>
                                    <List 
                                        grid={{
                                            gutter: 15,
                                            xs: 1,
                                            sm: 1,
                                            md: 2,
                                            lg: 2,
                                            xl: 2,
                                            xxl: 2,
                                        }}
                                        dataSource={teams}
                                        renderItem={(item, index) => (
                                        <List.Item>
                                                <Box padding={5}>
                                                    <Grid item container spacing={2} alignItems='center'>
                                                        <Grid item md={6} lg={6} xl={6} sm={12} xs={12} justifyContent='space-between' alignItems='center'>
                                                            <Avatar src={images[index]} variant='circular' sx={{ width: '40%', height: '40%', display: 'block', margin:'0 auto' }} />
                                                            <Box mt={2} justifyContent='center' display='flex'>
                                                                <Button type='primary' className='mr-2'>Github</Button>
                                                                <Button >Download CV</Button>
                                                            </Box>
                                                        </Grid>
                                                        <Grid item md={6} lg={6} xl={6} sm={12} xs={12} justifyContent='space-between' alignItems='center'>
                                                            <Box mt={2}>
                                                                <Typography variant='h6' fontWeight='600'>{ item.name }</Typography>
                                                                <Typography component='h6' className='text-gray-400' variant='subtitle2'>{item.position}</Typography>
                                                            </Box>
                                                            <Box mt={3}>
                                                                <Typography className='text-justify' component='h6' variant='subtitle2'>{ item.description }</Typography>
                                                            </Box>
                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                        </List.Item>
                                        )}
                                    />
                                </Box>
                            </Box>
                        </Container>
                    </Box>
            </Element>
            <Footer />
        </Box>
    )
}

export default Home;