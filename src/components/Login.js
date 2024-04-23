import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidData } from '../utils/validate';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {addUser} from "../utils/userSlice";


const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  

  const toggleSignInForm = () =>{
      setIsSignInForm(!isSignInForm);
  }

  const handleButtonClick = () =>{


    const userEmail = email.current.value;
    const userPassword = password.current.value;
    //validate the form data
    const message = checkValidData(userEmail,userPassword);
    setErrorMessage(message);
    if(message) return;
    //sign In or Sign Up logic
    if(!isSignInForm){
      //Sign Up logic

            createUserWithEmailAndPassword(auth, userEmail, userPassword)
                .then((userCredential) => {
                  // Signed up 
                  const user = userCredential.user;
                  updateProfile(user, {
                    displayName: name.current.value, 
                    photoURL: "https://avatars.githubusercontent.com/u/63419441?v=4"
                  }).then(() => {
                    const {email,uid, displayName,photoURL} = auth.currentUser;
                    dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
                    navigate("/browse")
                  }).catch((error) => {
                    setErrorMessage(error.message);
                  });                  
                })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + " - " + errorMessage);
              });


    }else{
      //Sign In logic
      signInWithEmailAndPassword(auth, userEmail, userPassword)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigate("/browse");
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + " - " + errorMessage);
      });
    }


  }

  return (
    <div>
    <Header/>
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg'
        alt='netflix-background-img'/>
       </div>
       <form 
       onSubmit={(e)=>e.preventDefault()}
       className='absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>

        <h1 className='font-bold text-3xl py-8 '>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>

        {!isSignInForm && (<input
        ref={name} 
        type='text' 
        placeholder='Name' 
        className='p-4 my-4 w-full bg-gray-700'/>)}

        <input 
        ref={email}
        type='text' 
        placeholder='Email Address' 
        className='p-4 my-4 w-full bg-gray-700'/>


        <input 
        ref={password}
        type='password' 
        placeholder='Password' 
        className='p-4 my-4 w-full bg-gray-700'/>


        <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>


        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? 'New to Netflix?  Sign Up Now' : 'Already registered? Sign In Now'}</p>
       </form>
    </div>
  )
}

export default Login;
