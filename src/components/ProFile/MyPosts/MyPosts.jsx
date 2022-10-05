import React from 'react';
import s from './MyPosts.module.css' 
import Post from '../MyPosts/Post/Post'


const MyPosts =(props)=>{
   
   let posts=[
      {id:1, message:'Chaos is omnipotent, this is our way...', likesCount:17 },
  {id:2,message:'There is no point in serving some gods when you can serve yourself...', likesCount:12},
  {id:3,message:'Why think about anything other than pleasure?', likesCount:18}
    ] 
    let postsElement = posts.map(posts=><Post message={posts.message} likesCount={posts.likesCount} id={posts.id}/>);
   
    return(


 <div className= {s.Post}>

 <h3>Primarch's Speech</h3>
   <div>
   <div>
    <textarea></textarea>
    </div>
    <button>Add post</button>
   </div>
   
   {postsElement}
    
   </div>
   
   
    
   


)
}




export default MyPosts;