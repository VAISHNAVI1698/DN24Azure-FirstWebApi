import React ,{useState,useEffect}from 'react';
import { Form,Button,Table,Modal } from "react-bootstrap";

function ViewAssignedTraineeRequest() {
    function MyVerticallyCenteredModal(props) {
        const [rating,setRating] = useState(0)
        const submitRating = ()=>{
            console.log("printing rating")
            console.log(rating)

            var obj = JSON.parse(sessionStorage.getItem('student'));
            console.log(obj)

            obj["trainerRating"]=rating;
            console.log("printing final value")
            console.log(obj)
            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(obj)
            };
            const result = fetch('https://localhost:7279/api/AssignedTables/'+obj["id"], requestOptions)
                .then(response => response.json())
                .then(data => console.log(data));
        
console.log("Executed put method above value is the response ")

window.location='/ViewAssignedTraineeRequest'

        }
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Rate Your Trainer
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form colSpan={12} onSubmit={(e)=>{e.preventDefault(); submitRating()}}>
            <input  class="form-control-sm" colSpan={12} onChange={(e)=>{setRating(e.target.value)}} type="number" id="quantity" name="quantity" min="1" max="10"/>
            <input class="btn btn-primary" type="submit"/>
            </form>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }
    const [modalShow, setModalShow] = React.useState(false);
const giveRating = ()=>{

}




const [data,setData] = useState([])
useEffect(  () => {
var temp = sessionStorage.getItem("email")
    const string=  temp.split('@')
    // https://localhost:7134/api/TrainingRequests/admin%40gmail.com?email=admin%40gmail.com
    const role = "Trainee"
    var temp1="https://localhost:7279/api/AssignedTables/api/"+string[0]+"%40"+string[1]+"?email="+string[0]+"%40"+string[1]+"&role="+role
    console.log(temp1)
   
       var result =    fetch("https://localhost:7279/api/AssignedTables/api/"+string[0]+"%40"+string[1]+"?email="+string[0]+"%40"+string[1]+"&role="+role)
        .then((response) => response.json())
        .then((data) => {
          setData(data)
          console.log(data);
        });
    }, []);
  return (
  <>
    <div className="text-white">
  <Table  className='  text-white table-striped'  variant="bg-transparent" bordered size='sm' >
           <thead className="thead-white">
           <tr><th colSpan={12} className="text-white text-center">MY REQUESTS</th></tr>
               <tr >
                   <th scope="col"  className="text-white">Id</th>
                   <th scope="col"  className="text-white">Trainer Name</th>
                 <th scope="col"  className="text-white">Trainer-Email</th>
                 <th scope='col'  className="text-white">Acquired Skill</th>
                 <th scope="col"  className="text-white">Start Date</th>
                 <th scope="col"  className="text-white">Time</th>
                 <th scope="col"  className="text-white">Trainee</th>
                 <th scope="col"  className="text-white">Trainee Email</th>
                 <th scope="col"  className="text-white">Venue</th>
                 <th scope='col'  className="text-white">Rating</th>
                 <th scope="col"  className="text-white">GiveRating</th>
                 
               </tr>
           </thead>
           <tbody>
{
data.map((element)=>{
   return (<>
   <tr key={element.id}>       
    <td  className="text-white">{element.id}</td>
   <td  className="text-white">{element.trainerName}</td>
   <td  className="text-white">{element.temail}</td>
   <td  className="text-white">{element.skill}</td>
   <td  className="text-white">{element.startDate}</td>
   <td  className="text-white">{element.time}</td>
   <td  className="text-white">{element.traineeName}</td>
   <td  className="text-white">{element.semail}</td>
   <td  className="text-white">{element.venue}</td>
   <td  className="text-white">{element.trainerRating}</td>
   <td><Button onClick={()=>{setModalShow(true); sessionStorage.setItem('student', JSON.stringify(element));
 }}>GiveRating</Button></td>
   </tr>
   </>)
})
}
           </tbody>
     </Table>

     <MyVerticallyCenteredModal
          
          show={modalShow}
          onHide={() => setModalShow(false)}  

          
          />


<div class="text-center">

<Button variant="danger" className='btn-lg' onClick={  ()=>window.location='./TraineeHome'}>Back</Button>
</div>
</div>
  </>
  )
}
export default ViewAssignedTraineeRequest