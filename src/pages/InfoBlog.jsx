import React from 'react'
import { gql,useQuery } from "@apollo/client"
import { Link } from 'react-router-dom';



const INFO = gql`{
  infomations {
    content {
      html
    }
    id
    slug
    title
  }
    }
`;



export default function InfoBlog() {
    const {data,loading,error} = useQuery(INFO);
    if(loading)return "ロード中";
    if(error)return `エラー！${error}`;
    // console.log(data)
  return (
    <>
    <div>PostList</div>
    {data.infomations.map((info) =>(
        <div key={info.id}>
      <p>{info.title}</p>
      
     {/* <Link to={`/posts/${info.id}`} >link</Link> */}
     <Link to={`/special/shinnouhai2023/posts/${info.slug}`} state={{id:`${info.id}`}}>link</Link>
     </div>
    ))}
    </>
  )
}
