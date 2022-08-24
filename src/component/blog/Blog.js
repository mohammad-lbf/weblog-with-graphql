import React , {useEffect} from 'react';

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
    return (
        <div style={{minHeight:"70vh",marginTop:"65px"}}>
            blogpage
        </div>
    );
};

export default Blog;