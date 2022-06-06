import React ,{useState,useEffect}from 'react';
import { Form,Button,Table } from "react-bootstrap";
function ViewAllTrainees() {
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
<Table  className=' text-white table-striped '  variant="bg-transparent" bordered size='sm' >
           
                <thead className="thead-white">
                <tr><th colSpan={12} className="text-white text-center">ALL TRAINEES </th></tr>
                    <tr className="thead-white">
                       
                        <th scope="col" className="text-white">FirstName</th>
                        <th scope="col" className="text-white">Last Name</th>
                        <th scope="col" className="text-white">Email</th>
                        <th scope="col" className="text-white">User-Type</th>
                      

                      
                    </tr>
                </thead>
                <tbody>
{
    data.map((element)=>{
        if(element.usertype==="Trainee" )
        return (<>
        <tr key={element.id}>    
         
         
        <td className="text-white">{element.firstName}</td>
        <td className="text-white">{element.lastName}</td>
        <td className="text-white">{element.email}</td>
        <td className="text-white">{element.usertype}</td>
        
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

export default ViewAllTrainees