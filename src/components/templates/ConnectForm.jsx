import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile, faFaceSadTear} from '@fortawesome/free-solid-svg-icons';


function ConnectForm(){

    const form = useRef();
    const[status, setStatus]= useState(false);
    const[error, setError]= useState(false);
    
    const handleForm = (e)=>{
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
        .then((result) => {
        if(result.text==="OK")
            {
                setStatus(true);
                const formElm =  document.getElementById("form_id");
                formElm.reset();
            }
             else{
                setStatus(false);
             }
          console.log(result.text);
      }, (error) => {
            setError(true);
            console.log(error.text);
      });    
    }

    return(
        <div className="connect-section">
            <div className="connect-form">
            <form id="form_id" ref={form} onSubmit={handleForm} autoComplete="off">
                         <h4>
                            <span>You will get an email from me..</span>
                        </h4>
                <table>
                    <tbody>
                        
                        <tr>
                            <td id="td-cell1">
                            <span>Name :</span>
                            </td>
                            <td  id="td-cell2">
                                <input type="text" name="user_name" placeholder="enter your name" required style={{width:"100%", height:"25px"}}/>
                            </td>
                        </tr>

                        <tr>
                            <td id="td-cell1">
                            <span>Email :</span>
                            </td>
                            <td  id="td-cell2">
                                <input type="email"  name="user_email" placeholder="enter your email" required style={{width:"100%",height:"25px"}}/>
                            </td>
                        </tr>

                        <tr>
                            <td id="td-cell1">
                            <span>Message :</span>
                            </td>
                            <td  id="td-cell2">
                            <textarea name="user_suggestion" placeholder="message or suggestion" required style={{width:"100%", resize:"none"}} />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="submit-button">
                    <input type="submit" value="Send" />
                </div>
                 </form>
                {status ? (<div className="email-response"> 
                    Thank you for your message
                <FontAwesomeIcon icon={faFaceSmile} />
                </div> ) : null}
                
                {error ?  ( <div className="email-response"> 
                    oops something went wrong.. 
                <FontAwesomeIcon icon={faFaceSadTear} />
                </div>) : null}

            </div>
            </div> 
    )
}
export default ConnectForm;