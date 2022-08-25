import { Link } from 'react-router-dom';
import React from 'react';

const CardEL = ({title , slug , coverphoto , author}) => {
    return (
        <div style={{height:"370px"}} className="d-flex shadow-sm flex-column align-items-center py-2 bg-light rounded border">
            <div className="d-flex justify-content-start w-100 align-items-center border-bottom pe-2 pb-2">
                <img className="rounded-circle" style={{width:"40px" , height:"40px"}} src={author.avatar.url} />
                <p className="fs-15 mb-0 me-2">محمد لبافی</p>
            </div>
            <img  style={{width:"100%" , height:"200px"}} src={coverphoto.url} />
            <p style={{height:"80px" , fontSize:"13px"}} className="mb-0 text-center fw-bold  pt-3 w-100 mb-1 px-2">{title}</p>
            <Link className="mt-2 text-decoration-none w-100 mx-2 text-center" to={`/blogs/${slug}`}>
                <button className="btn btn-outline-primary" style={{fontSize:"13px" , width:"90%"}}>
                    مشاهده مقاله
                </button>
            </Link>
        </div>
    );
};

export default CardEL;