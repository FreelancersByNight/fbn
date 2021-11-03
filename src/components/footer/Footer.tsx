import React, { FC } from 'react'
import { Box, Typography, Grid, IconButton, Tooltip } from '@mui/material';
import { Input } from 'antd';
import  * as ReactIcon from 'react-icons/all';
const Footer:FC = () => {
    const { Search } = Input;
    return (
        <Box padding={5} bgcolor='#383838' justifyContent='center' alignItems='center'>
            <Grid item container justifyContent='center' alignItems='center'>
                <Grid item >
                    <Typography component='h2' variant='h4' fontWeight='600' className='text-white'>Freelancers By Night</Typography>
                    <Box mt={2}>
                        <Search
                            placeholder="Enter Email Address"
                            enterButton="Send"
                            size="large"
                        />
                    </Box>
                    <Box mt={2} flex={1} display='flex' justifyContent='center' alignItems='center'>
                      <Tooltip title='Facebook'>
                        <IconButton>
                            <ReactIcon.BsFacebook color='white' fontSize={30} />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title='Github'>
                        <IconButton>
                           <ReactIcon.BsGithub color='white' fontSize={30} />
                        </IconButton>
                      </Tooltip>
                    </Box>
                    <Box mt={2}>
                       <Typography component='h6' variant='caption' className='text-gray-300 text-center'>© Freelancers By Night 2021</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Footer;
