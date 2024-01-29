import axios from "axios"
import { useEffect } from "react"



export default function Axious(){
    
 const fetchData= async()=>{

     const requestObj={
         url:"https://jsonplaceholder.typicode.com/posts",
         method:"GET"
        }
        const result= await  axios(requestObj)
        console.log(result)
     
    }
   
    
    useEffect(()=>{
        fetchData()
        
    },[])
    
    
    return(
        <h1>mts</h1>
        // if(result.status===200)
    )
}