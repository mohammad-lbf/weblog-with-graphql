import React , {useState} from 'react';
import { TextField } from '@mui/material';
import styled from 'styled-components'
import { useMutation } from '@apollo/client';
import { CREATE_COMMENT } from '../../graphql/mutations';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// All Rights are reserved for Mohammad Labbafi
// component function
const CommentForm = ({slug}) => {
    const sucessNotify = (notifText)=>{
        toast.success(notifText, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }
    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [text , setText] = useState("");
    const [sendComment , {loading , data , error}] = useMutation(CREATE_COMMENT , {
        variables:{name:name , email:email , text:text , slug:slug}
    });

    const clickHanler = ()=>{
        if(name && email && text){
            sendComment();
            sucessNotify("دیدگاه شما با موفقیت ارسال و پس از تایید منتشر خواهد شد");
        }
        else{
            toast.warn("لطفا همه فیلد ها را پر کنید" , {
                position:"top-center"
            })
        }
    }

    const Button = styled.button`
    
    background-color:rgb(255, 59, 29);
    color:#fff;
    width:fit-content;
    outline:none;
    transition:all 0.2s;
    &:hover{
        background-color:rgb(211, 49, 24); 
    }

    
    `
    return (
        <div className="shadow-sm d-flex flex-column mb-3 mt-3 p-3 rounded w-100 border">
            <p className="fw-bold text-main-2">ارسال دیدگاه</p>
            <TextField onChange={(e)=>{setName(e.target.value)}}  value={name} className="my-2" id="outlined-basic" label="نام کاربری" variant="outlined" />
            <TextField onChange={(e)=>{setEmail(e.target.value)}} value={email}  className="my-2" id="outlined-basic" label="ایمیل" variant="outlined" />
            <TextField onChange={(e)=>{setText(e.target.value)}}  value={text} minRows={3} multiline className="my-2" id="outlined-basic" label="دیدگاه شما" variant="outlined" />
            {
                loading ?
                <button style={{width:"fit-content"}} class="btn btn-secondary fs-15" type="button" disabled>
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    در حال ارسال
                </button> :
                <Button 
                    onClick={()=> clickHanler() }
                    className="py-2 mt-2 px-3 rounded border-0">
                        ارسال دیدگاه
                </Button>
            }
            <ToastContainer
                className="fs-15 text-end"
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default CommentForm;