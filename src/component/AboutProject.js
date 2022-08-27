import React , {useEffect} from 'react';
import { Link } from 'react-router-dom';
const AboutProject = () => {
    useEffect(()=>{
        scrollTop()
    } , [])
        const scrollTop = ()=>{
            window.scrollTo({
                top:-100,
                left:-100,
                behavior:'smooth'
            })
        }
    return (
        <div style={{paddingTop:"85px" , paddingBottom:"0.65rem" }}>
            <div className="container p-3 rounded" style={{ minHeight:"75vh"}}>
                <div className="text-main-2 d-flex align-items-center flex-row-row-reverse fs-4 w-100 border-bottom-m-2 justify-content-start pb-2">
                <i className="bi bi-info-circle mt-1 ms-1"></i>
                <p className="mb-0">درباره پروژه : </p>
                </div>
                <div className="text-end mt-3 border-bottom">
                    <p className="fs-13 fs-sm-15">نام پروژه : <span className="fw-bold"><span className="text-main-2">LBF</span>Blog</span></p>
                    <div className="border-bottom pb-2 fs-13 fs-sm-15">
                    <p className="mb-2">طراح و توسعه دهنده: محمد لبافی</p>
                    <Link to="/aboutus" className="btn btn-primary py-1 px-3 fs-13 mt-2">درباره توسعه دهنده</Link>
                    </div>
                    <p className="mb-2 pt-2">شرح پروژه : </p>
                    <p style={{direction:"rtl"}} className="fw-200 text-end lh-lg mb-2 fs-13 fs-sm-15">پروژه حاضر، یک سایت وبلاگ برنامه نویسی و علوم کامپیوتر است
        که می توانید با استفاده از مقالات این سایت، سطح اطلاعات علوم کامپیوتر خود را ارتقاء ببخشید. بک اند و دیتابیس این پروژه با استفاده از HyGraph و فرانت اند با استفاده از React js توسعه داده شده است </p>
                </div>
                <div className="text-end py-2">
                    <p> تکنولوژی های مورد استفاده در این پروژه :</p>
                    <p className="lh-2 text-start fs-13 fs-sm-15">
                    HTML & CSS
                    <br/>
                    Java Script
                    <br />
                    bootstrap 5
                    <br />
                    Git & Git hub
                    <br />
                    React js
                    <br/>
                    GraphQL
                    <br />
                    HyGraph
                    <br />
                    Redux
                    <br />
                    react router dom (SPA site)
                    <br />
                    React hooks
                    <br />
                    styled components
                    <br />
                    responsive design
                </p>
                </div>
            </div>
        </div>
    );
};

export default AboutProject;