import React, { useState } from 'react';
import {getAuth, createUserWithEmailAndPassword, updateProfile,sendEmailVerification} from 'firebase/auth';
import {Form, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'

export default function Signin() {

    const [name,setName] = useState('');
	const [email,setEmail] = useState('');
	const [password,setPassword] = useState('');
	const auth = getAuth();

	async function handleSubmit(e){
		e.preventDefault();
		if(!email || !password || !name ) return;
		try{
			await createUserWithEmailAndPassword(auth,email,password);
            await updateProfile(auth.currentUser,{displayName:name});
            await sendEmailVerification(auth.currentUser)
		}catch(err){console.log(err)}
	}
    
	return (
		<div className="wh-100 vh-100 d-flex justify-content-center align-items-center">
            <Form onSubmit={handleSubmit}>
			  <Form.Group className="mb-3" controlId="formBasicEmail">
			    <Form.Label>Name</Form.Label>
			    <Form.Control type="text" placeholder="Enter name" value={name} onChange={({target})=>setName(target.value)}/>
			    <Form.Label>Email address</Form.Label>
			    <Form.Control type="email" placeholder="Email" value={email} onChange={({target})=>setEmail(target.value)}/>
			  </Form.Group>

			  <Form.Group className="mb-3" controlId="formBasicPassword">
			    <Form.Label>Password</Form.Label>
			    <Form.Control type="password" placeholder="Password" value={password} onChange={({target})=>setPassword(target.value)}/>
			  </Form.Group>
			  <Link className="m-2" to="/signin">Already have an account ? Login</Link>
			  <Button variant="primary" type="submit">
			    Signup
			  </Button>
			</Form>
		</div>
	)
}

