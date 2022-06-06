import React ,{useState,useEffect}from 'react';
import { Link } from "react-router-dom";
import {Form,Row,Col,Navbar,Container,Button} from 'react-bootstrap'
import TraineeForm from "./TraineeForm";
import RaiseRequest from './RaiseRequest';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
  } from './NavbarElements';




export default function TraineeHome(props){ 
   
const Logout = ()=>{
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("id");
  sessionStorage.removeItem("userType");
  sessionStorage.removeItem("name");
  sessionStorage.removeItem("email");
  window.location='./'
}
   console.log("inside trainee home")
   console.log(sessionStorage.getItem("email"))// working

return (


<>
        <Navbar className="navbar navbar-expand-lg navbar-dark shadow-5-strong">
  <Container>
    <Navbar.Brand className="text-white" href="./TraineeHome"><h1>Trainee Dashboard</h1></Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Form className='d-flex justify-content-end'> 
    <Form.Group as={Row} required className="mb-3"  controlId="formGender">
            
            <Col className='mt-2'>
            <NavLink className="btn btn-outline-secondary mx-2 btn-lg bg-transparent " style={{color:"white"}} to='/Raiserequest' >Raise Request</NavLink>
            </Col>

            <Col className='mt-2'>
            <NavLink className="btn btn-outline-secondary mx-2 btn-lg bg-transparent " style={{color:"white"}} to='/ViewRequestDetails'  >View Request</NavLink>
            </Col>
            
            <Col className='mt-2'>
            <NavLink className="btn btn-outline-secondary mx-2 btn-lg bg-transparent " style={{color:"white"}} to='/ViewAssignedTraineeRequest' >Assigned Requests</NavLink>
            </Col>

            <Col className='mt-2'>
            <NavLink className="btn btn-outline-secondary mx-2 btn-lg bg-transparent " style={{color:"white"}}to='/Courses '>Course Details</NavLink>
            </Col>
            


      </Form.Group>

{/* -----------LOGOUT----------- */}

<Form.Group as={Row} required className="mb-3"  controlId="formGender">
<Col className='mt-2'>
<Button className='float-end btn-danger mx-3 btn-lg' onClick={Logout}> Logout</Button>
</Col>
</Form.Group>
        </Form>

    </Navbar.Collapse>
  </Container>
</Navbar>


    <div >
    <center>
    <h2 ><b class="text-white m-5">Welcome , {sessionStorage.getItem("name")}</b></h2>
    </center>
    </div>
 

    </>
    
    );
};


