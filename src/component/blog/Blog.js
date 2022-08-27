import React , {useEffect} from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import sanitizeHtml from 'sanitize-html';
import { GET_BLOG_INFO } from '../../graphql/queries';

import CommentForm from '../shared/CommentForm';

import Spinner from '../shared/Spinner';
import Error from '../shared/Error';

// All Rights are reserved for Mohammad Labbafi
// component function
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
                   <div className="d-flex flex-column align-items-center">
                    <h5 className="mb-3">{data.post.title}</h5>  
                    <div className="d-flex align-items-center fs-15">
                    <p className="ms-1">نوشته شده در :</p> 
                    <p>{data.post.datePublished}</p>
                    </div>
                   <img style={{width:"300px" , height:"250px"}} className="rounded border mb-3" src={data.post.coverphoto.url} />
                   <div className="d-flex align-items-center flex-column">
                        <img className="rounded-circle border mb-2" style={{width:"50px" , height:"50px"}} src={data.post.author.avatar.url} />
                        <div className="fs-15 text-center">
                            <p className="mb-1">{data.post.author.name}</p>
                            <p className="mb-0 text-muted">{data.post.author.filed}</p>
                        </div>
                   </div>
                   <p className="mt-3 fs-15 mb-2 lh-lg pt-3 border-top" dangerouslySetInnerHTML={{__html:sanitizeHtml(data.post.content.html)}}></p>
                   </div>
                   <CommentForm slug={slug} />
                   <div className="shadow-sm d-flex flex-column mb-3 mt-3 p-3 rounded w-100 border">
                       <p className="fw-bold text-main-2">دیدگاه های شما:</p>
                       <p className="fw-bold text-main-2">{data.post.comment.length} دیدگاه</p>
                       {
                           data.post.comment.length == 0 && 
                           <p className=" fs-15 fw-400">اولین نفری باشید که نظر می‌دهید</p>
                       }
                       {
                           data.post.comment.length > 0 &&
                            <div>
                                {
                                    data.post.comment.map(comment => 
                                        <div className="border p-3 rounded my-2 fs-13">
                                            <div className="d-flex text-main-2 fw-bold">
                                                <p>کاربر</p>
                                                <p className="me-1">{comment.name} :</p>
                                            </div>
                                            <div className="d-flex">
                                                <p>متن دیدگاه : </p>
                                                <p className="me-1">{comment.text}</p>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                           }
                   </div>
                </div>
            }
        </div>
    );
};

export default Blog;