import React ,{useState,useEffect}from 'react';
import { Form,Button,Table } from "react-bootstrap";




function  ViewRequestDetails() {
    const [data,setData]=useState([]);
    var requests = []
    var arr=[]
    var table=[]
    const fetchdetails = async ()=>{
        var temp = sessionStorage.getItem("email")
    const string=  temp.split('@')
    // https://localhost:7134/api/TrainingRequests/admin%40gmail.com?email=admin%40gmail.com
       var result = await   fetch("https://localhost:7279/api/TrainingRequests/"+string[0]+"%40"+string[1]+"?email="+string[0]+"%40"+string[1])
        .then((response) => response.json())
        .then((data) => {
          setData(data)
          console.log(data);
        });
        console.log("request array below")
        console.log(requests)
        console.log("result down ")
    console.log("Loggin speciic request array ")
    console.log(requests.map(element=>{console.log(element.id)}))
    
    

    }

    useEffect(  () => {
        var temp = sessionStorage.getItem("email")
        const string=  temp.split('@')
        var result =    fetch("https://localhost:7279/api/TrainingRequests/"+string[0]+"%40"+string[1]+"?email="+string[0]+"%40"+string[1])
        .then((response) => response.json())
        .then((data) => {
          setData(data)
          console.log(data);
        });
        
      }, []);

      const deleteRequest = (id)=>{
        console.log("Loggin uri for delete ")
        console.log()
          const res= fetch("https://localhost:7279/api/TrainingRequests/"+id, { method: 'DELETE' })
                .then(() => this.setState({ status: 'Delete successful' }));
                window.location.reload(false)
        }


      
  return (
    <div  className="text-white">
<Table  className=' text-white table-striped  '  variant="bg-transparent" bordered size='sm' >
           
                <thead className="thead-white">
                <tr ><th colSpan={12} className="text-white text-center">MY REQUESTS</th></tr>
                    <tr className="thead-white">
                        <th scope="col" className="text-white">Id</th>
                        <th scope="col" className="text-white">Email</th>
                      <th scope="col" className="text-white">Skill</th>
                      <th scope="col" className="text-white">Start Date</th>
                    
                      <th scope="col" className="text-white">Time</th>
                      <th scope="col" className="text-white">Trainer</th>
                      <th scope="col" className="text-white">Venue</th>
                      <th scope="col" className="text-white">Assigned</th>
                      <th scope="col" className="text-white">Delete</th>
                    </tr>
                </thead>
                <tbody> 
{
    data.map((element)=>{
        return (<>
        <tr key={element.id}>       
         <td className="text-white" >{element.id}</td>
        <td className="text-white">{element.semail}</td>
        <td className="text-white">{element.skill}</td>
        <td className="text-white">{element.startdate}</td>
      
        <td  className="text-white">{element.time}</td>
        <td className="text-white">{element.trainer}</td>
        <td className="text-white">{element.venue}</td>
        <td className="text-white">{element.assigned}</td>
        <td><Button variant="primary"  onClick={()=>deleteRequest(element.id)}>Delete</Button></td>
        </tr>

        </>)
    })
}              
            
                </tbody>
          </Table>
          <div class="text-center">

  <Button variant="danger" className='btn-lg' onClick={  ()=>window.location='./TraineeHome'}>Back</Button>
  </div>
</div>
  )
}

export default ViewRequestDetails