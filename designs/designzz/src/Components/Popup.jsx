import React from 'react'
import Swal from 'sweetalert2'

const Popup = () => {

    const handleAlertClick=()=>{
        Swal.fire("hello this is a simple alert")
    }

    const handleConfirmClick=()=>{
        Swal.fire({
            title:"Are you sure?",
            text:"delete item",
            icon:"warning",
            showCancelButton:true,
            confirmButtonText:"yes,delete it",
            cancelButtonText:"cancel it"
        }).then((result) => {
            if(result.isConfirmed){
                Swal.fire("Deleted", "your file has been deleted", 'success')
            }else if (result.dismiss === Swal.DismissReason.cancel){
                Swal.fire("cancelled", 'your file is not deleted','error')
            }
        })
    }

    const handlePromptClick=()=>{
        
    }

    const handleSuccessClick=()=>{
        Swal.fire('success', "its successfully completed",'success')
    }

    const handleErrorClick=()=>{
        Swal.fire('error!', "something went wrong",'error')
    }

    const handleWarningClick=()=>{
        Swal.fire('warning', 'please be careful','warning')
    }

    const handleInfoClick=()=>{
        Swal.fire('info','this is an information','info')
    }

    const handleQuestionClick=()=>{
        Swal.fire('question',"are you sure to do it",'question')
    }


  return (
    <>
    <div>
        <h1>alerts and popups</h1>
        <button onClick={handleAlertClick}>Alert Dialog</button>
        <button onClick={handleConfirmClick}>confirm Dialog</button>
        <button onClick={handlePromptClick}>prompt Dialog</button>
        <button onClick={handleSuccessClick}>success Dialog</button>
        <button onClick={handleErrorClick}>error Dialog</button>
        <button onClick={handleWarningClick}>warning Dialog</button>
        <button onClick={handleInfoClick}>info Dialog</button>
        <button onClick={handleQuestionClick}>question Dialog</button>


    </div>
    </>
  )
}

export default Popup