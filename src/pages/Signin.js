import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import {doc, getDoc} from 'firebase/firestore';
import {Form,Alert ,Container, Row, Col, Button,Card} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import {db} from '../config/firebase';


export default function Signin() {

	const [email,setEmail] = useState('');
	const [password,setPassword] = useState('');
	const [notification,setNotification] = React.useState(null);
	const [loading,setLoading] = React.useState(false);
	const navigate = useNavigate();
	const auth = getAuth();

	async function handleSubmit(e){
		setLoading(true);
		e.preventDefault();
		if(!email || !password) return;
		try{
			const {user} = await signInWithEmailAndPassword(auth,email,password);
			if(user.emailVerified){
				const docRef = doc(db,"users",auth.currentUser.reloadUserInfo.localId)
		        getDoc(docRef).then((snap)=>{
		        	setLoading(false); 
		        	if(snap.exists()) navigate('/');
		        	else navigate('/form');
		        })
			}
			else {setLoading(false); setNotification("Email is not verified!")};
		}catch(err){setLoading(false);setNotification("Email and Password not match");}
	}
    
	return (
		<div className="wh-100 vh-100 d-flex flex-column justify-content-center align-items-center" style={{backgroundColor:'#f5f5f5'}}>
            <Card>
            	<Container className="container p-4" >
	            	<Row>
	            	   <Col sm={12} md={7} className='d-flex align-items-center justify-content-center'>
	            	      <img src="login.svg"  alt="login" width={450}/>
	            	   </Col>
	            	   <Col sm={12} md={5}>
	            	   	 <Form onSubmit={handleSubmit}>
	            	   	  <h1>Sign In</h1>
						  <Form.Group className="mb-3" controlId="formBasicEmail">
						    <Form.Label>Email address</Form.Label>
						    <Form.Control type="email" placeholder="Enter email" value={email} onChange={({target})=>setEmail(target.value)}/>
						  </Form.Group>

						  <Form.Group className="mb-3" controlId="formBasicPassword">
						    <Form.Label>Password</Form.Label>
						    <Form.Control type="password" placeholder="Password" value={password} onChange={({target})=>setPassword(target.value)}/>
						  </Form.Group>
						  <Link className="m-2" to="/signup">Don't have account ? Register</Link>
						  <Button variant="primary" type="submit" className="btn-color">
						    { loading ? 'Loading..' : 'Login'}
						  </Button>
						</Form>
	            	   </Col>
					</Row>
	            </Container>
				{ notification && <Alert className="m-3" varient="danger" onClose={()=>setNotification(null)} dismissible>{notification}</Alert>}
            </Card>
		</div>
	)
}


