import React ,{useState,useEffect}from 'react';
import { Form,Button,Table } from "react-bootstrap";
function ViewAllTrainers() {
    const [data,setData]=useState([]);
    var requests = []
    var arr=[]
    var table=[]
   

    useEffect(  () => {
        
        var result =    fetch("https://localhost:7279/api/Users")
        .then((response) => response.json())
        .then((data) => {
          setData(data)
          console.log(data);
        });
        
      }, []);

      
  return (
    <div className="text-white">
<Table  className='text-white table-striped '  variant="bg-transparent" bordered size='sm' >
           
                <thead className="thead-white">
                <tr><th colSpan={12} className="text-white text-center">ALL TRAINERS </th></tr>
                    <tr className="text-white">
                     
                        <th scope="col" className="text-white" >Name</th>
                        <th scope="col" className="text-white">Email</th>
                        <th scope="col"className="text-white">User-Type</th>
                      <th scope="col"className="text-white">Skill-Set</th>
                      
                    </tr>
                </thead>
                <tbody>
{
    data.map((element)=>{
        if(element.usertype==="Trainer")
        return (<>
        <tr key={element.id}>    
         
        <td className="text-white">{element.firstName}</td>
        <td className="text-white">{element.email}</td>
        <td className="text-white">{element.usertype}</td>
        <td className="text-white">{element.skills}</td>
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

export default ViewAllTrainers