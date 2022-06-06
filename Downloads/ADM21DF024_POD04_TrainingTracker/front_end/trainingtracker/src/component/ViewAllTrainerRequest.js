import React ,{useState,useEffect}from 'react';
import { Form,Button,Table } from "react-bootstrap";
function ViewTrainerRequest() {
    const [data,setData]=useState([]);
    var requests = []
    var arr=[]
    var table=[]
   
    
    

    

    useEffect(  () => {
        
        var result =    fetch("https://localhost:7279/api/TrainerRaiseRequests/")
        .then((response) => response.json())
        .then((data) => {
          setData(data)
          console.log(data);
        });
        
      }, []);




      
  return (
    <div>
<Table  className='text-white table-striped '  variant="bg-transparent" bordered size='sm' >
           
                <thead className="thead-dark">
                <tr><th colSpan={12} className="text-white text-center">ALL TRAINER REQUESTS</th></tr>
                    <tr >
                        <th scope="col" className="text-white">Id</th>
                        <th scope="col" className="text-white">Email</th>
                      <th scope="col" className="text-white">Skill</th>
                      <th scope="col" className="text-white">Start Date</th>
                      
                      <th scope="col" className="text-white">Student</th>
                      <th scope="col" className="text-white">Venue</th>
                      <th scope="col" className="text-white">Assigned</th>
                    </tr>
                </thead>
                <tbody>
                
{
    data.map((element)=>{
        return (<>
        <tr key={element.id}>       
         <td className="text-white">{element.id}</td>
        <td className="text-white">{element.temail}</td>
        <td className="text-white">{element.skill}</td>
        <td className="text-white">{element.startdate}</td>
        
        <td className="text-white">{element.student}</td>
        <td className="text-white">{element.venue}</td>
        <td className="text-white">{element.stuassigned}</td>
        </tr>

        </>)
    })
}              
            
                </tbody>
          </Table>

          <div class="text-center">

<Button variant="danger" className='btn-lg' onClick={  ()=>window.location='./AdminHome'}>Back</Button>
</div>
</div>
  )
}

export default ViewTrainerRequest