import React, { useState } from 'react';

const Home = () => {

	const [switchon, setSwitchOn] =useState("red")

	return (
		<div className='container'>
			<div className="traffic light holder bg-dark" ></div>
		  		<div className="traffic-light bg-dark">
			  		<div className={`bulb red light bg-danger round-circle ${switchon == "red" ? "iluminado":""}`} onClick={()=>setSwitchOn("red")}></div>
			  		<div className= {`bulb yellow light bg-warning round-circle ${switchon == "yellow" ? "iluminado":""}`} onClick={()=>setSwitchOn("yellow")}></div>
			  		<div className= {`bulb green light bg-success round-circle ${switchon == "green" ? "iluminado":""}`} onClick={()=>setSwitchOn("green")}></div>
		        </div>
		</div>
	);
};


export default Home;
