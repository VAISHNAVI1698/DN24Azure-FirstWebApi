import React ,{useState,useEffect}from 'react';
import { Link } from "react-router-dom";
import {Form,Row,Col,Navbar,Container,Button} from 'react-bootstrap'
import TraineeForm from "./TraineeForm";
import RaiseRequest from './RaiseRequest';
import TrainerRating from './TrainerRating';
import 'bootstrap/dist/css/bootstrap.css'; 
const logout = ()=>{
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("id");
  sessionStorage.removeItem("userType");
  sessionStorage.removeItem("name");
  sessionStorage.removeItem("email");
  window.location='./'
  
}
export default function AdminHome(props){ 
return (
<>

        <Navbar className="navbar navbar-expand-lg navbar-dark shadow-5-strong">
  <Container>
    <Navbar.Brand className="text-white " href="./AdminHome"><h1>Admin Dashboard</h1></Navbar.Brand>
    <Navbar.Toggle />
  

    <Navbar.Collapse className="justify-content-end">

    <Link to="/ViewAllTrainers"><Button type='button' className="btn btn-outline-secondary mx-2 btn-lg bg-transparent" id={`Trainer`} style={{color:"white"}} label="trainer" 
             value="Trainer"> All Trainer Details</Button></Link>

       <Link to="/ViewAllTrainees"><Button type='button' className="btn btn-outline-secondary mx-2 btn-lg bg-transparent " style={{color:"white"}}id={`Trainee`} label="trainee" 
             value="Trainee"> All Trainee Details</Button></Link> 

    <Link to="/ViewAllTrainerRequest"><Button type='button' className="btn btn-outline-secondary mx-2 btn-lg bg-transparent" style={{color:"white"}} id={`Trainer`} label="trainer" 
             value="Trainer"> Trainer Requests </Button></Link>

    <Link to="/ViewAllTraineeRequest"><Button type='button' className="btn btn-outline-secondary mx-2 btn-lg bg-transparent" style={{color:"white"}} id={`Trainer`} label="trainer" 
             value="Trainer"> Trainee Requests </Button></Link>


             
    <Button className="btn btn-outline-secondary mx-2 btn-lg bg-transparent" style={{color:"white"}} onClick={logout} > Logout </Button>
    
    </Navbar.Collapse>
  </Container>
</Navbar>
<center>
<h1 ><b class="text-black">Welcome , {sessionStorage.getItem("name")}</b></h1>
</center>
        
    </>
    
    );
};


