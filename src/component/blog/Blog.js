import React , {useEffect} from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_BLOG_INFO } from '../../graphql/queries';
import Spinner from '../shared/Spinner';
import Error from '../shared/Error';
const Blog = () => {
    useEffect(()=>{
        const scrollTop = ()=>{
            window.scrollTo({
                top:0,
                left:0,
                behavior:'smooth'
            })}
            scrollTop()
    } , [])
    const {slug} = useParams();
    const {loading , data , error} = useQuery(GET_BLOG_INFO , {
        variables:{slug:slug}
    });

    return (
        <div style={{minHeight:"70vh",marginTop:"100px"}}>
            {loading &&
                <Spinner />
            }
            {
                error &&
                <Error />
            }
            {
                data &&
                <div className="container">
                   <div className="d-flex flex-column align-items-start">
                    <h5 className="mb-3">{data.post.title}</h5>  
                    <div className="d-flex align-items-center fs-15">
                    <p className="ms-1">نوشته شده در :</p> 
                    <p>{data.post.datePublished}</p>
                    </div>
                   <img style={{width:"300px" , height:"250px"}} className="rounded" src={data.post.coverphoto.url} />
                   <div className="d-flex">
                        <img style={{width:"50px" , height:"50px"}} src={data.post.author.avatar.url} />
                   </div>

                   </div>
                </div>
            }
        </div>
    );
};

export default Blog;