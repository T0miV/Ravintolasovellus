import { AppBar, Box, Button, Container, Grid, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { Outlet, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const pages = ["Sivu1", "Sivu2", "Sivu3"]

const Layout = () => {
    const navigoi = useNavigate();
    
    const [anchorNav, setAnchorNav] = useState<null | HTMLElement>(null);

    const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorNav(event.currentTarget);
    }

    const handleCloseMenu = () => {
        setAnchorNav(null);
    }

    return (
        <Container maxWidth='lg' disableGutters>
            <AppBar position='static' sx={{
                bgcolor: '#c1a2a2',
                boxShadow: 'none'
            }}>
                <Toolbar disableGutters>
                    <Box 
                        component="img"
                        sx={{ height:'50px', marginLeft: '5px', cursor: 'pointer' }}
                        src="img/logo.png"
                        onClick={() => navigoi('/')}
                    />
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none'}}}>
                        <IconButton
                            size='large'
                            onClick={handleOpenMenu}
                            >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            anchorEl={anchorNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorNav)}
                            onClose={handleCloseMenu}
                            onClick={handleCloseMenu}
                            sx={{
                                display: {xs: 'block', sm: 'none'},
                            }}
                            >
                            {pages.map((page => (
                                <MenuItem key={page} onClick={() => navigoi(`/${page}`)}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            )))}
                            
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex'}}}>
                        {pages.map((page => (
                            <Button onClick={() => navigoi(`/${page}`)}>
                                {page}
                            </Button>
                        )))}
                    </Box>
                    
                    <Box sx={{ flexGrow: 0 }}>
                        <IconButton>
                            <ShoppingCartIcon />
                        </IconButton>
                        <IconButton>
                            <AccountBoxIcon />
                        </IconButton>
                    </Box>

                </Toolbar>
            </AppBar>
            <Container sx={{
                minHeight: '500px'
            }}>
                <Typography></Typography>
            </Container>

            <Outlet />
        </Container>
    )
}

export default Layout;