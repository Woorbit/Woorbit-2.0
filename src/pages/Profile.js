import React from 'react';
import {Container, Row , Col, Image, Card} from 'react-bootstrap';
import {getAuth} from 'firebase/auth';
import {doc, getDoc} from 'firebase/firestore';
import {db} from '../config/firebase';


const intialInfo = {
	address:'',
	city:'',
	gender:'',
	phoneNumber:'',
	state:'',
	country:''
}

export default function Profile({user}){

	const [info,setInfo] = React.useState(intialInfo);
	const auth = getAuth();

    React.useEffect(()=>{
    	if(!user) return;
    	try{
    		const docRef = doc(db,"users",auth.currentUser.reloadUserInfo.localId)
	        getDoc(docRef).then((snap)=>{
	        	if(snap.exists()) setInfo((i)=>({...i,...snap.data()}));
	        })
    	}catch(err){console.log(err.message)}
    },[user,auth.currentUser.reloadUserInfo.localId])



	return(
		<div className='vh-100 d-flex justify-content-center align-items-center' style={{backgroundColor:'#f5f5f5'}}>
			<Card>
				<Container className='p-4'>
					<Row className='p-4'>
					    <Col xs={12}><p>{ info.city === '' ? 'Loading...' : 'PROFILE'}</p></Col>
						<Col sm={12} md={6}> 
						   <Image alt="avatar" src={user?.photoURL || 'avatar.jpeg'} roundedCircle style={{width:'80%'}}/>
						</Col>
						<Col sm={12} md={6}>
						   <h1>{user?.displayName}</h1>
						   <p>{'GENDER: ' + info.gender}</p>
						   <p>{`ADDRESS: ${info.address}, ${info.city}`}</p>
						</Col>
						<Col sm={12} md={6}></Col>
						<Col sm={12} md={6}>
						   <h1>Contact</h1>
						   <p>{'PHONE: ' + info.phoneNumber}</p>
						   <p>{'EMAIL: ' + user?.email}</p>
						</Col>
					</Row>
				</Container>
			</Card>
		</div>
		)
}