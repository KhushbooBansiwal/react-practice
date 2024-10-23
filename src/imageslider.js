// import { useEffect, useState } from "react"

 

// //  useeffect with dependeccy array 
//  const ImageSlider=()=> {
//      const[count,setCount] = useState(0);
//      const[name, setName] = useState('')

// useEffect(()=>{
//     console.log("count has changed")
// }, [count])
//      return (
//         <div>
//             <h2>count:{count}</h2>
//             <button onClick={() =>{
//                 setCount(count +1)
//             }}> Increse Me</button>
// {/* the effect only run when the count is change allthought the comp rerenring the when we typing the input  */}
//             <input
//             type="text"
//             value={name}
//             onChange={(e)=> setName(e.target.value)}
//             placeholder="Enter Your Name"></input>
//         </div>
//      )
//  }
//   export default ImageSlider