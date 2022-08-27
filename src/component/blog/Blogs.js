import React from 'react';
import { useQuery } from '@apollo/client';

import { Grid } from '@mui/material';

import { GET_BLOGS_INFO } from '../../graphql/queries';

import CardEL from '../shared/CardEL';
import Spinner from '../shared/Spinner';
import Error from '../shared/Error';


// All Rights are reserved for Mohammad Labbafi
// component function
const Blogs = () => {

    const {loading , data , error} = useQuery(GET_BLOGS_INFO);

    return (
        <>
        {
            data &&
            <Grid container spacing={2}>
            {data && data.posts.map(post => 
            <Grid key={post.id} item xs={12} sm={6} md={4}><CardEL {...post} /></Grid>)}
        </Grid>
        }
        {
            loading && 
            <Spinner />
        }
        {
            error &&
            <Error />
        }
        </>
    );
};

export default Blogs;