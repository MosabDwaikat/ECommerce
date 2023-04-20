import React from 'react';
import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Carousel = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#000',
                width: 892,
                height: 344,

                marginLeft: '100 px',

                overflow: 'hidden',
            }}
        >
            <Box sx={{ flex: 1 }}>
                <Typography variant="h6" sx={{ color: '#fff', mb: 2, display: 'flex', justifyContent: 'center' }}>
                    <img
                        src="images/apple.png"
                        alt="random"
                        style={{ maxWidth: '100%', maxHeight: '100%', marginRight: '25px' }}
                    />
                    <Typography variant="h6" sx={{ color: '#fff', display: 'flex', justifyContent: 'center' }}>
                        iPhone 14 Series
                    </Typography>

                </Typography>
                <Typography variant="h3" sx={{ color: '#fff', display: 'flex', justifyContent: 'center' }}>
                    Up to 10% <br />off Voucher
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button sx={{
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center',
                        height: '24px',
                        fontFamily: 'Poppins',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        fontSize: '16px',
                        lineHeight: '24px',
                        textAlign: 'center',
                        color: '#FAFAFA',
                        flex: 'none',
                        order: 0,
                        flexGrow: 0
                    }}>Shop Now <ArrowForwardIcon /></Button>
                </Box>


            </Box>
            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                <img
                    src="images/carouselimg.png"
                    alt="random"
                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                />
            </Box>
        </Box>
    );
};

export default Carousel;
