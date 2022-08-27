import React , {useEffect} from 'react';
import { useQuery } from '@apollo/client';
import sanitizeHtml from 'sanitize-html';

import Error from '../shared/Error';
import Spinner from '../shared/Spinner';

import { GET_AUTHOR_INFO } from '../../graphql/queries';

// All Rights are reserved for Mohammad Labbafi
// component function
const Author = () => {
    const {loading , data , error} = useQuery(GET_AUTHOR_INFO);
    useEffect(()=>{
        const scrollTop = ()=>{
            window.scrollTo({
                top:0,
                left:0,
                behavior:'smooth'
            })}
            scrollTop()
    } , [])

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
                    <img className="rounded-circle border" style={{width:"250px" , height:"250px"}} src={data.authors[0].avatar.url} />
                    <p className="mt-2 fs-5 mb-2 fw-bold">{data.authors[0].name}</p>
                    <p className="fs-5 text-secondary">{data.authors[0].filed}</p>
                    <p className="fs-15" dangerouslySetInnerHTML={{__html: sanitizeHtml(data.authors[0].description.html)}}></p>
                    </div>
                </div>
            }
        </div>
    );
};

export default Author;