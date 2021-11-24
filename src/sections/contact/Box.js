import React from 'react';



export default function Box({icon,title,children}){
	return(
		<div className="d-flex mb-4 flex-column justify-content-center bg-blue-light p-5 model-icon-blue box">
		  {icon}
		  <h5 className="mt-2">{title}</h5>
	      {children}	
	    </div>
		)
}