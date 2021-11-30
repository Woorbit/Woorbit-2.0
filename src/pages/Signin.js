import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import {doc, getDoc} from 'firebase/firestore';
import {Form,Alert , Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import {db} from '../config/firebase';


export default function Signin() {

	const [email,setEmail] = useState('');
	const [password,setPassword] = useState('');
	const [emailNotification,setEmailNotification] = React.useState(false);
	const navigate = useNavigate();
	const auth = getAuth();

	async function handleSubmit(e){
		e.preventDefault();
		if(!email || !password) return;
		try{
			const {user} = await signInWithEmailAndPassword(auth,email,password);
			if(user.emailVerified){
				const docRef = doc(db,"users",auth.currentUser.reloadUserInfo.localId)
		        getDoc(docRef).then((snap)=>{
		        	if(snap.exists()) navigate('/');
		        	else navigate('/form');
		        })
			}
			else setEmailNotification(true);
		}catch(err){console.log(err)}
	}
    
	return (
		<div className="wh-100 vh-100 d-flex flex-column justify-content-center align-items-center">
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
			 { emailNotification && <Alert className="m-3" varient="danger" onClose={()=>setEmailNotification(false)} dismissible>Email is not verified!</Alert>}
		</div>
	)
}

