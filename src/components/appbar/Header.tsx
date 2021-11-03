import { Typography, AppBar, Toolbar, Box, Container, Button } from "@mui/material";
import { FC, useState } from "react";
import { style } from "./style";
import { Link } from 'react-scroll';
import clsx from 'clsx';
interface Props {
    title?: string,
    links?: Links[]
}

interface Links {
    title?: string, 
    scrollTo?: string
}

const Header:FC<Props> = ({links, title}) => {
    const [selectedLink, setLink] = useState<number | undefined>(0);

    function selected(index?:number) {
        setLink(index);
    }

    return (
        <AppBar style={style.header} >
            <Container maxWidth='xl'>
                <Toolbar>
                    <Box flexGrow={1}>
                        <Typography>{title}</Typography>
                    </Box>
                    <Box flex={1} display='flex' justifyContent='space-around' alignItems='center'>
                    {
                        links?.map((item, index) => (
                            <Link key={index} style={style.link} activeClass='active' onClick={() => selected(index)} to={item.scrollTo!} spy={true} smooth={true} duration={500}>{item.title}</Link>
                        ))
                    }
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header;