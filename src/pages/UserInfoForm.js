import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Form, Button} from 'react-bootstrap';
import {getAuth} from 'firebase/auth';
import {doc, setDoc, getDoc} from 'firebase/firestore';
import {db} from '../config/firebase';

export default function UserInfoForm(){

    const [name,setName] = React.useState('');
    const [email,setEmail] = React.useState('');
    const [phoneNumber,setPhoneNumber] = React.useState('');
    const [address,setAddress] = React.useState('');
    const [zip,setZip] = React.useState('');
    const [city,setCity] = React.useState('');
    const [state,setState] = React.useState('');
    const [country,setCountry] = React.useState('');
    const [gender,setGender] = React.useState('male');
    const navigate = useNavigate();
	const auth = getAuth();
    const user = auth.currentUser;
   

    React.useEffect(()=>{
    	if(user === null) return;
    	const docRef = doc(db,"users",auth.currentUser.reloadUserInfo.localId)
        getDoc(docRef).then((snap)=>{
        	if(snap.exists()) navigate('/');
        })
        setName(user.displayName);
        setEmail(user.email);
    },[user,auth.currentUser.reloadUserInfo.localId,navigate])

    
    async function handleSubmit(e){
    	e.preventDefault();
    	if(user === null) return;
    	const docRef = doc(db,"users",auth.currentUser.reloadUserInfo.localId)
        await setDoc(docRef,{address,zip,city, state, country, gender,phoneNumber});
        navigate('/');
    }


	return(
		 <div className="vh-100 d-flex justify-content-center align-items-center">
		 	 <Form className="container w-75 p-4 user-info-form" onSubmit={handleSubmit}>
			  <Form.Group className="mb-3 row" controlId="formBasicEmail">
			    <div className="col-4">
			    	<Form.Label>Name</Form.Label>
				    <Form.Control type="text" placeholder="name" value={name} disabled/>
			    </div>
			    <div className="col-4">
			    	<Form.Label>Email</Form.Label>
			        <Form.Control type="email" placeholder="email" value={email} disabled/>
			    </div>
			    <div className="col-4">
			    	<Form.Label>Phone Number</Form.Label>
			        <Form.Control type="text" placeholder="number" value={phoneNumber} onChange={({target})=>setPhoneNumber(target.value)}/>
			    </div>
			  </Form.Group>
            
              <Form.Group className="mb-3 row" controlId="formBasicEmail">
                <div className="mb-3 col-10">
			    	<Form.Label>Address</Form.Label>
				    <Form.Control type="text" placeholder="address" value={address} onChange={({target})=>setAddress(target.value)}/>
			    </div>
			    <div className="col-2">
			    	<Form.Label>Zip code</Form.Label>
				    <Form.Control type="text" placeholder="zip" value={zip} onChange={({target})=>setZip(target.value)} />
			    </div>
			    <div className="col-4">
			    	<Form.Label>City</Form.Label>
				    <Form.Control type="text" placeholder="city" value={city} onChange={({target})=>setCity(target.value)}/>
			    </div>
			    <div className="col-4">
			    	<Form.Label>State</Form.Label>
			        <Form.Control type="text" placeholder="state" value={state} onChange={({target})=>setState(target.value)}/>
			    </div>
			    <div className="col-4">
			    	<Form.Label>Country</Form.Label>
			        <Form.Control type="text" placeholder="country" value={country} onChange={({target})=>setCountry(target.value)}/>
			    </div>
			  </Form.Group>

			  <Form.Group className="mb-3 row" controlId="formBasicEmail">
			    <div className="col-4">
			    	<label for="exampleFormControlSelect1">Gender</label>
				    <select class="form-control" id="exampleFormControlSelect1" value={gender} onChange={({target})=>setGender(target.value)}>
				      <option value="male">Male</option>
				      <option value="female">Female</option>
				      <option value="other">Other</option>
				    </select>
			    </div>		    
			  </Form.Group>
			
			  <Button variant="primary" type="submit">
			    Submit
			  </Button>
			  <Button className="m-3" variant="dander" type="submit" style={{color:'red'}}>
			    Clear
			  </Button>
			</Form>
		 </div>
		)
}



