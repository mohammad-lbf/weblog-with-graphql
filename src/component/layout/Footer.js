import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className="d-flex flex-column bg-main-1">
            <footer className="bg-main-1 py-3 d-flex flex-column-reverse align-items-center flex-lg-row justify-content-lg-between px-4">
                <div className="d-flex flex-column align-items-center mt-3 mt-lg-0">
                <div style={{width:"250px"}} className="d-flex flex-column border-bottom-m-2 align-items-center ">
                <Link style={{width:"fit-content"}} to="/" className="text-decoration-none py-1 px-2">
                    <div className="d-flex flex-row-reverse">
                        <span className="text-main-2 fw-bold fs-4 me-1">
                            LBF 
                        </span>
                        <span className="text-white fw-bold fs-4">
                            blog
                        </span>
                    </div>
                </Link>
                </div>
                <div className="d-flex align-items-center mt-2">
                <span className="text-white fw-bold fs-4">
                            محمد
                        </span>
                <span className="text-main-2 fw-bold fs-4 me-1">
                            لبافی 
                        </span>
                </div>
                <p style={{fontSize:"13px"}} className="text-light mt-2">برنامه نویس فرانت اند</p>
                </div>
                <div className="d-flex flex-column align-items-center align-items-lg-start my-3 my-lg-0">
                    <Link className="my-1 text-decoration-none text-main-2" to="/">مقالات</Link>
                    <Link className="my-1 text-decoration-none text-main-2" to="/">دسته بندی ها</Link>
                    <Link className="my-1 text-decoration-none text-main-2" to="/">نویسندگان</Link>
                    <Link className="my-1 text-decoration-none text-main-2" to="/">درباره ما</Link>
                </div>
                <div className="d-flex flex-column align-items-center mb-3 mb-lg-0">
                    <Link to="/" style={{width:"270px"}} className="bg-main-2 py-1 text-center text-light rounded text-decoration-none">درباره پروژه</Link>
                    <div className="d-flex mt-4 align-items-center justify-content-center">
                        <div className="bg-main-2
                         text-light
                         text-main-1
                         rounded-circle
                         d-flex
                         justify-content-center
                         align-items-center
                         mx-1" 
                         style={{width:"50px" , height:"50px"}}>
                        <i className="bi bi-instagram "></i>
                        </div>
                        <div className="bg-main-2
                         text-light
                         text-main-1
                         rounded-circle
                         d-flex
                         justify-content-center
                         align-items-center
                         mx-1" 
                         style={{width:"50px" , height:"50px"}}>
                        <i className="bi bi-telegram mt-1"></i>
                        </div>
                        <div className="bg-main-2
                         text-light
                         text-main-1
                         rounded-circle
                         d-flex
                         justify-content-center
                         align-items-center
                         mx-1" 
                         style={{width:"50px" , height:"50px"}}>
                        <i className="bi bi-twitter"></i>
                        </div>
                        <div className="bg-main-2
                         text-light
                         text-main-1
                         rounded-circle
                         d-flex
                         justify-content-center
                         align-items-center
                         mx-1" 
                         style={{width:"50px" , height:"50px"}}>
                        <i className="bi bi-youtube"></i>
                        </div>
                    </div>

                </div>
            </footer>
                <div
                 style={{fontSize:"12px"}}
                 className="border-tpo-m-2
                  mt-lg-4
                  py-3
                  text-center
                  text-light">
                    <p className=" mb-2">
                        تمامی حقوق برای LBFblog محفوظ است
                    </p>
                    <p className=" mb-0 text-main-2" >
                        محمد لبافی - 1401
                    </p>
                </div>
        </div>
    );
};

export default Footer;