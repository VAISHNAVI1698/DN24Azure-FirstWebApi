import React,{useState} from "react";
import { Link } from "react-router-dom";
import {Form,Row,Col,Navbar,Container,Button} from 'react-bootstrap'
import { useEffect } from "react";
import UserLogIn from "./UserLogIn";
import TrainerForm from "./TrainerForm";
import TraineeForm from "./TraineeForm";


const Homepage = () =>{
    const [showcontent,setShowContent]= useState(true)
    const resetapp =()=>{
        
        sessionStorage.clear();
    }
    // console.log(generatePassword())
    const [user,setUser] = useState("");
    useEffect(()=>{
        if(user==="Admin")
        {
            <UserLogIn />
        }
    })
    let check;
    
    
    if(user==="Admin")
    {
      check =  <UserLogIn />
      
      
    }
    else if(user==="Trainer"){
        check = <TrainerForm />
        
        
    }
    else if(user==="Trainee"){
        check = <TraineeForm />

       
    }
    
    else{
        
    }
    return(
    <>
    {resetapp()}
        <Navbar className="navbar navbar-expand-lg navbar-dark shadow-5-strong">
  <Container>
    <Navbar.Brand className="text-white" href="./" ><h1>Training Tracker</h1></Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Form className='d-flex justify-content-end'> 
    <Form.Group as={Row} required className="mb-3" controlId="formGender">
        
            <Col className='mt-2'>
            <Button type='button' className="btn-lg btn bg-transparent"  style={{ width: "90%" }} id={`Admin`} label="Admin" name="user"
            defaultChecked={user === "Admin"} 
            onClick={(e)=>setUser(e.target.value)} value="Admin"> Admin/User SignIN </Button>
            </Col>
            <Col className='mt-2'>
            <Button type='button' className="btn-lg btn bg-transparent"  id={`Trainer`}  style={{ width: "90%"  }} label={`Trainer`} name="user"
            defaultChecked={user === "Trainer"} 
            onClick={(e)=>setUser(e.target.value)} value="Trainer"> Register - Trainer </Button>
            </Col>
            <Col className='mt-2'>
            <Button type='button' className="btn-lg btn bg-transparent" id={`Trainee`} style={{ width: "90%"  }} label={`Trainee`} name="user"
            defaultChecked={user === "Trainee"} 
            onClick={(e)=>setUser(e.target.value)} value="Trainee"> Register - Trainee </Button>
            </Col>
      </Form.Group>
        </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
        {
           check
        }


        


    </>
    
    );
};
export default Homepage;