import React from 'react';
import {Container, Row , Col, Image, Card, Button} from 'react-bootstrap';
import {getAuth} from 'firebase/auth';
import {doc, getDoc} from 'firebase/firestore';
import {db} from '../config/firebase';
import {useNavigate} from 'react-router-dom';


const intialInfo = {
	address:'',
	city:'',
	gender:'',
	phoneNumber:'',
	state:'',
	country:'',
	companyName:''
}

export default function Profile({user}){

	const [info,setInfo] = React.useState(intialInfo);
	const navigate = useNavigate();
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
		<div className='d-flex justify-content-center align-items-center' style={{backgroundColor:'#f5f5f5'}}>
			<Card>
				<Container className='p-4'>
					<Row className='p-4'>
					    <Col xs={12} className='mb-4 text-align-center'><h1>{ info.city === '' ? 'Loading...' : 'PROFILE'}</h1></Col>
						<Col sm={12} className='d-flex justify-content-center'> 
						   <Image alt="avatar" src={user?.photoURL || 'avatar.jpeg'} roundedCircle style={{width:'25%'}}/>
						</Col>
						<Col sm={12} className='text-align-center'>
						   <h3>{user?.displayName}</h3>
						   <p>{'GENDER: ' + info.gender}</p>
						   <p>{`ADDRESS: ${info.address}, ${info.city}`}</p>
						</Col>
					</Row>
					<Row>
						<Col sm={12} md={7}>
						   <h3>Contact</h3>
						   <p>{'PHONE: ' + info.phoneNumber}</p>
						   <p>{'EMAIL: ' + user?.email}</p>
						</Col>
						<Col sm={12} md={5}>
						   <h3>Company</h3>
						   <p>{'Name: ' + info.companyName }</p>
						</Col>
					</Row>
					<Row><Button onClick={()=>navigate('/form')} >Update</Button></Row>
				</Container>
			</Card>
		</div>
		)
}