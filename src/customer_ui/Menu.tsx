import { Typography, Stack, Divider, Grid, IconButton } from '@mui/material';
import data from './menu.json';
import { useEffect, useState } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

interface Meal {
    id: string,
    nimi: string,
    info: string,
    hinta: number,
    kategoria: string
}

const kategoriat = [ "Pääruoat", "Pizzat", "Jälkiruoat", "Juomat" ];

const Menu = () => {
    const [menu, setMenu] = useState<Meal[]>([]);
    const [cart, setCart] = useState<Meal[]>([]);

    useEffect(() => {
        setMenu(data);
        setCart(JSON.parse(localStorage.getItem('cart') || "[]"));
    }, []);

    return (
        <>
        {kategoriat.map((katg, i) => {
            return(
                <Stack padding='10px 20px 0 20px' key={i}>
                    <Typography variant='h4'>{katg}</Typography>
                    <Divider sx={{ bgcolor:'black', borderBottomWidth: '2px', marginBottom:'20px'}}/>
                        <Grid container spacing={4} marginBottom="30px">
                            {menu.map(meal => {
                                return meal.kategoria === katg ? 
                                    <Grid item xs={12} sm={6} key={meal.id}>
                                        <Stack direction='row'>
                                            <Stack width='100%'>
                                                <Stack direction='row' justifyContent='space-between'>
                                                    <Typography variant='h6'>{meal.nimi}</Typography>
                                                    <Typography variant='h6'>{meal.hinta.toFixed(2)} €</Typography>
                                                </Stack>
                                                <Typography>{meal.info}</Typography>
                                            </Stack>
                                            <IconButton onClick={() => {
                                                    cart.push(meal);
                                                    localStorage.setItem("cart", JSON.stringify(cart));
                                                }}
                                                sx={{ width: '30px', height: '30px', margin: '0 7px 0 7px'}}>
                                                <AddShoppingCartIcon />
                                            </IconButton>
                                        </Stack>
                                    </Grid>
                                : <></>
                            })}
                        </Grid>
                </Stack>                         
            )})}
        </>      
    )
}

export default Menu;