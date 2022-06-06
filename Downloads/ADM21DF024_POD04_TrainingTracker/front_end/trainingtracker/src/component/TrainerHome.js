import React ,{useState,useEffect}from 'react';

import { Link } from "react-router-dom";
import {Form,Row,Col,Navbar,Container,Button} from 'react-bootstrap'
import TraineeForm from "./TraineeForm";
import RaiseRequest from './RaiseRequest';
import TrainerRating from './TrainerRating';
// import image from './path-to-image';
import profile from "./profile.jpg";
import ViewTrainees from "./ViewTrainees";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'


import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
  } from './NavbarElements';




export default function TrainerHome(props){ 
    const [user,setUser] = useState("");
   
    const Logout = ()=>{
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("id");
      sessionStorage.removeItem("userType");
      sessionStorage.removeItem("name");
      sessionStorage.removeItem("email");
      window.location='./'
    }
   
  
    
return (

<>    
        <Navbar className="navbar navbar-expand-lg navbar-dark shadow-5-strong">
  <Container>
    <Navbar.Brand className="text-white " href="./TrainerHome" ><h1>Trainer Dashboard</h1></Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Form className='d-flex justify-content-end'> 



    <Form.Group as={Row} required className="mb-3"  controlId="formGender">
    
          

            {/* <Col className='mt-2'>
            <NavLink className="btn btn-outline-secondary mx-2 btn-lg bg-transparent " style={{color:"white"}}to='/ViewTrainees  '>View Trainees</NavLink>
            </Col>
             */}

            <Col className='mt-2'>
            <NavLink className="btn btn-outline-secondary mx-2 btn-lg bg-transparent " style={{color:"white"}}to='/Coursedetails'>Course Overview</NavLink>
            </Col>

            <DropdownButton className=" mx-2 btn-lg bg-transparent " style={{height:"80px" ,width:"150px"}}  align title="Request"  >
          <Dropdown.Item  href='./viewTrainerRequest'>View Request</Dropdown.Item>
        <Dropdown.Item href="./TrainerRaiserequest">Raise Request</Dropdown.Item>
        <Dropdown.Item href="./ViewAssignedTrainerRequest">Assigned Requests</Dropdown.Item>
       </DropdownButton>

            <Col className='mt-2'>
            <Button className='btn-lg btn-outline-secondary btn bg-transparent' style={{height:"60px" ,width:"120px",color:"white"}} onClick={Logout} > Logout </Button>
            </Col>
          
      </Form.Group>
      
      <Col className='ms-5'>
            <Link to="/Profile_page"><img src={profile} alt="Logo" className='profile ' height="70" width="60"  /></Link>
      </Col>
        </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>

<center>
<h2 ><b class="text-white m-5"  > Welcome , {sessionStorage.getItem("name")}</b></h2>
</center>
        
    </>
    
    );
};


