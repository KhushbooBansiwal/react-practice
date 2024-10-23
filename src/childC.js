

import { useContext } from 'react'
import {data,data1} from  './App'

function ChildC(){
    
     const name= useContext(data);
     const Gender= useContext(data1);
     return(
        <h2>Hello, i'am {name} and my gender is {Gender} </h2>
     )
}
 export default ChildC