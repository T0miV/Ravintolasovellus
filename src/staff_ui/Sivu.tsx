import { Box, Container, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { Outlet, useNavigate } from 'react-router-dom';

const Sivu = () => {
    const navigoi = useNavigate();

    return (
        <Typography>
            Sivu1
        </Typography>
    )
}

export default Sivu;