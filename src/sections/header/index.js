import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Trusted from './Trusted'

export default function index({user}){
	return(
		<div id="home" style={{height:"100%"}} >
			<Navbar user={user}/>
			<Banner/>
			<Trusted/>
		</div>
		)
}