import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";


function Todo(props) {   //props - Obkject containing key value pair , we can access text through props , always start funtion name with
                       
    const [modalisOpen,setModalIsOpen] = useState(false)                      // capital letter to avoid conflict between html tags and function in reacts

    function Delete(){
      setModalIsOpen(true)

    }

    function deletehandler(){
      setModalIsOpen(false)
    }
  return (
    <div className="card">
      <h2>{props.text}</h2> 
      <div className="actions">
        <button className="btn" onClick={Delete}>Delete</button> 
        {modalisOpen && <Modal onCancel = {deletehandler} />}
        {modalisOpen && <Backdrop onCancel={deletehandler} /> }
      </div>
    </div>
  );
}

export default Todo;
