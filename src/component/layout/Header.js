import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


// All Rights are reserved for Mohammad Labbafi
// component function
const Header = () => {
    const Mheader = styled.div`
    position:fixed;
    top:0;
    width:100%;
    z-index:10;
    .link{
        &:hover{
            color:rgb(255, 59, 29);
        }
    }
    .about-project{
        background-color:rgb(255, 59, 29);
        color:#fff;
        border-radius:2px;
        text-decoration:none;
        font-weight: 200;
        transition:all 0.3s;
        &:hover{
            background-color:rgb(230, 59, 29);
        }
    }
        .logo{
            border:2px solid rgb(25, 25, 25);
            transition:all 0.3s;
            &:hover{
                border:2px solid rgb(255, 59, 29);
            }
        }
        .header-links{
            a{
                font-weight: 200;
                text-decoration:none;
                color:#fff;
                border-bottom:2px solid rgb(25, 25, 25);
                transition:all 0.3s;
                &:hover{
                    color:rgb(255, 59, 29);
                    border-bottom:2px solid rgb(255, 59, 29);
                }
            }
        }
    
    `
    return (
        <div>
            <Mheader className=" bg-main-1 py-2 px-2 px-lg-4 px-xl-5 d-flex flex-row-reverse align-items-center justify-content-between">
                <Link to="/" className="text-decoration-none logo py-1 px-2 rounded">
                    <div className="d-flex flex-row-reverse">
                        <span className="text-main-2 fw-bold fs-4 me-1">
                            LBF 
                        </span>
                        <span className="text-white fw-bold fs-4">
                            blog
                        </span>
                    </div>
                </Link>
                <div className="align-items-center d-none d-lg-flex">
                <Link to="/aboutproject" className=" about-project p-2 px-3 mx-2 ">
                        درباره پروژه
                </Link>
                <div className="header-links d-none d-lg-flex align-items-center">
                    <Link className="mx-2 pb-1 rounded" to="/">مقالات</Link>
                    <Link className="mx-2 pb-1 rounded" to="/authors">نویسندگان</Link>
                    <Link className="mx-2 pb-1 rounded" to="/aboutus">درباره ما</Link>
                </div>
                </div>
            </Mheader>
        </div>
    );
};

export default Header;