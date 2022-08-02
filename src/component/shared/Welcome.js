import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <div className="bg-main-1 py-2">
<div className=" py-5 text-white text-center container">
            <p className="fs-3 mb-4">به وبلاگ ما خوش آمدید</p>
            <p className="mb-4" style={{fontSize:"14px" , fontWeight:"200"}}>با جدیدترین مقالات ما درباره برنامه نویسی، علوم کامپیوتر و طراحی وب، به روز بمانید</p>
            <div className="d-flex justify-content-center">
            <Link to="/" style={{fontSize:"14px" , fontWeight:"200" , width:"100px"}} className="d-flex align-items-center text-main-2 text-decoration-none flex-row-reverse justify-content-center">بیشتر بدانید<i className="ms-1 bi bi-arrow-right mt-1"></i></Link>
            </div>
        </div>
        </div>
        
    );
};

export default Welcome;