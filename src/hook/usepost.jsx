import { gql,useQuery } from "@apollo/client"


const getInfo = gql`

query MyQuery ($id: ID!){
    infomation(where: {id: $id}) {
      id
      slug
      title
      content {
        html
      }
    }
  }

`;

 export const usePost = (id) =>{
    
    const {data,loading,error} = useQuery(getInfo,{
        variables:{
            id
        }
    })
    return{
        data,
        loading,
        error
    }
}