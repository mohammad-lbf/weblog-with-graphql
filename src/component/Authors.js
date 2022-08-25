import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_BLOGS_INFO } from '../graphql/queries';
import Profile from '../assets/images/1659274143545.jpg'
import { Link } from 'react-router-dom';
import Spinner from './shared/Spinner';
import Error from './shared/Error';
const Authors = () => {
    const {loading , data , error} = useQuery(GET_BLOGS_INFO);
    return (
        <>
        {data &&
        <div className="bg-light rounded d-flex flex-column align-items-start border py-3 px-3 shadow-sm">
            <div className="d-flex justify-content-start w-100 align-items-center">
                <img className="rounded-circle" style={{width:"40px" , height:"40px"}} src={Profile} />
                <p className="fs-15 mb-0 me-2">محمد لبافی</p>
            </div>
            <Link style={{fontSize:"13px"}} className="text-decoration-none mt-2 me-1" to="/authors/mohammad-labbafi">درباره نویسنده</Link>
        </div>
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

export default Authors;