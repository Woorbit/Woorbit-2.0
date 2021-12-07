import React, { useState } from 'react';
import {getAuth, createUserWithEmailAndPassword, updateProfile,sendEmailVerification} from 'firebase/auth';
import {Form, Button, Container, Row, Col, Card} from 'react-bootstrap';
import {Link} from 'react-router-dom'

export default function Signin() {

    const [name,setName] = useState('');
	const [email,setEmail] = useState('');
	const [password,setPassword] = useState('');
	const [loading,setLoading] = React.useState(false);
	const auth = getAuth();

	async function handleSubmit(e){		
		e.preventDefault();
		if(!email || !password || !name ) return;
		setLoading(true);
		try{
			await createUserWithEmailAndPassword(auth,email,password);
            await updateProfile(auth.currentUser,{displayName:name});
            await sendEmailVerification(auth.currentUser)
            setLoading(false);
		}catch(err){setLoading(false);console.log(err)}
	}
    
	return (
		<div className="wh-100 vh-100 d-flex justify-content-center align-items-center" style={{backgroundColor:'#f5f5f5'}}>
             <Card>
             	<Container className="container p-4">
	            	<Row>
	            	   <Col sm={12} md={7} className='d-flex align-items-center justify-content-center'>
	            	      <img src="register.svg" alt="register" width={450} />
	            	   </Col>
	            	   <Col sm={12} md={5}>
	            	   	 <Form onSubmit={handleSubmit}>
	            	   	  <h1>Sign Up</h1>
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
						  <Button variant="primary" type="submit" className="btn-color m-2">
						    { loading ? 'Loading..' : 'Sign Up'}
						  </Button>
						</Form>
	            	   </Col>
					</Row>
	            </Container>
             </Card>
		</div>
	)
}

