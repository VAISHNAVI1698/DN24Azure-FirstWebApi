import React ,{useState,useEffect}from 'react';
import { Form,Button,Table } from "react-bootstrap";
function ViewTrainees() {
    const [data,setData]=useState([]);
    var requests = []
    var arr=[]
    var table=[]
   
let usertype=sessionStorage.getItem("usertype")   
let skills=sessionStorage.getItem("skills")
    useEffect(  () => {
        
        var result =    fetch("https://localhost:7279/api/Users")
        .then((response) => response.json())
        .then((data) => {
          setData(data)
          console.log(data);
        });
        
      }, []);




      
  return (
    <div>
<Table  className='table-striped text-white '  variant="bg-transparent" bordered size='sm' >
           
                <thead className="thead-white">
                <tr><th colSpan={12} className="text-white text-center">ALL TRAINEES </th></tr>
                    <tr className="thead-white" >
                        <th scope="col" className="text-white">Id</th>
                        <th scope="col" className="text-white">Name</th>
                        
                        <th scope="col" className="text-white">Email</th>
                        <th scope="col" className="text-white">User-Type</th>
                      <th scope="col" className="text-white">Skill-Set</th>

                      
                    </tr>
                </thead>
                <tbody>
{
    data.map((element)=>{
      
        if(element.usertype==="Trainee" && element.skills===skills )
        return (<>
        <tr key={element.id}>    
        <td className="text-white">{element.fname}</td>
        <td className="text-white">{element.email}</td>
        <td className="text-white">{element.usertype}</td>
        <td className="text-white">{element.skills}</td>
        </tr>

        </>)




        }
    )
}              
            
                </tbody>
          </Table>

          <div class="text-center">

<Button variant="danger" className='btn-lg' onClick={  ()=>window.location='./TrainerHome'}>Back</Button>
</div>
</div>
  )
}

export default ViewTrainees