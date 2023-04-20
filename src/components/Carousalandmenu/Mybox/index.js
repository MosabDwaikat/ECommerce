import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import 'pure-react-carousel/dist/react-carousel.es.css';




const MyBox = () => {
    const theme = useTheme();
    const isSmallerScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#000',
                borderRadius: 8,
                overflow: 'hidden',
                width: 892,
                height: 344,
            }}
        >
            <Box sx={{ flex: 1 }}>
                <Typography variant="h6" sx={{ color: '#fff', mb: 2 }}>
                    Left Text Here
                </Typography>
                <Typography variant="body1" sx={{ color: '#fff' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat nisl quis dolor dignissim, vel aliquet elit sagittis. Maecenas ultricies tristique aliquam.
                </Typography>
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
export default MyBox;