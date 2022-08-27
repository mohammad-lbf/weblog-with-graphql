import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import Welcome from './shared/Welcome';
import Blogs from './blog/Blogs';
import Authors from './Authors';

// All Rights are reserved for Mohammad Labbafi
// component function
const Articles = () => {
    return (
        <div style={{marginTop:"60px"}}>
            <Welcome />
            <Container maxWidth="lg">
                <Grid container spacing={2} padding={3} >
                    <Grid item xs={12} md={3} mt={3}>
                        <Typography component="h3" variant="h5" mb={3} fontWeight={500} style={{fontFamily:"Vazirmatn"}}>
                                نویسندگان
                        </Typography>
                        <Authors />
                    </Grid>
                    <Grid item xs={12} md={9} mt={3}>
                    <Typography component="h3" variant="h5" mb={3} fontWeight={500} style={{fontFamily:"Vazirmatn"}}>
                            مقالات
                    </Typography>
                    <Blogs />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Articles;