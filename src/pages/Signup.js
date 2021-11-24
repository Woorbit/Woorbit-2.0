import React, { useState } from 'react';
import {getAuth, createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import {doc, setDoc} from 'firebase/firestore';
import {Form, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import {db} from '../config/firebase';

export default function Signin() {

    const [name,setName] = useState('');
	const [email,setEmail] = useState('');
	const [phone,setPhone] = useState('');
	const [password,setPassword] = useState('');
	const auth = getAuth();

	async function handleSubmit(e){
		e.preventDefault();
		if(!email || !password || !phone || !name ) return;
		try{
			await createUserWithEmailAndPassword(auth,email,password);
            await updateProfile(auth.currentUser,{displayName:name});
            const docRef = doc(db,"users",auth.currentUser.reloadUserInfo.localId);
            await setDoc(docRef,{phoneNumber:phone})
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
			    <Form.Label>Number</Form.Label>
			    <Form.Control type="tel" placeholder="Mobile number" value={phone} onChange={({target})=>setPhone(target.value)}/>
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

