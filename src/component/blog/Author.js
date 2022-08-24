import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_AUTHOR_INFO } from '../../graphql/queries';
import Spinner from '../shared/Spinner';
import Error from '../shared/Error';

const Author = () => {
    const {loading , data , error} = useQuery(GET_AUTHOR_INFO);

    return (
        <div style={{minHeight:"70vh",marginTop:"85px"}}>
            {
                loading &&
                <Spinner />
            }
            {
                error &&
                <Error />
            }
            {
                data &&
                <div className="container">
                    <div className="w-100 d-flex flex-column align-items-center">
                    <img className="rounded-circle" style={{width:"250px" , height:"250px"}} src={data.authors[0].avatar.url} />
                    </div>
                </div>
            }
        </div>
    );
};

export default Author;