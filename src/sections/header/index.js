import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Trusted from './Trusted'

export default function index({user}){
	return(
		<div id="home" style={{height:"100%",backgroundColor:"#eef3fd"}}>
			<Navbar user={user}/>
			<Banner/>
			<Trusted/>
		</div>
		)
}