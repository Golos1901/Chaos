import React from "react";
import s from './Dialogs.module.css'
import{NavLink} from "react-router-dom"

const DialogItem=(props)=> {

    let path="/dialos/"+props.id;
    return <div className={s.dialog +' '+s.active} >
        <NavLink to ={path}>{props.name} </NavLink>
    </div>

}

const Message =(props)=>{
    return <div className={s.message}>{props.message} </div>
}


const Dialogs =(props)=> {
   
    let dialogs =[
{id:1,name:'Horus Lupercal'},
{id:2,name:'Abaddon'},
{id:3,name:'Lucius the Eternal'}
    ]
 
    let messages=[
        {id:1, message:'Chaos is omnipotent, this is our way...'},
{id:2,message:'There is no point in serving some gods when you can serve yourself...'},
{id:3,message:'Why think about anything other than pleasure?'}
    ]

let dialogsElements=dialogs
.map (dialog =><DialogItem name={dialog.name} id={dialog.id}/>);

   
   
let messagesElements= messages .map(message=><Message message={message.message}/>);

    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
               
          {dialogsElements}
                
     
            
            </div>
        <div className={s.messages}>

{messagesElements}
        </div>
        
        
        
        </div>
    )
}
export default Dialogs;