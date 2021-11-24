import React, { useState } from 'react';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import {Form, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'


export default function Signin() {

	const [email,setEmail] = useState('');
	const [password,setPassword] = useState('');
	const auth = getAuth();

	async function handleSubmit(e){
		e.preventDefault();
		if(!email || !password) return;
		try{
			await signInWithEmailAndPassword(auth,email,password);
		}catch(err){console.log(err)}
	}
    
	return (
		<div className="wh-100 vh-100 d-flex justify-content-center align-items-center">
            <Form onSubmit={handleSubmit}>
			  <Form.Group className="mb-3" controlId="formBasicEmail">
			    <Form.Label>Email address</Form.Label>
			    <Form.Control type="email" placeholder="Enter email" value={email} onChange={({target})=>setEmail(target.value)}/>
			  </Form.Group>

			  <Form.Group className="mb-3" controlId="formBasicPassword">
			    <Form.Label>Password</Form.Label>
			    <Form.Control type="password" placeholder="Password" value={password} onChange={({target})=>setPassword(target.value)}/>
			  </Form.Group>
			  <Link className="m-2" to="/signup">Don't have account ? Register</Link>
			  <Button variant="primary" type="submit">
			    Login
			  </Button>
			</Form>
		</div>
	)
}

