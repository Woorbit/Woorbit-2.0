import React from 'react'
import { Carousel } from 'react-bootstrap';


export default function Trusted(){
	return(<div>
		<h5 className="white section-heading-text mb-0 pt-5" >TRUSTED BY</h5>
		<Carousel className="white">
		  <Carousel.Item className="h-100" interval={1000}>
		    <div className="d-flex justify-content-center align-items-center" style={{height:"300px"}}>
		    	<img
			      className="d-block w-25"
			      src="codingninjas.png"
			      alt="First slide"
		        />
		    </div>
		  </Carousel.Item>
		  <Carousel.Item interval={1000}>
		     <div className="d-flex justify-content-center align-items-center" style={{height:"300px"}}>
		    	<img
			      className="d-block w-25"
			      src="codingblocks.png"
			      alt="First slide"
		        />
		    </div>
		  </Carousel.Item>
		  <Carousel.Item interval={1000}>
		     <div className="d-flex justify-content-center align-items-center" style={{height:"300px"}}>
		    	<img
			      className="d-block w-25"
			      src="codingblocks.png"
			      alt="First slide"
		        />
		    </div>
		  </Carousel.Item>
		</Carousel>
		</div>
		)
}