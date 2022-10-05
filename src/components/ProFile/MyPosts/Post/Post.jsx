import React from 'react';
import s from './Post.module.css' 
const Post =(props)=>{

let posts=[
    {id:1, message:'Chaos is omnipotent, this is our way...', likesCount:17 },
{id:2,message:'There is no point in serving some gods when you can serve yourself...', likesCount:12},
{id:3,message:'Why think about anything other than pleasure?', likesCount:18}
  ] 
  
let postsElement = posts.map(posts=><posts message={posts.message} likesCount={posts.likesCount} id={posts.id}/>);

  return( <div className= {`${s.items} ${s.active}`}>
 {postsElement}
 
    </div>  
    
   


 )
  }
export default Post;