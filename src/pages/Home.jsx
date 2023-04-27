import React from 'react'
import { gql,useQuery } from "@apollo/client"
import { Link } from 'react-router-dom';
import InfoBlog from './InfoBlog';




const CMS = gql`{
      heroVideos {
        id,
        url
      }
    }
`;


export default function Home() {

    const {data,loading,error} = useQuery(CMS);
    if(loading)return "ロード中";
    if(error)return `エラー！${error}`;


  return (
 

        <div>
        <h2>this is HOME page</h2>
     
        <div>
        {data.heroVideos.map((vid) =>(
            <div key={vid.id}>
                <h1>{vid.url}</h1>
            </div>
        ))}
        </div>
        <InfoBlog/>
        
    </div>
    
  )
}
