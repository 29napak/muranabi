import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { usePost } from '../hook/usepost';








export default function InfoPage() {
  const location =useLocation();
  const {id} =location.state;
 
  const {data,loading,error} =usePost(id)
  if(loading)return "ロード中";
  if(error)return `エラー！${error}`;
  console.log(id)

  console.log(data)

  



 



  return (
    <>
    <div>
      <h1>this is posts page</h1>

      <p>post title is:{data.infomation.title}</p>
      <p>post url is /post/{data.infomation.slug}</p>
     <div> {data.infomation.content.html}</div>
     
      
 

   
   
    </div>
      
    </>
  
  )
}

