import React from 'react';
import { Box, Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const elements = [
    { label: 'Woman’s Fashion' },
    { label: 'Men’s Fashion' },
    { label: 'Electronics' },
    { label: 'Home & Lifestyle' },
    { label: 'Medicine' },
    { label: 'Sports & Outdoor' },
    { label: 'Baby’s & Toys' },
    { label: 'Groceries & Pets' },
    { label: 'Health & Beauty' },
];

const MyBox = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left', p: 2 }}>
            {elements.map((element, index) => (
                <Box
                    key={index}
                    sx={{
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'left',
                        justifyContent: 'left',


                        height: '24px',
                        bgcolor: element.color,
                        mb: 2 // set my property to 2 for 16px vertical margin
                    }}>
                    <Typography
                        variant="h5"
                        color="white"
                        sx={{
                            fontFamily: 'Poppins',
                            fontStyle: 'normal',
                            marginRight: '20px',
                            fontWeight: 400,
                            fontSize: '16px',
                            lineHeight: '24px',
                            textAlign: 'center',
                            color: '#000000',
                        }}
                    >

                        {element.label}
                        {index === 0 || index === 1 ? <ArrowForwardIosIcon sx={{

                            marginLeft: '50px',
                            alignItems: 'right'
                        }} /> : <></>}

                    </Typography>

                </Box>
            ))}
        </Box>
    );
};

export default MyBox;
