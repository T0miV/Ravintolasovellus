import { AppBar, Box, Button, Container, CssBaseline, IconButton, Menu, MenuItem, ThemeProvider, Toolbar, Typography, createTheme } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const pages = ["Sivu1", "Menu", "Sivu3"]

declare module '@mui/material/styles' {
    interface TypographyVariants {
      yht1: React.CSSProperties;
      yht2: React.CSSProperties;
    }
  
    interface TypographyVariantsOptions {
      yht1?: React.CSSProperties;
      yht2?: React.CSSProperties;
    }
  }
  
  declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
      yht1: true;
      yht2: true;
    }
  }

const Layout = () => {

    const theme = createTheme({
        palette: {
            background: {
                default: "#f7f1f1",
            },
            secondary: {
                main: "#be7e7e"
            }
        },
        typography: {
            yht1: {
                fontWeight: "600",
                fontSize: '1.15rem',
                width: "50%",
                textAlign: 'right',
                lineHeight: 2.2
            },
            yht2: {
                fontWeight: "700",
                fontSize: '1.25rem',
                marginLeft: '20px',
                lineHeight: 2.2
            },
            h6: {
                fontWeight: "600",
                fontSize: "1.15rem"
            },
            h5: {
                fontWeight: "700",
                fontSize: "1.5rem",
                letterSpacing: 1.5,
                margin: "10px"
            },
            h4: {
                fontSize: "1.6rem",
                fontWeight: "700",
                letterSpacing: 2,
                margin: "10px"
            }
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        textTransform: 'lowercase',
                        color: '#000',
                        fontSize: '1.1rem'
                    },
                },
            },
        },
    });

    const navigoi = useNavigate();

    const [anchorNav, setAnchorNav] = useState<null | HTMLElement>(null);

    const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorNav(event.currentTarget);
    }

    const handleCloseMenu = () => {
        setAnchorNav(null);
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth='lg' disableGutters>
                <AppBar position='static' sx={{
                    bgcolor: '#c1a2a2',
                    boxShadow: 'none'
                }}>
                    <Toolbar disableGutters>
                        <Box
                            component="img"
                            sx={{ height: '50px', marginLeft: '5px' }}
                            src="img/logo.png"
                        />
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}>
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
                                    display: { xs: 'block', sm: 'none' },
                                }}
                            >
                                <MenuItem key="etusivu" onClick={() => navigoi(`/`)}>
                                    <Typography textAlign="center">Etusivu</Typography>
                                </MenuItem>
                                {pages.map(((page) => (
                                    <MenuItem key={page} onClick={() => navigoi(`/${page}`)}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                )))}

                            </Menu>
                        </Box>

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
                            <Button onClick={() => navigoi(`/`)}>
                                Etusivu
                            </Button>
                            {pages.map((page => (
                                <Button key={page} onClick={() => navigoi(`/${page}`)}>
                                    {page}
                                </Button>
                            )))}
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <IconButton onClick={() => navigoi('/shoppingcart')}>
                                <ShoppingCartIcon />
                            </IconButton>
                            <IconButton onClick={() => navigoi('/profile')}>
                                <AccountBoxIcon />
                            </IconButton>
                        </Box>

                    </Toolbar>
                </AppBar>

                <Outlet />
            </Container>
        </ThemeProvider>
    )
}

export default Layout;