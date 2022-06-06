import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Form, Button, Row, Col, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Coursedetails()
{  const [data,setData]=useState([]);

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');}

    return(
         
    <div className="Buttons">
  <h1 className="text-center mb-4  margin-mt-5 pt-5" style={{width: "100%" , color: "#FF5722"}}>COURSE DETAILS </h1>

  
    
     <div className="mt-5" ><center>
    <Button variant="warning" size="lg" className='bt-lg' style={{ width: "15%"  }}onClick={ ()=>openInNewTab('https://www.w3schools.com/cs/index.php')}>.Net</Button>
    </center></div>
   
    <div className="mt-5"><center> 
   <Button variant="warning" size="200px" className='btn-lg' style={{ width: "15%"  }} onClick={ ()=>openInNewTab('https://www.w3schools.com/java/')}>Java</Button>
   </center></div>


    <div className="mt-5"><center>
    <Button variant="warning" size="lg"  className='btn-lg' style={{ width: "15%"  }} onClick={ ()=>openInNewTab('https://www.w3schools.com/aws/index.php')}>Cloud</Button>
    </center></div>

    <div className="mt-5"><center>
    <Button variant="warning" size="lg" className='btn-lg' style={{ width: "15%"  }} onClick={ ()=>openInNewTab('https://www.goskills.com/Soft-Skills')}>Softskills</Button>
    </center></div>

    <div className="mt-5"><center>
    <Button variant="success" className='btn-lg' style={{ width: "15%"  }} onClick={  ()=>window.location='./TrainerHome'}>Back</Button>
    </center></div>
    
    
  </div>
    
    );


}
export default Coursedetails


