 import React from 'react';
 import Form from '../components/Form';
 import Header from '../components/Header';

 function SignUp(props) {
    console.log(props);
     return (
         <>
         <Header message={"Sign-Up!"}/>

     <Form history={props.history}/>
     
     </>
     );
 }
 export default SignUp;